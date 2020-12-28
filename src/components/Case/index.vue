<template>
  <div class="case-main">
    <div class="main-wrap">
      <template v-for="item in caseData">
        <div class="case-title" :key="item.id">
          <h2>{{ item.caseTitle }}</h2>
          <p>{{ item.caseTitle_tips }}</p>
          <div class="btn">
            <a href="">
              <span>{{ item.btnTxt }}</span>
              <i class="ln2-arrow_right" />
            </a>
          </div>
        </div>
        <div class="case-cont" :key="`cont${item.id}`">
          <div class="animate-box">
            <div class="circle-left" />
            <div class="circle-right" />
          </div>
          <div class="img-box">
            <ul>
              <li v-for="(item, index) in item.caseImgs" :key="item.id"
                  :class="{active: index==caseNowIndex}"
                  @click="changeCaseTab(index)">
                <img :src="item.src" alt="">
              </li>
            </ul>
          </div>
          <template v-for="item in item.caseImgs[caseNowIndex].list">
            <div class="img-cont-box" :key="item.id">
              <h3>{{item.title}}</h3>
              <div class="conts-box">
                <p>{{item.conts}}</p>
                <div class="btn">
                  <a :href="item.href">
                    <span>{{item.btnTxt}}</span>
                    <i class="ln2-arrow_right"/>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  components: {},
  props: {
    caseData: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    caseNowIndex: 0,
  }),
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    changeCaseTab(index) {
      this.caseNowIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.case-main{
  height: 610px;
  background: #dae0e9 url('../../assets/index_case_bg.jpg') no-repeat center center;

  .case-title {
    position: relative;
    padding-top: 60px;

    h2 {
      font-weight: normal;
      font-size: 36px;
      line-height: 50px;
      color: #00041a;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      color: rgba(0, 4, 26, 0.5);
    }
    .btn {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      width: 130px;
      height: 46px;
      padding-left: 27px;
      line-height: 46px;
      font-size: 14px;
      border: 1px solid #2c68ff;
      background: transparent;
      transition: all 0.2s ease;
      box-sizing: border-box;
      align-items: center;
      cursor: pointer;
      border-radius: 2px;

      a {
        color: #2c68ff;
        &:hover {
          span {
            transform: translate(0);
          }
          i {
            opacity: 1;
            transform: translate(6px);
          }
        }
      }
      i {
        display: inline-block;
        opacity: 0;
        transform: translate(-20px);
        transition: all 0.2s ease;
      }
      span {
        display: inline-block;
        transform: translate(10px);
        transition: all 0.2s ease;
      }
    }
  }

  .case-cont {
    position: relative;
    height: 580px;
    margin-top: 32px;
    padding: 50px 0;
    box-sizing: border-box;

    .animate-box {
      position: absolute;
      top: 0;
      left: -100px;
      right: -100px;
      width: 1400px;
      height: 100%;
      background: #fff;
      overflow: hidden;

      .circle-left {
        position: absolute;
        left: -200px;
        bottom: -200px;
        width: 400px;
        height: 400px;
        background-size: contain!important;
        background: url('../../assets/index_case_bg_circle.png') no-repeat 0 0;
        animation: cloud-float 9s linear 0s infinite;
      }
      .circle-right {
        position: absolute;
        right: -300px;
        top: -300px;
        width: 589px;
        height: 589px;
        background: url('../../assets/index_case_bg_circle.png') no-repeat 0 0;
        animation: cloud-float1 10s linear 1s infinite;
      }

      @keyframes cloud-float {
        0% {
          transform: translateZ(0);
        }
        33% {
          transform: translate3d(-10%, -8%, 0);
        }
        66% {
          transform: translate3d(8%, -10%, 0);
        }
        100% {
          transform: translateZ(0);
        }
      }
      @keyframes cloud-float1 {
        0% {
          transform: translateZ(0);
        }
        33% {
          transform: translate3d(-5%, -5%, 0);
        }
        66% {
          transform: translate3d(5%, -5%, 0);
        }
        100% {
          transform: translateZ(0);
        }
      }
    }

    .img-box {
      ul {
        width: 1200px;

        li {
          position: relative;
          display: inline-block;
          width: 199.05px;
          height: 120px;
          line-height: 12;
          box-sizing: border-box;
          border: 1px solid rgba(219, 219, 230, 0.3);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #fff;
          margin-right: -1px;
          margin-bottom: -1px;
          vertical-align: middle;

          &:hover {
            img {
              transform: translateZ(0) scale(1);
            }
          }

          img {
            width: 200px;
            height: 86px;
            transform: translateZ(0) scale(0.8);
            transition: all 0.2s ease;
            transform-origin: center center;
          }
        }
        li.active {
          z-index: 10;
          border: 1px solid #195aff;
          box-shadow: 0 3px 10px 0 rgba(33, 96, 251, 0.16);
        }
      }
    }
    .img-cont-box {
      position: relative;
      margin-top: 40px;

      h3 {
        padding-left: 4px;
        font-size: 24px;
        color: rgba(0,4,26,.7);
        margin: 10px 0 15px;
        font-weight: normal;
      }

      .conts-box {
        height: 130px;
        overflow: hidden;

        p {
          color: rgba(0,4,26,.5);
          font-size: 14px;
          line-height: 24px;
          margin: 0 6px 7px 4px;
        }
        .btn {
          height: 22px;
          line-height: 22px;
          font-size: 16px;
          margin-top: 16px;
          a {
            color: #2c68ff;
          }
          i {
            margin-left: 6px;
          }
        }
      }
    }
  }
}
</style>
