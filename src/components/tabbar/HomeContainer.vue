<template>
  <div>
    <!-- 轮播图 -->
    <swiper :swiperlist="lunbotuList" :isfull="true"></swiper>

    <!-- 九宫格到六宫格改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/news">
            <img src="../../images/menu1.png" alt="">
          <!-- <span class="mui-icon mui-icon-home"></span> -->
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="home/photolist">
            <img src="../../images/menu2.png" alt="">
          <!-- <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span> -->
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/goodslist">
            <img src="../../images/menu3.png" alt="">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
            <img src="../../images/menu4.png" alt="">
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
            <img src="../../images/menu5.png" alt="">
          <!-- <span class="mui-icon mui-icon-search"></span> -->
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
            <img src="../../images/menu6.png" alt="">
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

    <!-- <h3>HomeContainer</h3> -->
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/swiper.vue"
export default {
  data() {
    return {  
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          // console.log(result);

          console.log(result.body);
          if (result.body.status == 0) {
            this.lunbotuList = result.body.message;
            Toast("获取数据成功");
          } else {
            Toast("获取数据失败");
          }
        });
    }
  },
  components:{
    swiper
  }
}
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-table-view-cell.mui-media {
    border: 0;
}
</style>
