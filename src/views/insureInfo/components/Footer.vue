<template>
  <footer>
    <button class="previous" @touchend="goOff">上一步</button>
    <button class="confirm" @touchend="showPage">确认投保</button>
  </footer>
</template>

<script>
export default {
  methods: {
    goOff() {
      if(window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
    },
    showPage() {
      // 判断选项都有没有勾选上
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  height: 60px;
  button {
    height: 100%;
    width: 50%;
    border: none;
    outline: none;
  }
  .previous {
    background: #fff;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ff9f06;
  }
  .confirm {
    background: #ff9f06;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>
