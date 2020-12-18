<template>
  <div class="solutionitem-main">
    <ul class="item-box">
      <li v-for="item in solutionData" :key="item.id">
        <div class="items-box">
          <a href="#">
            <img :src="item.src" alt="" >
            <h3>{{ item.title }}</h3>
            <p>{{ item.intro }}</p>
          </a>
        </div>
        <svg class="item-svg">
          <line class="top" x1="0" y1="0" x2="840" y2="0" />
          <line class="left" x1="0" y1="200" x2="0" y2="-400" />
          <line class="bottom" x1="280" y1="200" x2="-560" y2="200" />
          <line class="right" x1="280" y1="0" x2="280" y2="600" />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SolutionItem',
  components: {},
  props: {
    solutionData: {
      // type: Array,
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
.solutionitem-main {
  .item-box {
    padding-top: 38px;

    li {
      position: relative;
      width: 280px;
      height: 200px;
      padding: 26px 0 0;
      margin: 0 23px 10px 0;
      display: inline-block;
      box-sizing: border-box;
      color: rgba(0, 4, 26, 0.65);
      transition: all 0.2s ease;

      &:nth-of-type(4n) {
        margin-right: 0;
      }

      .items-box {
        transition: all 0.2s ease;
      }

      .item-svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        line {
          stroke-width: 2;
          // stroke: #4067ff;
          fill: none;
          transition: all 0.8s ease-in-out;

          // .top,
          // .bottom {
          //   stroke-dasharray: 280;
          // }

          // .left,
          // .right {
          //   stroke-dasharray: 200;
          // }
        }
      }

      &:hover {
        background: #fff;

        .items-box {
          transform: translateY(-12px);

          h3 {
            color: #4067ff;
          }
        }

        .item-svg {
          line {
            // stroke-width: 4;
            stroke: #ffc340;

            .top {
              transform: translateX(-560px);
            }

            .bottom {
              transform: translateX(560px);
            }

            .left {
              transform: translateY(400px);
            }

            .right {
              transform: translateY(-400px);
            }
          }
        }
      }

      img {
        display: block;
        width: 66px;
        height: 66px;
        margin-left: 40px;
      }

      h3 {
        padding: 12px 0;
        margin-left: 40px;
        font-size: 18px;
        font-weight: normal;
      }

      p {
        line-height: 20px;
        margin: 0 40px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      a {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 4, 26, 0.65);
      }
    }
  }
}
</style>
