/**
 * 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import VueLazyLoad from 'vue-lazyload'
import { Button } from 'mint-ui'
import './mock/mockServer'//加载mockServer即可
import VueLazyload from 'vue-lazyload'

import loading from './common/imgs/loading.gif'
import './filters'
 
Vue.use(VueLazyLoad)
 

Vue.use(VueLazyload, {//内部自定义了一个指令v-lazy
  loading
})
//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>可以使用

new Vue({
    el:'#app',
    render:h => h(App),
    router,
    store
})
