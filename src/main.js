import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import Router from 'vue-router'
import routes from './js/routes'
import App from './App.vue'

Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
