import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSession from "vue-session";

//import './assets/main.scss'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
// window.axios = require('axios');

Vue.use(VueSession);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");