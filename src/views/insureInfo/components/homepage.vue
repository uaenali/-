<template>
  <div
    class="esigns"
    style="width: 100%; display: flex; height: 111px; justify-content: center"
  >
    <vue-esign
      ref="esign"
      :width="157"
      :height="111"
      :isCrop="isCrop"
      :lineWidth="lineWidth"
      :lineColor="lineColor"
      :bgColor.sync="bgColor"
    />

    <!-- <div class="btn">
      <button type="primary" @click="handleReset">重置</button>
      <button type="info" @click="handleGenerate">确定</button>
    </div> -->
    <img class="close" src="../assets/img/close.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Esign",
  data() {
    return {
      lineWidth: 4,
      lineColor: "#000000",
      bgColor: "",
      resultImg: "",
      isCrop: false,
    };
  },

  methods: {
    handleReset() {
      // 清除
      this.$refs.esign.reset();
    },

    handleGenerate() {
      // 获取base64
      var _this = this;
      _this.$refs.esign
        .generate()
        .then((res) => {
          // 转成文件
          var file = _this.dataURLtoFile(res);
          console.log("file:", file);
          //调用接口
          uploadFile(file).then(({ data }) => {
            console.log("data:", data);
          });
        })
        .catch((err) => {
          _this.$toast(err);
        });
    },
    // 将base64转换为file
    dataURLtoFile(dataurl) {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let bytes = atob(arr[1]); // 解码base64
      let n = bytes.length;
      let ia = new Uint8Array(n);
      while (n--) {
        ia[n] = bytes.charCodeAt(n);
      }
      return new File([ia], "easign.jpg", { type: mime });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.esigns {
  position: relative;
  margin-top: 21px;
  padding-bottom: 20px;
  .close {
    position: absolute;
    background-color: #ccc;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -8px;
    left: 245px;
  }
}
canvas {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
