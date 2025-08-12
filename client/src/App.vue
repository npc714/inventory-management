<template>

    <router-view />

</template>

<script setup>

    import { onMounted } from 'vue';
    import { useAuthStore } from './components/stores/auth';

    onMounted(() => {
        const auth = useAuthStore();
        if (auth.isAuthenticated) {
            auth.startHeartbeat();
        }
    });

</script>
