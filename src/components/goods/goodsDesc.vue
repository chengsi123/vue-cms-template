<template>
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // id:
            info:{}
        }
    },
    created() {
        this.getinfo();
    },
    methods: {
        getinfo() {
            this.$http.get("api/goods/getdesc/" + this.$route.params.id)
            .then(res => {
                if(res.body.status == 0) {
                    // console.log(res.body);
                    this.info = res.body.message[0];
                }
            })
        }
    },
}
</script>
<style lang="scss">
.goodsdesc-container {
    padding: 4px;
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    img{
        width: 100%;
        vertical-align: bottom;
        text-align: left;
    }
    p{
        text-indent: 2em;
    }
}

</style>
