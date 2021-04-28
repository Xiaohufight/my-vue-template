import {permissionRouter , fixedRouter} from '@/router'
import router from '@/router'

var addRouFlag = false


router.beforeEach((to,from,next)=>{
     let GetRole =  localStorage.getItem("userRole")
     if(GetRole&&GetRole !== 'unload'){
        next()
        if(!addRouFlag){
            addRouFlag = true
            var getRoutes = baseRoleGetRouters(permissionRouter,GetRole.split(","))

            global.antRouter = fixedRouter.concat(getRoutes)

            router.addRoutes(fixedRouter.concat(getRoutes))
            if(to.path==='/login'){
                  next('/home')
            }
            else{
                  router.push({path:to.path})
            }
        }
     }
     else{
        if(to.path==='/login'){
            next()
        }
        else{
            next('/login')
        }
     }
})

function hasPermission(route,roles){
     if(route.meta && route.meta.roles){
          return roles.some(role => route.meta.roles.indexOf(role) >= 0)
     }
     else{
          return true
     }
}


function baseRoleGetRouters(allRoutes,roles){
    let rightRoutes = allRoutes.filter((route,index)=>{
        if(hasPermission(route,roles)){
            if(route.children && route.children.length){
                route.children = baseRoleGetRouters(route.children,roles)
            }
            return true
        }
        return false
    })
   return rightRoutes
}
