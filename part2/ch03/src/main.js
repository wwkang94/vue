import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './pages/MainPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [{
  path: '/', component: MainPage
}];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
