import { defineStore } from "pinia";
import { useFeedbackStore } from "./feedback";
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
            const feedback=useFeedbackStore()

            try {
                const response = await api.post("/inventory/add-item", stock);
                console.log(response.data);
                feedback.addNotification("success", response.data.message);
            } catch (err) {
                console.log(err);
                feedback.addNotification("error", err.response.data.message);
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
