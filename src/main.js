import Vue from 'vue' //根實體
import App from './App.vue' //也是
import router from './router'
import store from './store'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
