<template>
  <div class="casedetail-main">
    <div class="casedetail-top" :style="{backgroundImage: 'url('+caseDetailsData.bg+')'}">
      <div class="bg-mask"/>
      <div class="main-wrap">
        <h1>{{caseDetailsData.title}}</h1>
        <p>{{caseDetailsData.briefs}}</p>
      </div>
    </div>

    <div class="main-wrap">
      <div class="tab-box">
        <PageTab :pageList="caseDetailsData.navList"/>
      </div>

      <div class="item-box" v-for="(item, index) in caseDetailsData.navList"
           :key="index" :id="item.anchor">
        <!-- <div style="height: 70px;"/> -->
        <h1>{{item.title}}</h1>
        <div class="item-detail" v-if="item.detail">{{item.detail}}</div>
        <div v-if="item.product">
          <ProductItem :productData="caseDetailsData.navList[index].product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseDetail',
  components: {
  },
  props: {
  },
  data: () => ({
    caseDetailsData: {},
  }),
  computed: {},
  watch: {},
  created() {
    this.$http
      .post('/caseNews', {
        caseId: this.$route.params.caseId,
      })
      .then((res) => {
        this.caseDetailsData = res.data.caseDetailsData;
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
  },
};
</script>

<style lang="less" scoped>
.casedetail-main{
  position: relative;
  width: 100%;

  .casedetail-top {
    position: relative;
    height: 700px;
    padding-top: 176px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: 1920px 700px;
    background-position: top;
    margin-bottom: -142px!important;

    .bg-mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 380px;
      background: linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9) 70%,#fff);
    }

    h1 {
      font-weight: normal;
      font-size: 40px;
      color: #00041a;
      margin-bottom: 15px;
    }
    p {
      width: 600px;
      font-size: 16px;
      line-height: 26px;
      color: rgba(0,4,26,.7);
    }
  }

  .tab-box {
    margin-bottom: 60px;
  }

  .item-box {
    margin-bottom: 70px;

    h1 {
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
      color: #00041a;
      margin-bottom: 30px;
    }
    .item-detail {
      color: rgba(0,4,26,.7);
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
