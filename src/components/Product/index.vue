<template>
  <div class="product-main">
    <div class="tabTitle-box">
      <ul class="flex">
        <template v-for="(item, index) in proDatas">
          <li
            :class="{ active: index == nowIndex }"
            :key="`tab${item.id}`"
            @click="changeTab(index)"
          >
            <div>
              <i :class="`ln2-0${index + 1}`" />
              <h3>{{ item.title }}</h3>
            </div>
          </li>
        </template>
      </ul>

      <div class="btn">
        <a href="">
          <span>{{ btnTxt }}</span>
          <i class="ln2-arrow_right" />
        </a>
      </div>
    </div>
    <div class="tabCont-box">
      <div class="tabCont-tab-box flex">
        <ul class="tabCont-title-box flex">
          <template v-for="item in proDatas">
            <template v-for="(items, index) in item.children">
              <li
                :title="items.subtitle"
                v-if="items.subtitle"
                :key="items.id"
                :class="{ active: index == nowIndex }"
              >
                {{ items.subtitle }}
              </li>
            </template>
          </template>
        </ul>
      </div>
      <div class="tabCont-cont-box">
        <template v-for="item in proDatas">
          <template v-for="itemA in item.children">
            <template v-for="item in itemA.children">
              <div :key="item.id" class="tabCont-cont-item">
                <a href="#">
                  <h5>{{ item.contTitle }}</h5>
                  <p>{{ item.contBody }}</p>
                </a>
              </div>
            </template>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  components: {},
  props: {
    proDatas: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    btnTxt: '查看更多',
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
  },
};
</script>

<style lang="less" scoped>
.product-main {
  position: relative;

  .tabTitle-box {
    position: relative;

    ul {
      width: 544px;

      li {
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
          background: hsla(0, 0%, 100%, 0.2);
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
          background: hsla(0, 0%, 100%, 0.2);
        }

        &:hover {
          div {
            margin-top: -8px;

            i {
              color: rgba(255, 255, 255, 1);
              font-size: 14px !important;
            }
            h3 {
              font-size: 22px;
            }
          }
        }

        div {
          padding-bottom: 15px;
          box-sizing: border-box;
          border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
          transition: all 0.2s ease;

          i {
            color: rgba(255, 255, 255, 0.4);
            font-size: 8px;
            transition: all 0.2s ease;
          }

          h3 {
            padding-top: 10px;
            font-weight: normal;
            font-size: 16px;
            transition: all 0.2s ease;
          }
        }
      }

      li.active {
        &::before,
        &::after {
          background: #fff;
        }
        div {
          margin-top: -8px;
          border-bottom: 1px solid #fff;

          i {
            color: rgba(255, 255, 255, 1);
            font-size: 14px !important;
          }
          h3 {
            font-size: 22px;
          }
        }
      }
    }

    .btn {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      width: 130px;
      height: 46px;
      padding-left: 27px;
      line-height: 46px;
      font-size: 14px;
      border: 1px solid hsla(0, 0%, 100%, 0.2);
      background: transparent;
      transition: all 0.2s ease;
      box-sizing: border-box;
      align-items: center;
      cursor: pointer;
      border-radius: 2px;

      a {
        color: #fff;
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

  .tabCont-box {
    .tabCont-tab-box {
      padding-top: 10px;

      .tabCont-title-box {
        height: 36px;
        line-height: 35px;
        box-sizing: border-box;
        border: 1px solid hsla(0, 0%, 100%, 0.2);

        li {
          padding: 0 20px;
          color: hsla(0, 0%, 100%, 0.5);
          font-size: 14px;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-align: center;
          cursor: pointer;

          &::after {
            display: block;
            content: 'attr(title)';
            font-size: 16px;
            visibility: hidden;
          }
        }
        li:not(.active):hover {
          color: #fff;
          transform: scale(1.2);
        }
        li.active {
          background: #fff;
          color: #2c68ff;
          font-size: 16px;
        }
      }
    }

    .tabCont-cont-box {
      margin-top: 10px;
      height: 480px;
      overflow: hidden;

      .tabCont-cont-item {
        display: inline-block;
        width: 250px;
        height: 140px;
        margin: 0 30px 20px 0;
        padding: 30px 24px 0;
        box-sizing: border-box;
        border: 1px solid hsla(0, 0%, 100%, 0.2);
        transition: all 0.2s ease;

        &:nth-of-type(3n) {
          margin-right: 0;
        }

        &:hover {
          background: #fff;

          a {
            color: #2c68ff;
          }
        }

        a {
          color: #fff;
        }
        h5 {
          font-size: 18px;
          font-weight: normal;
          margin-bottom: 13px;
        }

        p {
          font-size: 14px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
