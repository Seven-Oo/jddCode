<template>
  <div class="productitem-main">
    <ul class="detail-ul">
      <li v-for="item in productData" :key="item.id">
        <div class="detail-ul-div">
          <img :src="item.src" alt="">
          <p>{{item.title}}</p>
        </div>

        <div class="item-hover">
          <h2>{{item.title}}</h2>
          <p class="ellips4">{{item.conts}}</p>
          <i v-if="item.isArrow" class="ln2-changjiantou"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  components: {
  },
  props: {
    productData: {
      required: true,
      type: Array,
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
.productitem-main{
  position: relative;

  .detail-ul {
    li {
      position: relative;
      display: inline-block;
      width: 285px;
      height: 220px;
      margin: 0 20px 20px 0;
      cursor: pointer;
      background: #fff;
      box-sizing: border-box;
      transition: all .2s ease;
      overflow: hidden;
      box-shadow: 0 8px 10px 0 rgba(0,72,174,.1);

      &:nth-of-type(4n) {
        margin-right: 0;
      }

      .detail-ul-div {
        text-align: center;

        img {
          display: block;
          height: 160px;
          background-size: contain;
        }
        p {
          height: 60px;
          width: 100%;
          font-size: 14px;
          line-height: 60px;
          color: rgba(0,4,26,.7);
        }
      }

      &:hover {
        .item-hover {
          bottom: 0;
        }
      }

      .item-hover {
        position: absolute;
        bottom: -220px;
        left: 0;
        width: 285px;
        height: 220px;
        padding: 36px 36px 26px 36px;
        box-sizing: border-box;
        background: rgba(44,104,255, .9);
        color: #fff;
        transition: all .2s ease;

        h2 {
          font-size: 18px;
          font-weight: normal;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255, .2);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 20px;
        }
        p {
          font-size: 12px;
        }
        i {
          position: absolute;
          bottom: 26px;
          right: 40px;
          font-size: 24px;
          opacity: .6;
        }
      }
    }
  }
}
</style>
