// 入口文件
// console.log('OK')
import Vue from 'vue';

//导入路由的包
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter);

// 导入vue-resource
import VueResource from 'vue-resource';
// 安装
Vue.use(VueResource);
//按需导入MINT-UI中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入APP根组件
import app from './App.vue';


//完全导入mint-ui
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
// Vue.use(MintUI)


import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/fonts/mui-icons-extra.ttf'

import router from "./router";


var vm = new Vue({
    el:"#app",
    render: c => c(app),
    router
})

