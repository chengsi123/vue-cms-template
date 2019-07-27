<template>
  <div class="goodsinfo-container">
    
    <transition
     @before-enter="beforeEnter"
     @enter="enter"
     @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <swiper :swiperlist="lubotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;
            销售价：
            <span class="now_price">
                ￥{{ goodsinfo.sell_price }}
            </span>
          </p>
          <p class="num">购买数量：<numbox @getCount="getselectedCount"
          :max="goodsinfo.stock_quantity"></numbox> </p>
          <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToshopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
      <!-- <div class="mui-card-footer">页脚</div> -->
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号：{{ goodsinfo.goods_no }}</p>
            <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
            <p>上架时间：{{ goodsinfo.add_time | dataFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
          <mt-button type="primary" plain size="large" @click="goDesc(goodsinfo.id)">图文介绍</mt-button>
          <!-- <br> -->
          <mt-button type="danger" plain size="large" @click="goComment(goodsinfo.id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lubotu: [],
      goodsinfo: {},
      ballFlag: false,
      selectedCount: 1
    };
  },
  created() {
    this.getlunbotu();
    this.getGoodsinfo();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        // console.log(res.body);
        // console.log(res);

        if (res.body.status == 0) {
            res.body.message.forEach(item => {
                item.img = item.src
            });
            this.lubotu = res.body.message;
            // console.log(this.lubotu);
        }
      });
    },
    getGoodsinfo() {
        this.$http.get("api/goods/getinfo/" + this.id).then(res => {
            if(res.body.status == 0) {
                this.goodsinfo = res.body.message[0];
                // console.log(res.body.message);
                
            }
        })
    },
    goDesc(id) {
        this.$router.push({ name: "goodsDesc", params:{ id }})
    },
    goComment(id) {
        this.$router.push({ name: "goodsComment", params:{ id }})
    },
    addToshopcar() {
        this.ballFlag = !this.ballFlag;
        var goodsinform = { 
          id: this.id,
          count: this.selectedCount, 
          price:this.goodsinfo.sell_price,
          selected:true
        }
        this.$store.commit("addToCar",goodsinform);
    },
    beforeEnter(el) {
        el.style.opacity = 1;
        el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {

        el.offsetWidth;
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badge = document.getElementById("badge").getBoundingClientRect();
        const xDist = badge.left - ballPosition.left; 
        const yDist = badge.top - ballPosition.top;
        el.style.transform = `translate(${xDist}px, ${yDist}px)`;
        el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";
        done();
    },
    afterEnter(el) {
        this.ballFlag = !this.ballFlag;
    },
    getselectedCount(count){
        this.selectedCount = count;
        // console.log(this.selectedCount,888);
        
    }
  },
  components:{
      swiper,
      numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price{
      font-size: 16px;
      color: red;
      font-weight: bold;
  }
  .num{
      display: flex;
      line-height: 30px;
  }
  .mui-card-footer{
      display: block;
      button{
          margin: 15px 0;
      }
  }
  .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      z-index: 999;
      top: 391px;
      left: 147px;
  }
}
</style>
