import Vue from "vue";
import store from './store'
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store, // объявляя здесь хранилище Vuex дочерние компоненты смогут иметь к нему доступ
  render: h => h(App)
}).$mount("#app");
