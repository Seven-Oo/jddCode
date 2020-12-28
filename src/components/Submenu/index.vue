<template>
  <div class="submenu-main">
    <div v-for="item in menudata" :key="item.id">
      <h3 class="title">{{ item.title }}</h3>
      <label v-for="item in item.children" :key="item.id" :data-id="item.id">
        <!-- 有二级标题 -->
        <ul class="sub-conts" v-if="item.children">
          <h4 class="subtitle">{{ item.subtitle }}</h4>
          <li class="items" v-for="item in item.children" :key="item.id" :data-id="item.id">
            {{ item.value }}
            <!-- new or hot -->
            <i v-show="item.hot" class="ln2-hot" />
            <i v-show="item.new" class="ln2-new" />
          </li>
        </ul>
        <!-- 无二级标题 -->
        <ul class="sub-conts" v-else>
          <li class="items" v-for="item in item.children" :key="item.id" :data-id="item.id">
            {{ item.value }}
            <i v-show="item.hot" class="ln2-hot" />
            <i v-show="item.new" class="ln2-new" />
          </li>
        </ul>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Submenu',
  components: {},
  props: {
    menudata: {
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
.submenu-main {
  display: flex;
  justify-content: space-around;

  div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    color: #2c68ff;
    font-size: 16px;
    text-align: left;
    padding-left: 0 !important;
  }

  .sub-conts {
    padding-left: 0;

    h4 {
      color: #aaa;
      font-size: 16px;
      text-align: left;
      font-weight: normal;
      margin: 14px 0 6px 0;
    }

    .items {
      color: rgba(0, 4, 26, 0.7);
      font-size: 14px;
      background-color: transparent;
      padding-left: 0;
      height: 24px;
      line-height: 24px;
      text-align: left;
      cursor: pointer;
    }
    .items:hover {
      color: #2c68ff;
    }
  }
}
.ln2-new {
  color: #2c68ff;
}

.ln2-hot {
  color: orange;
}
</style>
