<template>
  <div class="home-page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="top">
      <Search placeholder="搜索" :search="showSearch" />
      <Swiper />
      <img src="" alt="" />
    </div>

    <ul class="list">
      <router-link
        tag="li"
        v-for="item in icons"
        :key="item.id"
        :to="'/list' + item.id"
      >
        <img :src="item.imgUrl" alt="" />
        <p>{{ item.title }}</p>
      </router-link>
    </ul>
    <Product v-for="item in list" :key="item._id" :data="item" />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  background-color: #f9f9f9;
  padding: 0 14px;
  .top {
    border: 1px solid red;
    // background: chartreuse;
  }
  .list {
    background-color: #fff;
    display: flex;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    color: rgba(51, 51, 51, 1);
    white-space: nowrap;
    line-height: 17px;
   
    li {
      width: (100%/4);
      p {
        padding: 5px 0 10px;
        border: 1px solid red;
      }
    }
  }
}
</style>

<script>
import Search from "@/components/Search.vue";
import Product from "@/components/Product.vue";
import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: { Search, Product, Swiper },
  data() {
    return {
      icons: [
        { id: 1, title: "热销", imgUrl: require("./assets/img/icons/1.png") },
        { id: 2, title: "健康", imgUrl: require("./assets/img/icons/2.png") },
        { id: 3, title: "养老", imgUrl: require("./assets/img/icons/3.png") },
        { id: 4, title: "意外", imgUrl: require("./assets/img/icons/4.png") },
      ],
      list: [
        {
          _id: 1,
          title: "重疾险",
          type: "轻中重症全周期覆盖",
          toast: "经典责任保障",
          img: "",
        },
        {
          _id: 2,
          title: "重疾险",
          type: "轻中重症全周期覆盖",
          toast: "经典责任保障",
          img: "",
        },
        {
          _id: 3,
          title: "重疾险",
          type: "轻中重症全周期覆盖",
          toast: "经典责任保障",
          img: "",
        },
        {
          _id: 4,
          title: "重疾险",
          type: "轻中重症全周期覆盖",
          toast: "经典责任保障",
          img: "",
        },
      ],
    };
  },
};
</script>
