import { defineStore } from "pinia";
import api from "../api";

export const useStockStore = defineStore("stock", {
    state: () => ({
        stocks: [],
    }),

    getters: {

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

        async getInventory() {

            try {

                const response = await api.get("/inventory/list-items");

            } catch (err) {
                console.log(err);
            } 

        },

    },
});
