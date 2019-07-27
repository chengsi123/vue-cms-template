<template>
  <div>
    <div class="shop-container">
      <!-- <h3>shopContainer</h3> -->
      <div class="goods-list">
        <div class="mui-card" v-for="item in goodslist" :key="item.id">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch></mt-switch>
              <!-- <div class="mui-switch mui-switch-blue mui-active">
              <div class="mui-switch-handle"></div>
              </div>-->
              <img :src="item.thumb_path" alt />
              <div class="info">
                <h1>{{ item.title }}</h1>
                <p>
                   价格：<span class="price">￥{{ item.sell_price }}</span>
                  <numbox></numbox>
                  <a href="#">删除</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner jiesuan">
              <div class="left">
                <p>总计（不含运费）</p>
                <p>
                  已勾选商品
                  <span class="red"></span> 件， 总价
                  <span class="red"></span>
                </p>
              </div>
              <mt-button type="danger">去结算</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_number.vue";
// import mui from "../../lib/mui/css/mui.css"
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(res => {
          if (res.body.status === 0) {
            console.log(res.body);
            this.goodslist = res.body.message;
          }
        });
    }
  },
  components: {
    numbox
  }
};
</script>

<style <style lang="scss" scoped>
.shop-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      // .switch{
      //     z-index: 999;
      // }
      display: flex;
      align-items: center;
      padding: 5px;
      img {
        width: 50px;
        height: 50px;
      }

      .info {
        h1 {
          font-size: 13px;
          text-align: center;
        }
        p{
            font-size: 12px;
            text-align: center;
            .price{
                color: rgb(207, 118, 28);
            }
        }
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
      }
    }
  }
}
</style>

