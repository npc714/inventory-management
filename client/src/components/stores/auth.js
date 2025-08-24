import { defineStore } from "pinia";
import api from "../api";
import router from "../../router";
import { useStaffStore } from "./staff";
import { useFeedbackStore } from "./feedback";
import Feedback from "../feedBack/feedback.vue";

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
            const feedback=useFeedbackStore();
            try {
                const response = await api.post("/auth/login", credentials);
                this.isAuthenticated = response.status === 200;
                feedback.addNotification("success", response.data.message)
                this.startHeartbeat();
                console.log(response.data);

                return;
            } catch (err) {
                console.log(err);
                feedback.addNotification("error", err.response.data.message)
            }
        },

        async logOut() {
            const staff = useStaffStore();
            const feedback=useFeedbackStore();
            try {
                const response = await api.get(
                    `/auth/logout/${this.getStaffId}`
                );
                this.stopHeartbeat();
                router.push("/login");
                console.log(response.data);
                feedback.addNotification("success", response.data.message)
            } catch (err) {
                console.log(err);
                feedback.addNotification("error", err.response.data.message)
            }
        },
    },
});
