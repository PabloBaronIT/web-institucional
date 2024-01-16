import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import Vue3Geolocation from "vue3-geolocation";
import "bootstrap";
import { plugin, defaultConfig } from "@formkit/vue";
import { KEY_MAP } from "./env";
//Import Bootstrap and BootstrapVue CSS files (order is important)

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "bootstrap-icons/font/bootstrap-icons.css";
createApp(App)
  .use(plugin, defaultConfig)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: KEY_MAP,
      autobindAllEvents: true,
      libraries: "places",
    },
  })
  .use(Vue3Geolocation)
  .mount("#app");
