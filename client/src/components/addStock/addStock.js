import { ref, computed, watch } from "vue";
import { useStockStore } from "../stores/stock";

export function useAddStock(){

    const stock=useStockStore();
    const name=ref("");
    const category=ref("");
    const brand=ref("");
    const attributes=ref("");
    const quantity=ref("");
    const costPrice=ref("");
    const sellingPrice=ref("");
    
    const sellingPricePercent = computed({
        get() {
            if (costPrice.value > 0 && sellingPrice.value > 0) {
                return `${+(((sellingPrice.value - costPrice.value) / costPrice.value) * 100).toFixed(2)}%`;
            }
            return ` ${0}%`;
        },
        set(newPercent) {
            sellingPrice.value = +(costPrice.value * (1 + (newPercent).replace("%", "") / 100)).toFixed(2);
        }
    });

    const generateSKU = ({ category, name, brand, attributes }) => {
        const formatSegment = (text) => {
            if (!text || typeof text !== "string") return "";

            const cleanWords = text
                .toLowerCase()
                .trim()
                .split(/\s+/)
                .map(w => w.replace(/[^a-z0-9]/g, ""));

            if (cleanWords.length === 0) return "";

            return cleanWords.length > 1
                ? cleanWords.map(w => w[0] || "").join("")
                : cleanWords[0].slice(0, 3);
        };

        const formatAttributes = (input) => {
            let attrArray = [];

            if (Array.isArray(input)) {
                attrArray = input;
            } else if (typeof input === "string") {
                attrArray = input.split(",");
            } else if (input && typeof input === "object") {
                attrArray = Object.values(input);
            }

            return attrArray
                .map(attr =>
                    String(attr)
                        .toLowerCase()
                        .trim()
                        .replace(/[^a-z0-9]/g, "")
                        .slice(0, 4)
                )
                .filter(Boolean)
                .sort()
                .join("-");
        };

        return `sku-${formatSegment(category)}-${formatSegment(name)}-${formatSegment(brand)}-${formatAttributes(attributes)}`.toUpperCase();
    };


    attributes.value=attributes.value.split(',');
    console.log("Attributes:", attributes.value);

    const sku=computed(()=>generateSKU({
        category: category.value,
        name: name.value,
        brand: brand.value,
        attributes: attributes.value,
    }));


    async function addStock(){
        const item={
            name: name.value,
            category: category.value,
            brand: brand.value,
            attributes: attributes.value,
            sku: sku.value,
            quantity: quantity.value,
            costPrice: costPrice.value,
            sellingPrice: sellingPrice.value,
        };
        stock.addStock(item);
        console.log(item);
    }

    return{
        name,
        category,
        brand,
        attributes,
        sku,
        quantity,
        costPrice,
        sellingPrice,
        sellingPricePercent,
        addStock,
    }

}