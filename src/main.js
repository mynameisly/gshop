/**
 * 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
import './mock/mockServer'//加载mockServer即可

//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>可以使用

new Vue({
    el:'#app',
    render:h => h(App),
    router,
    store
})
