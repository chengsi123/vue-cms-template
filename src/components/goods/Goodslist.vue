<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
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
        </div>

    </div>
</template>

<script>
export default {
    
}
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
        flex-direction: column;
        justify-content: space-between;
        min-height: 305px;
        img{
            width: 100%;
            vertical-align: middle;
        }
        .title{
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .info{
            position: absolute;
            bottom: 0;
            background-color: #ccc;
            // display: block;
            width: 98%;
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
