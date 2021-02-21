import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "../src/scss/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// ----locale + i18n
import { Locale } from "./locales/Locale";
import VueI18n from "vue-i18n";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueI18n);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n: Locale.i18n,
  render: (h) => h(App),
}).$mount("#app");
//ไม่มีจะเด้งหน้า app.vue
