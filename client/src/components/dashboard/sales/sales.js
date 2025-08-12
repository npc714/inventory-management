import { onBeforeUnmount, onMounted, ref, computed } from "vue";
import { useStockStore } from "../../stores/stock";
import {useAuthStore} from "../../stores/auth"
import socket from "../../../socket";
import api from "../../api";

export function useSales(){

    const stock=useStockStore();
    const auth=useAuthStore();
    const saleItems=ref([]);
    const itemQuantity=ref(1);
    const saleTotal=computed(()=>{
        let total=0;
        saleItems.value.forEach((item)=>{
            total+=(item.sellingPrice*item.quantity);
        });
        return total;
    });
    const totalSaleItems=computed(()=>{
        let total=0;
        saleItems.value.forEach((item)=>{
            total+=item.quantity;
        });
        return total;
    });

    onMounted(()=>{
        stock.getStocks();
        socket.on("itemAdded", () => {
            stock.getStocks();
        });
    });

    onBeforeUnmount(() => {
        socket.off("itemAdded");
    });

    function addSaleItem(item, quantity){

        const existingItem=saleItems.value.find((x)=>x.sku===item.sku);
        if(existingItem) {
            existingItem.quantity+=quantity;
        } else {
            const cleanedItem={
                name: item.name,
                totalQuantity: item.totalQuantity,
                sellingPrice: item.sellingPrice,
                sku: item.sku,
                quantity
            }
            saleItems.value.push(cleanedItem);
            console.log(cleanedItem);
        }
        itemQuantity.value=1;

    }

    function removeSaleItem(item){
        saleItems.value = saleItems.value.filter(i => i.sku !== item.sku);
    }

    async function processPayment(){

        try {
            if(saleItems.value.length<1) throw new Error("Cart is empty");

            const saleLog={
                staffId: auth.getStaffId,
                action: "sale",
                timestamp: new Date().toISOString,
                items: saleItems.value,
                saleTotal: saleTotal.value,
            };

            const saleData={
                saleItems: saleItems.value,
                saleLog
            };
            const response = await api.post("/inventory/process-sale", saleData);
            saleItems.value=[];
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }

    }

    return {
        saleItems,
        itemQuantity,
        saleTotal,
        totalSaleItems,
        addSaleItem,
        removeSaleItem,
        processPayment,
    }

}