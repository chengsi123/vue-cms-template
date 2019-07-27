<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用key -->
      <mt-swipe-item v-for="item in swiperlist" :key="item.id">
        <img :src="item.img" alt :class="{ full: isfull}" />
      </mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props:["swiperlist","isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
      text-align: center;
    // &:nth-child(1) {
    //     background-color: red;
    // }
    // &:nth-child(2) {
    //     background-color: blue;
    // }
    // &:nth-child(3) {
    //     background-color: cyan;
    // }
    img{
        // width: 100%;
        height: 100%;
    }
    }

}
    .full{
        width: 100%;
    }

</style>
