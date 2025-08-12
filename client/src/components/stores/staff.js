import { defineStore } from "pinia";
import api from "../api";

export const useStaffStore = defineStore("staff", {
    state: () => ({
        salesStaff: [],
    }),

    getters: {},

    actions: {
        async getStaffList() {
            try {
                const response = await api.get("auth/admin/list-users");
                this.salesStaff = response.data.result.filter((item) => {
                    return item.role === "sales";
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
                });

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
