import { defineStore } from "pinia";
import api from "../api";

export const useStockStore = defineStore("stock", {
    state: () => ({
        stocks: [],
    }),

    getters: {
        getLowStock: (state)=>{
            console.log("stock", state.stocks);
            return state.stocks.filter((x)=>x.totalQuantity<31).length;
        }
    },

    actions: {

        async addStock(stock){

            try {
                const response = await api.post("/inventory/add-item", stock);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }

        },

        async getStocks() {

            try {

                const response = await api.get("/inventory/list-items");
                console.log(response);
                this.stocks=response.data.result;

            } catch (err) {
                console.log(err);
            } 

        },

    },
});
