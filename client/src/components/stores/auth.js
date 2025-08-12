import { defineStore } from "pinia";
import api from "../api";
import router from "../../router";
import { useStaffStore } from "./staff";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {},
        isAuthenticated: false,
        heartbeatInterval: null,
    }),

    getters: {
        getUserRole: (state) => state.user?.role,
        isAdmin: (state) => state.user?.role === "admin",
        getStaffId: (state) => state.user?.staffId,
        getStaffName: (state) =>
            `${state.user?.firstName} ${state.user?.lastName}`,
    },

    actions: {
        startHeartbeat() {
            this.stopHeartbeat();
            if (this.isAuthenticated) {
                this.heartbeatInterval = setInterval(() => {
                    api.get(`/auth/ping/${this.getStaffId}`);
                    console.log("ping");
                }, 5000);
            }
        },

        stopHeartbeat() {
            if (this.heartbeatInterval) {
                clearInterval(this.heartbeatInterval);
                this.heartbeatInterval = null;
            }
        },

        async login(credentials) {
            const staff = useStaffStore();
            try {
                const response = await api.post("/auth/login", credentials);
                this.isAuthenticated = response.status === 200;
                this.startHeartbeat();
                console.log(response.data);

                return;
            } catch (err) {
                console.log(err);
            }
        },

        async logOut() {
            const staff = useStaffStore();
            try {
                const response = await api.get(
                    `/auth/logout/${this.getStaffId}`
                );
                this.stopHeartbeat();
                router.push("/login");
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        },
    },
});
