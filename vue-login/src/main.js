// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './icons' // icon
import store from './store'


import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let getFlag = localStorage.getItem("Flag");
  console.log("当前Flag的值:",getFlag)
  if(getFlag === "isLogin"){
    store.state.isLogin = true
    next()
    if (!to.meta.isLogin) {
      console.log("请先退出登录")
      next({
        path: '/index'
      })
    }
  }else{
    if(to.meta.isLogin){
      next({
        path: '/login',
      })
      console.log("请先登录")
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
