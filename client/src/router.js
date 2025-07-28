import {createRouter, createWebHistory} from "vue-router";
import Login from "./components/login/login.vue";
import AddStaff from "./components/addStaff/addStaff.vue"
import Dashboard from  "./components/dashboard/dashboard.vue";
import AddStock from "./components/addStock/addStock.vue";

const routes=[

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    
    {
        path: '/add-staff',
        name: 'Add-Staff',
        component: AddStaff
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

    {
        path: '/add-stock',
        name: 'AddStock',
        component: AddStock
    }

]

const router=createRouter({
    history: createWebHistory(),
    routes
});

export default router;