import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Home  from '@/views/home/Home'
import AdminHome from '@/views/home/AdminHome'

Vue.use(Router)

export const fixedRouter = [
    {
        path:'/',
        redirect: '/login'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        meta:{
            roles:['user','admin'],
            icon: 'el-icon-info'
        }
    }
]


export const permissionRouter = [
    {
    path:'/adminhome',
    component:AdminHome,
    meta:{
        roles:['admin']
    }
}]

export default new Router({
    mode:'history',
    routes:fixedRouter
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

