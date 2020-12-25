<template>
  <div class="solution-main">
    <div class="title-box">
      <h2>{{ title }}</h2>
      <p>{{ titleIntro }}</p>
    </div>
    <div class="cont-box">
      <div class="tab-head">
        <ul class="tab-tit flex alicenter">
          <li
            class="flex1"
            v-for="(item, index) in tabTilData"
            :key="item.id"
            :class="{ active: index == nowIndex }"
            @click="changeSolution(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <transition name="slide-fade">
        <div class="tab-cont" v-if="itemVisibility">
          <SolutionItem
            v-for="(item, index) in solutionData"
            :key="index"
            :solutionData="item.lists"
          />
        </div>
      </transition>
    </div>
    <div class="btn">
      <button>
        <a href="">
          <span>{{ btnTxt }}</span>
          <i class="ln2-arrow_right" />
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Solution',
  components: {},
  props: {},
  data: () => ({
    itemVisibility: true,
    title: '数字化解决方案',
    titleIntro:
      '运用数字科技服务金融和实体产业，助力各行业降低成本、提升效率、模式升级，和客户一起携手跨越、重塑增长',
    btnTxt: '查看更多',
    tabTilData: [],
    solutionData: [], // 当前显示的选项卡
    solutionData1: [],
    solutionData2: [],
    solutionData3: [],
    nowIndex: 0,
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/solution').then((res) => {
      console.log(res);
      this.tabTilData = res.data.solution.tabTilData;
      // mock数据
      // this.solutionData1.push(res.data.solution.solutionData[0]);
      // this.solutionData2.push(res.data.solution.solutionData[1]);
      // this.solutionData3.push(res.data.solution.solutionData[2]);
      // 写死数据
      this.solutionData1 = res.data.solution.solutionData1;
      this.solutionData2 = res.data.solution.solutionData2;
      this.solutionData3 = res.data.solution.solutionData3;
      this.solutionData = this.solutionData1;
    });
  },
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    changeSolution(index) {
      this.itemVisibility = false;
      this.nowIndex = index;
      this.solutionData = this[`solutionData${index + 1}`];
      setTimeout(() => {
        this.itemVisibility = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.slide-fade-enter-active {
  transition: all .3s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.solution-main {
  padding-top: 36px;
  margin-bottom: 40px;

  .title-box {
    h2 {
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
      color: #00041a;
    }

    p {
      margin: 22px 0 0;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 4, 26, 0.65);
    }
  }

  .cont-box {
    padding-top: 28px;

    .tab-head {
      border-bottom: 1px solid #e8e9ea;

      .tab-tit {
        li {
          position: relative;
          font-size: 16px;
          line-height: 60px;
          color: rgba(0, 4, 26, 0.7);
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;

          &::before {
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 80px;
            height: 2px;
            background: #4067ff;
            transform: scale(0);
            transition: all 0.2s ease;
          }

          &:hover {
            color: #4067ff;
            font-size: 22px;
          }

          &.active {
            color: #4067ff;
            font-size: 22px;

            &::before {
              transform: scale(1);
            }
          }
        }
      }
    }

    .right-in,
    .right-out {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .right-in {
      animation-name: right-in;
    }
    .right-out {
      animation-name: right-out;
    }
    @keyframes right-in {
      0% {
        transform: translateX(1600px);
      }

      100% {
        transform: translateX(0);
      }
    }
    @keyframes right-out {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(1600px);
      }
    }
  }

  .btn {
    margin-top: 30px;
    text-align: center;
    button {
      width: 130px;
      height: 46px;
      font-size: 16px;
      border: 1px solid #477cff;
      border-radius: 2px;
      margin: 0 auto;
      background: transparent;

      a {
        color: #477cff;
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
}
</style>
