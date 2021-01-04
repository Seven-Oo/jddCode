<template>
  <div class="case-main">
    <div class="case-top">
      <div class="main-wrap">
        <img class="case-top-imgD" src="../../assets/case-pc-D.png" alt="" >
        <div class="case-left">
          <h1>京东数科助力南通<br >市域治理现代化</h1>
          <p>
            依托于AI+大数据，京东数科智能城市操作系统，助力南通市打造全国首个市域治理现代化指挥中心，帮助南通市数字化监管、服务、决策、治理迈上新台阶。
          </p>
          <button @click="
            goto('CaseDetail',{caseId: 'case1', caseTitle: '京东数科助力南通'})
          ">了解详情</button>
        </div>
        <div class="case-right">
          <img src="../../assets/case-pc-banner.jpg" alt="" >
        </div>
      </div>
    </div>
    <div class="case-img">
      <div class="main-wrap">
        <h3>{{ imgTitle }}</h3>
        <div class="img-box">
          <img v-for="item in imgArr" :key="item.id" :src="item.src" alt="" >
        </div>
        <ul class="data-box">
          <li v-for="item in dataArr" :key="item.id">
            <div class="amount">{{ item.amount }}<span>万+</span></div>
            <div class="title">{{ item.title }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="case-list">
      <div class="main-wrap">
        <ul>
          <li
            v-for="item in caseList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
            :key="item.id"
            @click="goto('CaseDetail',{caseId: item.id, caseTitle: item.title})"
          >
            <div>
              <img :src="item.src" alt="" >
              <h4>{{ item.title }}</h4>
              <p>{{ item.conts }}</p>
              <div class="more">
                <span>{{ item.moreTxt }}</span>
                <img src="../../assets/case-pc-jiantou.png" alt="" >
              </div>
              <div class="case-hover" />
            </div>
          </li>
        </ul>
        <div class="page-box">
          <el-pagination
            background
            layout="total, prev, pager, next, sizes, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :total="total"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  components: {},
  props: {},
  data: () => ({
    imgTitle: '',
    imgArr: [],
    dataArr: [],
    caseList: [],

    total: 0,
    currentPage: 1, // 初始页
    pagesize: 10, // 每页的数据
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/clientCase').then((res) => {
      this.imgTitle = res.data.finalyData.imgData.title;
      this.imgArr = res.data.finalyData.imgData.caseShowImg;
      this.dataArr = res.data.finalyData.imgData.caseShowData;
      this.caseList = res.data.finalyData.listData;
      this.total = this.caseList.length;
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
    // 每页显示的条数
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.pagesize = val;
      // 点击每页显示的条数时，显示第一页
      // this.getData(val, 1)
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
    },
    goto(name, params) {
      this.$router.push({
        name, params,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.case-main {
  position: relative;
  width: 100%;
  margin-top: 70px;

  .case-top {
    background: url('../../assets/case-pc-bg.png') no-repeat;
    background-size: 100% 100%;
    margin-top: -72px;
    height: 700px;

    .main-wrap {
      .case-top-imgD {
        position: absolute;
        top: 0;
        left: 780px;
        width: 568px;
      }
      .case-left {
        display: inline-block;
        width: 453px;
        vertical-align: top;
        margin-top: 250px;

        h1 {
          width: 453px;
          height: 124px;
          line-height: 62px;
          font-family: PingFangSC-Medium;
          font-size: 44px;
          color: #00041a;
          margin-bottom: 24px;
          font-weight: 500;
        }
        p {
          width: 453px;
          height: 78px;
          line-height: 26px;
          font-family: PingFang-SC-Regular;
          font-size: 16px;
          color: rgba(0, 4, 26, 0.85);
          margin-bottom: 32px;
          display: inline-block;
        }
        button {
          width: 148px;
          height: 48px;
          line-height: 48px;
          text-align: center;
          background: linear-gradient(90deg, #3693ff, #195aff);
          border-radius: 2px;
          box-shadow: 0 4px 14px 0 rgba(25, 90, 255, 0.25);
          border: none;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
      }
      .case-right {
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin: 187px 0 0 73px;

        img {
          width: 632px;
          height: 402px;
          background: #d8d8d8;
          box-shadow: 0 8px 30px 0 rgba(44, 104, 255, 0.3);
        }
      }
    }
  }

  .case-img {
    padding-bottom: 170px;
    h3 {
      text-align: center;
      line-height: 40px;
      font-family: PingFangSC-Regular;
      font-size: 28px;
      font-weight: normal;
      color: #333;
      margin: 65px 0 74px;
    }
    .img-box {
      img {
        width: 210px;
        height: 80px;
        margin: 0 31px 80px 0;
        background: #fff;
        box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.06);
        box-sizing: border-box;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .data-box {
      li {
        position: relative;
        display: inline-block;
        width: 200px;
        box-sizing: border-box;
        text-align: center;

        &::after {
          position: absolute;
          top: 16px;
          right: 0;
          content: '';
          height: 38px;
          width: 1px;
          background: #d8d8d8;
        }

        &:last-child {
          &::after {
            width: 0;
          }
        }

        .amount {
          font-size: 36px;
          color: #333;
          line-height: 50px;

          span {
            font-size: 14px;
            color: #666;
            line-height: 20px;
          }
        }
        .title {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .case-list {
    background: #f9fbff;
    padding: 50px 0 90px 0;

    .page-box {
      margin-top: 40px;
      text-align: right;
    }

    li {
      width: 380px;
      height: 520px;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.06);
      display: inline-block;
      margin: 40px 30px 0 0;
      vertical-align: top;
      cursor: pointer;
      position: relative;

      &:hover {
        .case-hover {
          border-bottom: 5px;
          background: #2c68ff;
        }
      }

      &:nth-of-type(3n) {
        margin-right: 0;
      }

      img {
        width: 380px;
        height: 200px;
      }
      h4 {
        width: 316px;
        height: 56px;
        line-height: 28px;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #333;
        margin: 19px 32px 16px;
        font-weight: normal;
      }
      p {
        width: 316px;
        height: 144px;
        line-height: 24px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666;
        margin: 0 32px 24px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      }
      .more {
        span {
          line-height: 20px;
          font-family: PingFang-SC-Regular;
          font-size: 14px;
          color: #2c68ff;
          margin-left: 32px;
          vertical-align: middle;
        }

        img {
          width: 22px;
          height: 13px;
          background: #2c68ff;
          vertical-align: middle;
          margin-left: 8px;
        }
      }
      .case-hover {
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>
