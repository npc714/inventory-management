import {createRouter, createWebHistory} from "vue-router";
import Login from "./components/login/login.vue";
import AddStaff from "./components/addStaff/addStaff.vue"
import Dashboard from  "./components/dashboard/dashboard.vue";
import AddStock from "./components/addStock/addStock.vue";

import { useAuthStore } from "./components/stores/auth";
import api from "./components/api";

const routes=[

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    
    {
        path: '/add-staff',
        name: 'Add-Staff',
        component: AddStaff,
        meta: { requiresAuth: true }
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },

    {
        path: '/add-stock',
        name: 'AddStock',
        component: AddStock,
        meta: { requiresAuth: true }
    }

]

const router=createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();

    try {
        const response = await api.get('auth/logged-in');

        auth.isAuthenticated = response.data.authenticated;
        auth.user = response.data.result;

        if (to.path === '/login' && auth.isAuthenticated) {
            return next('/dashboard');
        }

        if (to.meta.requiresAuth && !auth.isAuthenticated) {
            return next('/login');
        }

        console.log(auth.getStaffName); 
        return next();

    } catch (err) {
        console.error(err);

        auth.isAuthenticated = false;
        auth.user = null;

        const status = err.response?.status;

        if (to.meta.requiresAuth) {
            return next('/login');
        }

        if (status === 500) {
            return next(false); // block navigation
        }

        return next();
    }
});


export default router;