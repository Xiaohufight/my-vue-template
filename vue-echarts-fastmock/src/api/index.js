import axios from 'axios'
import Vue from 'vue'
import Qs from 'qs'

const $axios = axios.create({

    timeout: 30000,

    baseURL: 'https://www.fastmock.site/mock/e876fd174751b3c01365da9911f2ff19/admin'

})

Vue.prototype.$http = axios


export default {
    post(url,data){
        return $axios({
            method: 'post',
            url,
            data: Qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }) 
    },
    get(url,params){
        return $axios({
            method: 'get',
            url,
            params
        })
    }
}