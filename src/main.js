// 入口文件
// console.log('OK')
import Vue from 'vue';

//导入路由的包
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter);

// 完全导入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI)

// import { Switch } from 'mint-ui';

// Vue.component(Switch.name, Switch);

import Vuex from 'vuex';
Vue.use(Vuex);

// var car = JSON.parse(localStorage.getItem('car')) || '[]';

var store = new Vuex.Store({
    state:{  //this.$store.state.***
        car: JSON.parse(localStorage.getItem('car') || '[]')
    },
    mutations:{   //this.$store.commit('方法的名称'，"按需传递唯一的参数")
        addToCar(state,goodsinfo) {
            var flag = false;
            state.car.some(item => {
                if(item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag =true;
                    return true
                }
            })
            if(!flag) {
                state.car.push(goodsinfo)
            }

            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters:{    //this.$store.getters.***
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        }
    }
})

import moment from 'moment';
// 定义全局的过滤器
Vue.filter('dataFormat',function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 导入vue-resource
import VueResource from 'vue-resource';
// 安装
Vue.use(VueResource);

Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;
//按需导入MINT-UI中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// // import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);

//导入APP根组件
import app from './App.vue';

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview);




import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/fonts/mui-icons-extra.ttf'

import router from "./router";


var vm = new Vue({
    el:"#app",
    render: c => c(app),
    router,  //挂载路由对象到vm
    store    //挂载store状态管理对象
})

