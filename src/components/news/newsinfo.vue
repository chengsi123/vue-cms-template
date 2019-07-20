<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}} --- {{ id }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
            <span>点击次数：{{ newsinfo.click }}</span>
        </p>
        <hr>

        <div class="content" v-html="newsinfo.content">
        </div>

        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            id:this.$route.params.id,   //将url地址中传递过来的id值，挂载到data上，方便以后调用
            newsinfo: {}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$http.get("api/getnew/" + this.id).then(res => {
                // console.log(res);
                // console.log(res.body);
                
                if(res.body.status == 0) {
                    // console.log(res.body.message);
                    console.log(res.body.message[0]);
                    
                    this.newsinfo = res.body.message[0];
                    Toast('获取新闻详情成功')
                } else{
                    Toast('获取新闻详情失败')
                }
            })
        }
    },
    components: {
        "comment-box": comment
    }
}
</script>

<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
