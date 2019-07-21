<template>
  <div>
    <!-- <h3>图片列表</h3> -->
    <div id="slider" class="mui-slide">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class='["mui-control-item", item.id === 0 ? "mui-active" : ""]'
            v-for="item in cates"
            :key="item.id"
            @click="getphotoListByCateId(item.id)"
          >{{ item.title }}</a>
          <!-- <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>-->
        </div>
      </div>
    </div>

    <ul class="photolist">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <div class="info-title">{{ item.title }}</div>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getphotoListByCateId(0);
  },
  mounted() {
    //当组件中的Dom结构被渲染好并放到页面中后，会执行这个钩子函数
    // 如果要操作元素了，最好在mouted里面，因为，这时候的DOM元素是最新的
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status === 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.cates = res.body.message;
        }
      });
    },
    getphotoListByCateId(cateId) {
      this.$http.get("api/getimages/" + cateId).then(res => {
        // console.log(res);
        console.log(res.data);

        if (res.body.status === 0) {
          this.list = res.body.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
  // touch-action: none
}
.photolist {
  list-style: none;
  margin: 0;
  // width: 100%;
  padding: 10px;
  li {
    position: relative;
    background-color: #ccc;
    // text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    img{
      width: 100%;
      vertical-align: middle;
    }
    image[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      max-height: 80px;
      position: absolute;
      bottom: 0;
      color: #fff;
      background: rgba(0,0,0,.4);
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
