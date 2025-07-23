import {createRouter, createWebHistory} from "vue-router";
import Login from "./components/login/login.vue";
import Dashboard from  "./components/dashboard/dashboard.vue";

const routes=[

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }

]

const router=createRouter({
    history: createWebHistory(),
    routes
});

export default router;