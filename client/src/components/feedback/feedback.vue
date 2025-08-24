<template>

    <div class="wrapper">

        <TransitionGroup name="slide-in-left" tag="div">

            <div class="container" 
            v-for="x in feedback.notifications" 
            :key="x.id"
            :class="x.type"
            >

                <p class="feedback-text">{{x.message}}</p>
                <button class="close-button" @click="feedback.removeNotification(x.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-x-icon lucide-x">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>

                <div class="loading-bar" :class="x.type+'Loading'"></div>
            </div>

        </TransitionGroup>
        
    </div>

</template>

<style scoped src="./feedback.css"></style>

<script setup>

    import { useFeedbackStore } from '../stores/feedback';
    const feedback=useFeedbackStore();

</script>