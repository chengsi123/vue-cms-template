<template>
  <div class="app-container">

    <mt-header fixed title="黑马程序员·Vue项目"></mt-header>
    <!-- <h1>这是 App 组件</h1> -->

    <transition>
        <router-view></router-view>
    </transition>


    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
import mui from './lib/mui/js/mui.js'
export default {
  mounted() {
    
    mui("header,nav").on("tap", "a", function() {
      mui.openWindow({ url: this.href });
    });
  },
}
</script>


<style lang="scss" scoped>
*{
  touch-action: pan-y;
}
  .mint-header{
    z-index: 99;
  }
  .app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
  .v-enter,
  .v-leave-to{
    opacity: 0;
  }
  .v-enter{
    transform: translate(100%);
  }
  .v-leave-to{
    transform: translate(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all .4s ease;
  }
</style>
