<template>
  <div class="footer-main"
       :style="{background: bgColor=='home' ? '#010103' : '#00041a'}">
    <div class="footer-box">
      <div class="foot-cont flex">
        <div class="contract-box flex1">
          <div class="contract-cont">
            <ul class="foot-ul">
              <a href=""><img src="@/assets/common_logo_f.svg" alt=""></a>
              <li>
                <a href="/">{{ contract_tel }}<i class="ln2-arrow-right"/></a>
              </li>
              <li>{{ contract_addr }}</li>
            </ul>
            <ul class="media-list">
              <li v-for="item in contract_tool" :key="item.id"><img :src="item.src" alt="" ></li>
            </ul>
          </div>
        </div>
        <FootNav v-for="(item,index) in footData" :key="index" :footNav="item.lists" />
      </div>
      <div class="foot-copy flex">
        <div class="copy-box flex">
          <span>Copyright 2018-2020 京东数科 jddglobal.com 版权所有</span>
          <span>京ICP备11017768号-6</span>
          <span>京B2-20170100</span>
          <a href="" class="">用户授权协议</a>
          <p>网站支持IPv6</p>
        </div>
        <ul class="frid-ul">
          <li>
            <a target="_blank" href="https://www.jd.com/">京东商城</a>
          </li>
          <li>
            <a target="_blank" href="http://jr.jd.com/">京东金融</a>
          </li>
          <li>
            <a target="_blank" href="https://www.jdcloud.com/">京东智联云</a>
          </li>
          <li>
            <a target="_blank" href="https://www.jdwl.com/">京东物流</a>
          </li>
          <li>
            <a target="_blank" href="//www.jdbusiness.com">京东企业购</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  props: {
    bgColor: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    contract_tel: '咨询热线',
    contract_addr: '地址：北京亦庄经济技术开发区科创十一街18号院',
    contract_tool: [
      {
        id: 'wechat',
        src: require('../../assets/wx.png'),
      },
      {
        id: 'douyin',
        src: require('../../assets/douyin.png'),
      },
      {
        id: 'zhihu',
        src: require('../../assets/zhihu.png'),
      },
      {
        id: 'weibo',
        src: require('../../assets/weibo.png'),
      },
    ],
    footData: [],
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/footData').then((res) => {
      this.footData = res.data.footer.footData;
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
  methods: {},
};
</script>

<style lang="less" scoped>
.footer-main {
  width: 100%;

  .footer-box {
    width: 1200px;
    height: 100%;
    margin: auto;

    .foot-cont {
      padding-top: 52px;

      .contract-box {
        .foot-ul {
          a {
            img {
              margin-bottom: 50px;
            }
          }
          li {
            a {
              color: hsla(0, 0%, 100%, 0.65);

              &:hover {
                color: #2c68ff;
              }
              .ln2-arrow-right {
                font-size: 12px;
                margin-left: 6px;
                cursor: pointer;
              }
            }

            margin-bottom: 12px;
            line-height: 20px;
            font-size: 14px;
            color: hsla(0, 0%, 100%, 0.65);
          }
        }
        .media-list {
          li {
            display: inline-block;
            margin-right: 18px;
            border-radius: 50%;
            width: 50px;
            height: 50px;

            &:hover {
              background-color: hsla(0, 0%, 100%, 0.1);
            }

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .foot-copy {
    margin-top: 30px;
    padding: 24px 0 32px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.1);

    .copy-box {
      font-size: 12px;
      line-height: 18px;
      color: hsla(0,0%,100%,.5);

      span {
        margin-right: 10px;
      }

      a {
        margin-right: 8px;
        color: hsla(0,0%,100%,.5);

        &:hover {
          color: #2c68ff;
        }
      }

      p {
        position: relative;
        padding-left: 16px;

        &::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          width: 1px;
          height: 12px;
          background: hsla(0,0%,100%,.3);
        }
      }
    }

    .frid-ul {
      font-size: 12px;

      li {
        display: inline;
        margin-left: 26px;

        a {
          color: hsla(0,0%,100%,.65);
          line-height: 18px;

          &:hover {
            color: #2c68ff;
          }
        }
      }
    }
  }
}
</style>
