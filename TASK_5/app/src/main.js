import Vue from "vue";
import store from './store'
import App from "./App.vue";
import AddNewPost from './components/AddNewPost.vue'
import VueRouter from "vue-router";
import MainPage from "./components/MainPage.vue"


Vue.use(VueRouter)



var router = new VueRouter({
  routes: [
    { path: '/add-new-post', component: AddNewPost },
    { path: '/', component: MainPage }
  ]
})

Vue.config.productionTip = false;

new Vue({
  store, // объявляя здесь хранилище Vuex дочерние компоненты смогут иметь к нему доступ
  router: router,
  render: h => h(App)
}).$mount("#app");
