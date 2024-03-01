import * as Vue from "vue";
import App from "./App.vue";
import { router } from "@/router";
import { AclPlugin } from "@/configs/acl";
import { VueQuery } from "@/plugins/VueQuery";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

const app = Vue.createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueQuery);
app.use(AclPlugin);

app.mount("#root");
