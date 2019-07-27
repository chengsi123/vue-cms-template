<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id"
        :to="'/home/goodsinfo/' + item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{ item.market_price }}</span>
                    <span class="old">{{ item.sell_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
    </router-link>-->

    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="detail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{ item.market_price }}</span>
          <span class="old">{{ item.sell_price }}</span>
        </p>
        <p class="sell">
          <span>热卖</span>
          <span>剩余{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <!-- <div class="goods-item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            <h1 class="title">图片</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1200</span>
                    <span class="old">600</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            <h1 class="title">图片</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1200</span>
                    <span class="old">600</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>剩余60件</span>
                </p>
            </div>
    </div>-->

    <mt-button type="danger" size="large" @click="getMore()" v-show="flag">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      goodslist: [],
      flag: true
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageIndex).then(res => {
        // console.log(res.body);
        // console.log(res.data);
        if (res.data.status == 0) {
          this.goodslist = this.goodslist.concat(res.data.message);
          console.log(this.goodslist);
          if(res.data.message.length < 10) {
              this.flag = false;
          }
        }
        // if (res.data.message.length < 10) {
        //   this.flag = false;
        // }
      });
    },
    getMore() {
      this.pageIndex++;
      this.getDataList();
      // if(pageIndex >= 2) {

      // }
    },
    detail(id) {
      this.$router.push({ name: "goodsInfo", params: { id } });
      // this.$router.
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item {
        position: relative;
        padding: 2px;
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        margin-bottom: 9px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 305px;
        img{
            width: 100%;
            vertical-align: middle;
        }
        .title{
            font-size: 14px;
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
        }
        .info{
            // position: absolute;
            // bottom: 0;
            background-color: #eee;
            // display: block;
            // width: 98%;
            p{
                padding: 5px;
                margin:0;
            }
            .price{
                .now{
                    color: red;
                    font-size: 16px;
                    font-weight: 700;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                font-size: 13px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}


</style>
