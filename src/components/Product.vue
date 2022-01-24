<template>
  <div>
    <div class="inner-list">
      <div class="inner-item">
        <img src="../assets/img/1.png" alt="" />

        <div class="content">
          <h3>重疾险</h3>
          <div class="ensure">经典责任保障</div>
          <div class="duty">轻中重症全周期覆盖</div>
          <img class="shoppingCar" src="../assets/img/2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inner-item {
  display: flex;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 9px 11px;
  img {
    height: 82px;
    width: 81px;
  }
  .content {
    position: relative;
    margin-left: 9px;
    border-radius: 30%;
    font-size: 12px;
    white-space: nowrap;
    line-height: 17px;
    text-align: left;
    overflow-wrap: break-word;

    .ensure {
      border: 1px solid red;
      display: inline-block;
      margin-top: 9px;
      border-radius: 8px;
      color: rgba(253, 192, 18, 1);

      text-align: left;
    }
    .duty {
      border: 1px solid rgba(128, 171, 146, 1);
      color: rgba(128, 171, 146, 1);
      border-radius: 8px;

      margin-top: 4px;
    }
    .shoppingCar {
      position: absolute;
      width: 29px;
      height: 27px;
      //   margin: 45px 0 0 79px;

      right: -112px;
      bottom: 13px;
    }
  }
}
</style>
