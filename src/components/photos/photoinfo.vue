<template>
    <div >
        <h3 class="title">{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
            <span>浏览次数：{{ photoinfo.click}}次</span>
        </p>
        <hr>

        <div class="content" v-html="photoinfo.content"></div>

        <div class="thumb-pic">
            <vue-preview :slides="list" class="img"></vue-preview>
        </div>

        <cmt-box :id="this.id"></cmt-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo: {},
            list: []
        }
    },
    created() {
        this.getphotoInfo();
        this.getThumbs();
    },
    methods: {
        getphotoInfo() {
            this.$http.get("api/getimageInfo/" + this.id).then(res=> {
                if(res.body.status ===0) {
                    // console.log(res.body);
                    
                    this.photoinfo = res.body.message[0];
                }
            })
        },
        getThumbs() {
            this.$http.get("api/getthumimages/" + this.id).then(res => {
                if(res.data.status === 0) {
                    // console.log(res.data);
                    this.list = res.data.message;
                    this.list.forEach(item => {
                        item.w = 600,
                        item.h = 400,
                        item.msrc = item.src
                    });
                    
                }
            })
        }
    },
    components: {
        "cmt-box":comment
    }
}
</script>

<style lang="scss">
.title{
    text-align: center;
    font-size: 18px;
    color: cyan;
    margin: 10px auto;
}
.subtitle{
    display: flex;
    justify-content: space-between;
}
.content{
    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
}
.thumb-pic .my-gallery{
    display: flex;
    flex-wrap: wrap;
    figure{
        margin: 5px;
        a{
            display: block;
            // width: 0;
            img{
                width: 120px;
                vertical-align: middle;
            }
        }
    }
}
</style>
