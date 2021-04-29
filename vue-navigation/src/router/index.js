import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import PageOne from '@/views/Page1/PageOne'
import PageTwo from '@/views/Page2/PageTwo'
import Navigation from '@/components/Navigation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Navigation,
      children:[
        {
          path: '/page1',
          name: 'page1',
          component: PageOne
        },
        {
          path: '/page2',
          name: 'page2',
          component: PageTwo
        }
      ]
    }
  ]
})
