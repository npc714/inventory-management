<template>

    <router-view />
    <feedback/>

</template>

<script setup>

    import { onMounted } from 'vue';
    import { useAuthStore } from './components/stores/auth';
    import feedback from './components/feedBack/feedback.vue';

    onMounted(() => {
        const auth = useAuthStore();
        if (auth.isAuthenticated) {
            auth.startHeartbeat();
        }
    });

</script>
