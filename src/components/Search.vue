<template>
  <div class="search-box">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="msg"
      @keyup.enter="goSearch"
    />
    <img src="../assets/img/fill.png" alt="">
  </div>
</template>

<script>
export default {
  props: ["placeholder", "search"],
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    // goSearch() {
    //     // this.$store.commit('updateWord', this.msg) //这么做搜索页与vuex（store）耦合了
    //     this.search(this.msg);
    //     this.msg = '';
    // }
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  background: linear-gradient(180deg, #ffba55 0%, #ff9f06 100%);
  padding: 19px 18px 14px 19px;
  display: flex;
  vertical-align:middle;

  img {
      width: 14px;
      height: 14px;
      border: 1px solid red ;
    //   vertical-align:middle;
      
      
  }
  input {
    // vertical-align: middle;
    flex: 1;
    height: 31px;
    border-radius: 15.5px 15.5px 15.5px 15.5px;
    background: linear-gradient(180deg, #ffba55 0%, #ff9f06 100%);
    border: 1px solid #fff;
    // align-self: flex-start;
    // padding-left: 11px;
    font-size: 14px;
    text-align: center;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: blue;
        line-height: 31px;
        vertical-align:center;
  }
}
</style>
