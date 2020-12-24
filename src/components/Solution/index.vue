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
      <div class="tab-cont">
        <SolutionItem
          v-for="(item, index) in solutionData"
          :key="index"
          :solutionData="item.lists"
        />
      </div>
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
    title: '数字化解决方案',
    titleIntro:
      '运用数字科技服务金融和实体产业，助力各行业降低成本、提升效率、模式升级，和客户一起携手跨越、重塑增长',
    btnTxt: '查看更多',
    tabTilData: [
      {
        id: 'tabTil1',
        title: '金融机构数字化解决方案',
      },
      {
        id: 'tabTil2',
        title: '商户与企业数字化解决方案',
      },
      {
        id: 'tabTil3',
        title: '政府及其他客户数字化解决方案',
      },
    ],
    solutionData: [], // 当前显示的选项卡
    solutionData1: [
      {
        lists: [
          {
            id: 'Scenario',
            src: require('../../assets/solution_financial-gov.png'),
            title: '场景生态解决方案',
            intro: '海量场景驱动业务创新，实现商业银行差异化竞争优势',
          },
          {
            id: 'retail',
            src: require('../../assets/solution_cashier.png'),
            title: '智能风控解决方案',
            intro: '为商业银行金融场景输出智能风控分析服务',
          },
          {
            id: 'corpratefin',
            src: require('../../assets/solution_customer-service.png'),
            title: '智能运营解决方案',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'finmarketb',
            src: require('../../assets/solution_data-middle.png'),
            title: '数据中台解决方案',
            intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
          },
          {
            id: 'risk',
            src: require('../../assets/solution_risk-management.png'),
            title: '提供多场景多工具',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'aitarcb',
            src: require('../../assets/solution_social-governance.png'),
            title: '一体化智能营销',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'Intelligentop',
            src: require('../../assets/solution_tourism.png'),
            title: '帮助银行打造统一',
            intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
          },
          {
            id: 'dataCenter',
            src: require('../../assets/solution_trading.png'),
            title: '数据共享服务中心',
            intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
          },
        ],
      },
    ],
    solutionData2: [
      {
        lists: [
          {
            id: 'corpratefin2',
            src: require('../../assets/solution_customer-service.png'),
            title: '智能运营解决方案',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'finmarketb2',
            src: require('../../assets/solution_data-middle.png'),
            title: '数据中台解决方案',
            intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
          },
          {
            id: 'risk2',
            src: require('../../assets/solution_risk-management.png'),
            title: '提供多场景多工具',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'aitarcb2',
            src: require('../../assets/solution_social-governance.png'),
            title: '一体化智能营销',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'Intelligentop2',
            src: require('../../assets/solution_tourism.png'),
            title: '帮助银行打造统一',
            intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
          },
        ],
      },
    ],
    solutionData3: [
      {
        lists: [
          {
            id: 'Scenario3',
            src: require('../../assets/solution_financial-gov.png'),
            title: '场景生态解决方案',
            intro: '海量场景驱动业务创新，实现商业银行差异化竞争优势',
          },
          {
            id: 'retail3',
            src: require('../../assets/solution_cashier.png'),
            title: '智能风控解决方案',
            intro: '为商业银行金融场景输出智能风控分析服务',
          },
          {
            id: 'corpratefin3',
            src: require('../../assets/solution_customer-service.png'),
            title: '智能运营解决方案',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
          {
            id: 'finmarketb3',
            src: require('../../assets/solution_data-middle.png'),
            title: '数据中台解决方案',
            intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
          },
          {
            id: 'risk3',
            src: require('../../assets/solution_risk-management.png'),
            title: '提供多场景多工具',
            intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
          },
        ],
      },
    ],
    nowIndex: 0,
  }),
  computed: {},
  watch: {},
  created() {
    this.solutionData = this.solutionData1;

    // this.$http.get('/solution').then((res) => {
    //   console.log(res);
    //   this.tabTilData = res.data.data.tabTilData;
    //   // this.solutionData = res.data.data.solutionData;
    // });
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
      this.nowIndex = index;
      this.solutionData = this[`solutionData${index + 1}`];
    },
  },
};
</script>

<style lang="less" scoped>
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
      line-height: 46px;
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
