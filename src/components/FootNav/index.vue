<template>
  <div class="footnav-main">
    <div class="footnav-box" v-for="item in footNav" :key="item.id">
      <h5>{{ item.title }}</h5>
      <ul class="foot-ul">
        <li v-for="item in item.list" :key="item.id">
          <a href="">{{ item.value }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootNav',
  components: {},
  props: {
    footNav: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
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
  methods: {},
};
</script>

<style lang="less" scoped>
.footnav-main {
  padding-top: 5px;
  .footnav-box {
    display: inline-block;
    margin-right: 140px;
    vertical-align: top;

    &:last-child {
      margin-right: 0;
    }

    h5 {
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: 700;
      color: #fff;
    }

    .foot-ul {
      li {
        margin-bottom: 12px;
        line-height: 20px;
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.65);

        a {
          color: hsla(0, 0%, 100%, 0.65);

          &:hover {
            color: #2c68ff;
          }
        }
      }
    }
  }
}
</style>
