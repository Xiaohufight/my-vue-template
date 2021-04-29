import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
