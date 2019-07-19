import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import memberContainer  from './components/tabbar/memberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则
    { path: "/",redirect: "/home"},
    { path: "/home",component:HomeContainer},
    { path: "/member",component:memberContainer},
    { path: "/shopcar",component:ShopContainer},
    { path: "/search",component:SearchContainer}
  ],
  linkActiveClass: "mui-active"  //覆盖默认的路由高亮的类，默认的类叫作router-link-active?
})

// 把路由对象暴露出去
export default router