import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import memberContainer  from './components/tabbar/memberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import news from './components/news/news.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/Goodslist.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则
    { path: "/",redirect: "/home"},
    { path: "/home",component:HomeContainer},
    // { path: "/home",
    //   component:HomeContainer,
    //   children: [
    //     { path:"/news",component:news }
    //   ]
    // },
    { path: "/member",component:memberContainer},
    { path: "/shopcar",component:ShopContainer},
    { path: "/search",component:SearchContainer},
    { path: "/home/news",component: news},
    { path: '/home/newsinfo/:id', component: newsinfo },
    { path: '/home/photolist', component: photolist},
    { path: "/home/photoinfo/:id",component: photoinfo},
    { path: "/home/goodslist", component: goodslist}
  ],
  linkActiveClass: "mui-active"  //覆盖默认的路由高亮的类，默认的类叫作router-link-active?
})

// 把路由对象暴露出去
export default router