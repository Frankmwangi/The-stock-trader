import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import store from './store'
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



// Vue.use(jQuery)
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-7f0d6.firebaseio.com/'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
