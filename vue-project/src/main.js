import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// Importerar bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// Importerar javascript från bootstrap (dropdown ex)
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";


import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(bootstrap);


app.mount("#app");
