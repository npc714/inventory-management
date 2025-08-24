import { onBeforeUnmount, onMounted, ref, computed } from "vue";
import { useStockStore } from "../../stores/stock";
import { useAuthStore } from "../../stores/auth";
import { useFeedbackStore } from "../../stores/feedback";
import socket from "../../../socket";
import api from "../../api";

export function useSales() {
    const stock = useStockStore();
    const auth = useAuthStore();
    const feedback=useFeedbackStore();
    const saleItems = ref([]);
    const itemQuantity = ref(1);
    const saleTotal = computed(() => {
        let total = 0;
        saleItems.value.forEach((item) => {
            total += item.sellingPrice * item.quantity;
        });
        return total;
    });
    const totalSaleItems = computed(() => {
        let total = 0;
        saleItems.value.forEach((item) => {
            total += item.quantity;
        });
        return total;
    });
    const recentSales = ref([]);

    const revenueToday = computed(() => {
        let total = 0;
        if (recentSales.value.length > 0) {
            recentSales.value.forEach((item) => {
                total += item.saleTotal;
            });
        }
        return total;
    });

    const itemsSold = computed(() => {
        let total = 0;
        if (recentSales.value.length > 0) {
            recentSales.value.forEach((item) => {
                total += item.itemQuantity;
            });
        }
        return total;
    });

    async function getSaleLogs() {
        try {
            const response = await api.get(
                `log-fetch/sales/${auth.getStaffId}`
            );
            response.data.result.forEach((x) => {
                x.itemNames = x.items.map((x) => {
                    return x.name[0].toUpperCase() + x.name.slice(1);
                });
                x.itemNames = x.itemNames.join(" + ");
                x.time = `${new Date(x.timestamp).getHours()}:${String(
                    new Date(x.timestamp).getMinutes()
                ).padStart(2, "0")}`;
            });
            recentSales.value = response.data.result.reverse();
            console.log(recentSales.value);
        } catch (err) {
            console.log(err);
        }
    }

    onMounted(async () => {
        stock.getStocks();
        socket.on("itemAdded", () => {
            stock.getStocks();
        });

        getSaleLogs();

        socket.on("logUpdate", () => {
            getSaleLogs();
        });
    });

    onBeforeUnmount(() => {
        socket.off("itemAdded");
        socket.off("logUpdate");
    });

    function addSaleItem(item, quantity) {
        try {
            if (quantity < 1) {
                throw new Error(`Please enter a number greater than 0`);
            }
            if (item.totalQuantity < quantity) {
                throw new Error(
                    `Specified quantity (${quantity}) exceeds available stock (${item.totalQuantity})`
                );
            }
            const existingItem = saleItems.value.find(
                (x) => x.sku === item.sku
            );
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                const cleanedItem = {
                    name: item.name,
                    totalQuantity: item.totalQuantity,
                    sellingPrice: item.sellingPrice,
                    sku: item.sku,
                    quantity,
                };
                saleItems.value.push(cleanedItem);
                console.log(cleanedItem);
            }
            itemQuantity.value = 1;
        } catch (err) {
            console.log(err);
            feedback.addNotification("error", err.message);
        }
    }

    function removeSaleItem(item) {
        saleItems.value = saleItems.value.filter((i) => i.sku !== item.sku);
    }

    async function processPayment() {
        try {
            if (saleItems.value.length < 1) throw new Error("Cart is empty");

            const saleLog = {
                staffId: auth.getStaffId,
                action: "sale",
                items: saleItems.value,
                itemQuantity: totalSaleItems.value,
                saleTotal: saleTotal.value,
            };

            const activityLog = {
                ...saleLog,
                name: auth.getStaffName,
            };

            const saleData = {
                saleItems: saleItems.value,
                saleLog,
                activityLog,
            };

            const response = await api.post(
                "/inventory/process-sale",
                saleData
            );
            const res=await api.post("/key-metrics/metric", {
                staffId: auth.getStaffId,
                date: new Date().toISOString().split("T")[0],
                totalRevenue: saleTotal.value,
                totalOrders: 1,
            });
            saleItems.value = [];
            console.log(res);
            feedback.addNotification("success", response.data.message);
        } catch (err) {
            console.log(err);
            feedback.addNotification("error", err.message);
        }
    }

    return {
        saleItems,
        itemQuantity,
        saleTotal,
        totalSaleItems,
        recentSales,
        revenueToday,
        itemsSold,
        addSaleItem,
        removeSaleItem,
        processPayment,
    };
}
