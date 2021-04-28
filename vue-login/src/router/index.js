import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello/HelloWorld'
import Login from '@/views/login/Login'
import index from '@/views/index/index'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login,
      meta:{
        isLogin:false
      }
    },
    {
      path:'/index',
      name:'index',
      component:index,
      meta:{
         isLogin:true
      }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
