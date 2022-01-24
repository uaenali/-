<template>
  <div class="page">
    <!-- <Header /> -->
    <div class="service">
      <span class="waiter">服务专员：</span>
      <span class="info">{{ name }}</span>
      <img class="orangedot" src="./assets/img/orangedot.png" alt="" />
      <img class="tel" src="./assets/img/tel.png" alt="" />
    </div>
    <InfoList></InfoList>

    <div class="copy-writting">版权所有</div>

    <Footer />
  </div>
</template>

<script>

import InfoList from './components/InfoList.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    InfoList,
    Footer
  },
  data() {
    return {
      name: '张三三'
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #f4f4f4;
  list-style: none;

  .service {
    background-color: #fff;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;

    .info {
      margin-left: 5px;
      margin-right: 6px;
    }
    .tel {
      margin-left: -12px;
    }
  }
  .copy-writting {
    height: 40px;
    background: #ebebeb;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #999999;
    margin-bottom: 10px;
  }
}
</style>
