<template>
  <div class="pagetab-main">
    <ul class="page-tab flex">
      <li v-for="(item, index) in pageList"
          :key="index"
          :class="{active: index==nowIndex}"
          @click="changeTab(index)">
        <a href="javascript:;"
           @click="goAnchor(`#${item.anchor}`)">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageTab',
  components: {},
  props: {
    pageList: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    nowIndex: 0,
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
    changeTab(index) {
      this.nowIndex = index;
    },
    goAnchor(selector) {
      const anchor = document.querySelector(selector);
      // document.documentElement.scrollTop = (anchor.offsetTop - 100);
      document.documentElement.scrollTop = (anchor.offsetTop);
    },
  },
};
</script>

<style lang="less" scoped>
.pagetab-main{

  .page-tab {
    padding-top: 18px;
    height: 52px;
    border-bottom: 1px solid rgba(0,0,0,.1);

    li {
      position: relative;
      height: 52px;
      line-height: 52px;
      margin-right: 20px;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      width: 120px;

      &::after {
        content: "";
        opacity: 0;
        position: absolute;
        left: 0;
        bottom: -1px;
        right: 0;
        width: 100%;
        margin: 0 auto;
        height: 2px;
        background: #2c68ff;
        transform-origin: center center;
        transform: scale(0);
        transition: all .2s ease;
      }

      &:hover {
        a {
          color: #2c68ff;
          font-size: 16px;
        }
      }

      a {
        color: #00041a;
        font-size: 14px;
        transition: all .2s ease;
      }
    }
    li.active {
      a {
        color: #2c68ff;
        font-size: 16px;
      }

      &::after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
}
</style>
