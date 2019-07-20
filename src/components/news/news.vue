<template>
  <div>
    <!-- <h1>news</h1> -->

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>发表日期：{{item.add_time | dataFormat}}</span>
                <span>浏览次数：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://mmbiz.qpic.cn/mmbiz_png/PCVXRicicmuMxviaUazolInofcrLe5hR8w9jV2a8CQibicGle0FggKpzcDnkvM1PNb0Re83GcniaBWBfSKpOZ434xDPA/640"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发表日期：2019年7月20日 12：00：00</span>
                <span>浏览次数：12次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://mmbiz.qpic.cn/mmbiz_png/PCVXRicicmuMxviaUazolInofcrLe5hR8w9jV2a8CQibicGle0FggKpzcDnkvM1PNb0Re83GcniaBWBfSKpOZ434xDPA/640" />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发表日期：2019年7月20日 12：00：00</span>
                <span>浏览次数：12次</span>
            </p>
          </div>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            newslist:[]
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            this.$http.get("api/getnewslist").then(res => {
                // console.log(res);
                // console.log(res.body);
                
                if(res.body.status == 0) {
                    this.newslist = res.body.message;
                    Toast('获取数据成功')
                } else{
                    Toast('获取数据失败')
                }
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
  }
}
</style>
