<template>

    <component :is="currentComponent"/>

</template>

<script setup>

    import { computed } from "vue";

    import Admin from "./admin/admin.vue";
    import Sales from "./sales/sales.vue"

    import { useAuthStore } from "../stores/auth";
    const auth=useAuthStore();

    const currentComponent = computed(() => {
        return auth.isAdmin ? Admin : Sales;
    });

</script>