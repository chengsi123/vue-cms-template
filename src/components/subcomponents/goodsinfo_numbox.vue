<template>
  <div>
    <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        value="1"
        @change="countChange"
        ref="numbox"
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },
  methods: {
    countChange() {
      // console.log(this.$refs.numbox.value);

      this.$emit("getCount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    //属性监听
    max: function(newVal, oldVal) {
      // 使用 JS API 设置 numbox 的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>