// Vue Imports
import { createApp } from "vue";

// App Imports
import App from "./App.vue";

// Plugin Imports
import plugins from "@/plugins";

// Styles Imports
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

// FakeDB
import "@/api/fakedb";

const app = createApp(App);
app.use(plugins);
app.mount("#root");
