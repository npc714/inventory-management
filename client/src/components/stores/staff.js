import { defineStore } from "pinia";
import api from "../api";
import { useFeedbackStore } from "./feedback";

export const useStaffStore = defineStore("staff", {
    state: () => ({
        salesStaff: [],
    }),

    getters: {},

    actions: {

        async getStaffMetric(id, range) {
           try{
                 const response =await api.get(`/key-metrics/metric/${id}/${range}`);
                console.log(response.data);
                const staff=this.salesStaff.find((x)=>x.staffId===id);
                if(staff){
                    staff.totalOrders = response.data.result?.totalOrders ?? 0;
                    staff.totalRevenue = response.data.result?.totalRevenue ?? 0;
                }
           } catch(err){
            console.log(err);
           }
        },

        async getStaffList() {
            try {
                const response = await api.get("auth/admin/list-users");
                this.salesStaff = response.data.result
                    .filter((item) => {
                        return item.role === "sales";
                    })
                    .sort((a, b) => {
                        if (a.online !== b.online) {
                            return b.online - a.online;
                        }
                        return new Date(b.lastSeen) - new Date(a.lastSeen);
                    });

                this.salesStaff.forEach((item) => {
                    item.firstName = item.firstName
                        .toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase());
                    item.lastName = item.lastName
                        .toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase());
                    item.role = item.role
                        .toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase());

                    this.getStaffMetric(item.staffId, "day");
                    
                });
                console.log(this.salesStaff);
                return;
            } catch (err) {
                console.log(err);
            }
        },

        getLastSeen() {
            setInterval(() => {
                const now = Date.now();

                this.salesStaff.forEach((item) => {
                    if (!item.online && item.lastSeen) {
                        const diff = now - item.lastSeen;

                        const units = [
                            { label: "yr", value: 1000 * 60 * 60 * 24 * 365 },
                            { label: "mth", value: 1000 * 60 * 60 * 24 * 30 },
                            { label: "wk", value: 1000 * 60 * 60 * 24 * 7 },
                            { label: "day", value: 1000 * 60 * 60 * 24 },
                            { label: "hr", value: 1000 * 60 * 60 },
                            { label: "min", value: 1000 * 60 },
                            { label: "sec", value: 1000 },
                        ];

                        for (const unit of units) {
                            const count = Math.floor(diff / unit.value);
                            if (count >= 1) {
                                item.lastSeenInfo = `${count} ${unit.label}${
                                    count > 1 ? "s" : ""
                                } ago`;
                                return;
                            }
                        }

                        item.lastSeenInfo = "just now";
                    } else {
                        item.lastSeenInfo = "nil";
                    }
                });
            }, 1000);
        },
    },
});
