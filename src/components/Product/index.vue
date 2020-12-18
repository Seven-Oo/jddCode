<template>
  <div class="product-main">
    <div class="tabTitle-box">
      <ul class="flex">
        <li v-for="(item, index) in proDatas" :key="item.id">
          <div>
            <i :class="`ln2-0${index+1}`"/>
            <h3>{{item.title}}</h3>
          </div>
        </li>
      </ul>
    </div>
    <div class="tabCont-box">
      <div class="tabCont-tab-box">
        <ul>
          ff
          <li v-for="item in proDatas.children" :key="item.id">{{item.subtitle}}</li>
        </ul>
      </div>
      <div class="tabCont-cont-box">
        dd
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  components: {
  },
  props: {
    proDatas: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
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
  methods: {},
};
</script>

<style lang="less" scoped>
.product-main{
  position: relative;

  .tabTitle-box {

    ul li {
      position: relative;
      width: 136px;
      height: 70px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        border: 1px solid #2c68ff;
        background: hsla(0,0%,100%,.2);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -5px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        border: 1px solid #2c68ff;
        background: hsla(0,0%,100%,.2);
      }

      &:hover {
        div {
          i {
            color: rgba(255, 255, 255, 1);
            font-size: 14px!important;
          }
          h3 {
            font-size: 22px;
          }
        }
      }

      div {
        padding-bottom: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid hsla(0,0%,100%,.2);
        transition: all .2s ease;

        i {
          color: rgba(255, 255, 255, 0.4);
          font-size: 8px;
          transition: all .2s ease;
        }

        h3 {
          padding-top: 10px;
          font-weight: normal;
          font-size: 16px;
          transition: all .2s ease;
        }
      }
    }
  }
}
</style>
