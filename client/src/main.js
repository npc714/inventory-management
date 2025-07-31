import { createApp } from "vue";
import "./main.css";
import router from "./router";
import { createPinia } from 'pinia';
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
