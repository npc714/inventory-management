<template>

    <component :is="Sales"/>

</template>

<script setup>
    import Admin from "./admin/admin.vue";
    import Sales from "./sales/sales.vue"
</script>