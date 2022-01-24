<template>
  <div class="list">
    <div class="info-item">
      <div class="title">投保人信息</div>
      <div class="userinfo">
        <div class="identity">
          <span class="username">{{ username }}</span>
          <span class="line">|</span>
          男
          <span class="line">|</span>
          1990-01-01
        </div>
        <div class="id-card">
          居民身份证
          <span class="line">|</span>
          110101199001011010
        </div>
      </div>
    </div>
    <!-- 投保人信息 -->
    <div class="info-item">
      <div class="title">投保人信息</div>
      <div class="userinfo">
        <div class="identity">
          <span class="username">{{ username }}</span>
          <span class="line">|</span>
          男
          <span class="line">|</span>
          1990-01-01
        </div>
        <div class="id-card">
          居民身份证
          <span class="line">|</span>
          110101199001011010
        </div>
      </div>
    </div>
    <div class="beneficiary">
      <div class="title">受益人信息</div>
      <div class="type">法定受益人</div>
    </div>
    <!-- 险种信息 -->
    <div class="kind">
      <div class="title">险种信息</div>
      <div class="critical">
        <div class="intro">
          <h2>重疾险（卓越版）重大疾病保险</h2>
          <div class="cost-wrapper">
            <div class="cost">
              <span class="premium">保费：734.6元</span>
              <span class="base">基本保额：20000元</span>
            </div>
            <div class="time">
              <span class="payment">缴费期限：20年</span>
              <span class="period">保险期限：终身</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 险种信息 生效日 -->
      <div class="bg">
        <div class="effective">指定生效日：否</div>
        <div class="autopay">现金价值自动垫交：是</div>
      </div>
    </div>
    <!-- 转账信息 -->
    <div class="transfer">
      <div class="title">转账信息</div>
      <div class="transinfo">
        <span class="username">{{ username }}</span>
        <span class="line">|</span>
        农业银行
        <span class="line">|</span>
        北京市&nbsp;北京市
      </div>
      <div class="bank">
        <span class="card">62222&nbsp;2222&nbsp;2222&nbsp;2222&nbsp;222</span>
        <span class="amount">转账金额：734.6元</span>
      </div>
    </div>

    <!-- 签名 -->
    <div class="sign info-item">
      <div class="title">签名</div>
      <div class="sign-part">
        <p class="insure_msg">
          <span class="insuredman">请投保人、被保险人</span>
          <span class="username">{{ username }}</span>
          <span class="autography">亲笔签名</span>
        </p>
        <!-- <img class="paint" src="../assets/img/sign.png" alt="" /> -->
        <!-- <Sign></Sign> -->
        <!-- <div class="canvas"> -->
          <homepage  class="sign_page" ref="child"></homepage>
          <!-- <img class="close" src="../assets/img/close.png" alt="" /> -->
        <!-- </div>-->
      </div>
    </div>

    <!-- 投保声明 -->
    <div class="statement info-item">
      <div class="title">投保声明</div>
      <div class="protocol-wrapper">
        <div class="state-content">
          <!-- <input type="radio" name="choose" id="" /> -->
          <p>
            本投保人声明上述各项内容填
            写属实，并已征得被保险人同意，被保险人认可保险金额、保障内容和健康告知内容。
          </p>
        </div>
        <div class="read">
          <p>
            本人已阅读
            <span class="clause"
              >《免责说明书》 《保险条款》《人身投保提示书》</span
            >，
            已充分理解保险责任、免除保险责,任的条款、犹豫期、等待期、退保等关键信息，且同意遵守。
          </p>
        </div>
        <div class="agreement">
          <p>
            本人已阅读<span class="know">《投保须知》</span>
            已充分理解健康保险产品等待期、指定医疗机构、续保、保险费率调整等关键信息且同意遵守。
          </p>
        </div>
      </div>
    </div>

    <!-- 个性化保单 -->
    <div class="order info-item">
      <div class="title">个性化保单</div>
      <div class="content">
        <div class="question">
          您是否想自主设计一份
          <span class="exclusive-bill">“专属定制保单”？</span>
        </div>
        <div class="answer">
          <div class="no center">
            <input type="radio" name="choose" id="no" />
            <span>否</span>
          </div>

          <div class="yes center">
            <input type="radio" name="choose" id="yes" />
            <span>是</span>
          </div>
        </div>
      </div>
    </div>

    <div class="tip">请输入 133-1234-1234收到的信息验证码</div>

    <!-- verify code -->
    <div class="verify-code">
      <input type="number" placeholder="请输入" v-model="verifyCode" />
      <button
        @click="sendCode"
        :class="['code-btn', isSending ? 'disabled' : '']"
        :disabled='isSending'
      >
        {{ isSending ? countdown : '发送验证码' }}
      </button>
    </div>

    <div class="try-tip">
      收不到验证码？试试
      <a href="">语音验证码</a>
    </div>
  </div>
</template>

<script>
// import Sign from "./Sign";
import homepage from "./homepage";

export default {
  components: {
    homepage
  },
  data() {
    return {
      username: "李四四",
      verifyCode: null, // 验证码的输入框内容
      isSending: false, // 是否在发送验证码
      countdown: 60, // 倒计时
    };
  },
  methods: {
    sendCode() {
      if (!this.verifyCode) {
        alert("验证码不能为空");
        return;
      } 
    // 修改按钮的状态
    this.isSending = true
    // 创建定时器倒计时
    this.timer = setInterval(() => {
      if (this.countdown === 1) {
        clearInterval(this.timer)
        this.isSending = false
        this.countdown = 60
        return
      }
      this.countdown -= 1
    }, 1000)

    }
  },
};
</script>

<style lang="scss" scoped>
@import "./base.scss";
.list {
  padding: 10px 10px 0;

  .sign {
    .sign-part {
      background-color: #fff;
      // margin-top: 13px;
      font-size: 14px;
      text-align: center;
      padding-bottom: 20px;
      .insure_msg {
        padding-top: 13px;
        .username {
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: $lineHeight;
        }
      }
      // .canvas {
      //   margin-top: 21px;
      // //   margin-bottom: 20px;
      // //   .close {
      // //     width: 12px;
      // //     height: 12px;
      // //     margin-left: -5px;
      // //     background-color: red;
      //   // }
      // }
      // .paint {
      //   width: 157px;
      //   height: 111px;
      //   margin-top: 21px;
      //   margin-bottom: 20px;
      // }
    }
  }

  .statement {
    margin-bottom: 20px;
    .protocol-wrapper {
      background: #fff;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      padding: 14px 10px;
      // .state-content {
      //   // display: flex;
      // }
      input {
        display: inline-block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin-right: 6px;
        // vertical-align: middle;
      }

      p:nth-child(2) {
        margin: 5px 0;
      }
      .clause,
      .know {
        color: $lineHeight;
      }
    }
  }

  .order {
    .content {
      background: #fff;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      .question {
        color: #333333;
        padding: 14px 0 14px 14px;
        border-bottom: 1px solid #f4f4f4;
        .exclusive-bill {
          color: $lineHeight;
        }
      }
      .answer {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .center {
          display: flex;
          align-items: center;
          span {
            // vertical-align: middle;
            vertical-align: -3px;
          }
          input {
            display: inline-block;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            margin-right: 6px;
            vertical-align: middle;
          }
        }
      }
    }
  }

  .tip {
    margin-top: 20px;
    margin-bottom: 14px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    padding-left: 10px;
  }

  .verify-code {
    display: flex;
    height: 51px;
    .code-btn {
      &.disabled {
        cursor: not-allowed;
        background: #ccc;
      }
    }
    // padding: 8px 20px;
    display: flex;
    input {
      font-size: 16px;
      flex: 1;
      padding: 10px;
      color: #999999;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      border: none;
      outline: none;
    }

    button {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      background: #ff9f06;
      width: 140px;
      color: #ffffff;
      border: none;
      outline: none;
    }
  }

  .try-tip {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    padding-left: 10px;
    margin-top: 14px;
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: rgba(153, 153, 153, 1);
    }
  }
}
.info-item {
  color: #999;
  //   background: #F4F4F4;
  padding-bottom: 10px;
  .title {
    height: 38px;
    background: linear-gradient(90deg, #ff9f06 0%, #ffba55 100%);
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    padding: 0 10px;
  }
  .userinfo {
    padding: 10px 18px;
    background-color: #fff;
    font-weight: 400;
    font-size: 14px;
    .name {
      color: #000000;
    }
    .line {
      margin: 0 5px;
    }

    .id-card {
      padding-top: 18px;
      padding-bottom: 10px;
    }
  }
}

.beneficiary {
  padding-bottom: 10px;
  .title {
    height: 38px;
    background: linear-gradient(90deg, #ff9f06 0%, #ffba55 100%);
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    padding: 0 10px;
  }
  .type {
    background-color: #fff;
    height: 48px;
    line-height: 48px;
    padding-left: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }
}

.kind {
  .title {
    height: 38px;
    background: linear-gradient(90deg, #ff9f06 0%, #ffba55 100%);
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    padding: 0 10px;
  }
  .critical {
    background: #fff;
    .intro {
      h2 {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        padding: 12px 10px;
      }
      .cost-wrapper {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        padding-left: 10px;
        .cost {
          .base {
            padding-left: 67px;
          }
        }
        .time {
          margin-top: 20px;
          padding-bottom: 14px;
          .period {
            padding-left: 59px;
          }
        }
      }
    }
  }
}

.bg {
  background-color: #fff;
  padding-left: 10px;
  color: #999;
  font-size: 14px;
  .effective {
    margin-top: 10px;
    padding-top: 10px;
  }
  .autopay {
    margin-top: 18px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
}
.transfer {
  background-color: #fff;
  font-size: 14px;
  .title {
    height: 38px;
    background: linear-gradient(90deg, #ff9f06 0%, #ffba55 100%);
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    padding: 0 10px;
  }
  .transinfo {
    padding-left: 10px;
    margin-top: 10px;

    font-weight: 400;
    color: #999;
    .name {
      color: #333333;
    }
  }
  .bank {
    padding-left: 10px;
    color: #999;
    margin-top: 20px;
    padding-bottom: 8px;
    .amount {
      margin-left: 18px;
      margin-right: 11px;
    }
  }
}
</style>
