// Vue Imports
import * as Vue from "vue";

// App Imports
import App from "./App.vue";

// Styles Imports
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

// Router Imports
import { router } from "@/router";

// Acl Imports
import { AclPlugin } from "@/configs/acl";

// Plugin Imports
import { Pinia, ElementIcons, ElementPlus, Icons, VueQuery } from "@/plugins";
import plugins from "@/plugins";

const app = Vue.createApp(App);

app.use(ElementIcons);
app.use(ElementPlus);

app.use(router);
app.use(Pinia);
app.use(VueQuery);
app.use(AclPlugin);

app.use(Icons);
app.use(plugins);

app.mount("#root");
