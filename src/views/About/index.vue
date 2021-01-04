<template>
  <div class="about-main">
    <div class="about-bg">
      <div class="top-logo">
        <div class="main-wrap"><img src="@/assets/about_title.svg" alt=""></div>
      </div>
      <div class="anchor-tab" ref="anchorTab">
        <div class="main-wrap">
          <PageTab :pageList="navList"/>
        </div>
      </div>
      <div class="intro-box">
        <span id="intro" style="margin-top: -60px;"/>
        <div class="main-wrap flex">
          <div class="left-img">
            <img src="@/assets/jdLogo-1.png" alt="">
            <div class="img-div"/>
          </div>
          <div class="right-intro">
            <h2>{{introData.title}}</h2>
            <div class="desc-box">
              <el-scrollbar style="height:100%">
                <p v-for="item in introData.introList" :key="item.id">{{item.conts}}</p>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div class="value-box" id="value">
        <div class="main-wrap">
          <h2>{{valueData.title}}</h2>
          <p>{{valueData.desc}}</p>
          <ul>
            <li v-for="item in valueData.valueList" :key="item.id">
              <div class="flex alicenter">
                <div class="icon-box">
                  <img :src="item.iconSrc" alt="">
                </div>
                <div class="cont-box">
                  <h4>{{item.title}}</h4>
                  <p>{{item.conts}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="duty-box" id="duty">
        <div class="main-wrap">
          <div class="duty-title">
            <h2>{{dutyData.title}}</h2>
            <div class="btn">
              <button>
                <a :href="dutyData.rightHref">
                  <span>{{ dutyData.rightTxt }}</span>
                  <i class="ln2-arrow_right" />
                </a>
              </button>
            </div>
          </div>
          <ul class="duty-conts">
            <li v-for="item in dutyData.dutyList1" :key="item.id">
              <div class="flex alicenter">
                <div class="duty-img">
                  <img :src="item.imgSrc" alt="">
                </div>
                <div class="duty-intro">
                  <h4>{{item.title}}</h4>
                  <p class="ellips5">{{item.conts}}</p>
                </div>
              </div>
            </li>
            <li v-for="item in dutyData.dutyList2" :key="item.id">
              <div class="flex alicenter">
                <div class="duty-intro">
                  <h4>{{item.title}}</h4>
                  <p class="ellips5">{{item.conts}}</p>
                </div>
                <div class="duty-img">
                  <img :src="item.imgSrc" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="event-box" id="event">
        <div class="main-wrap">
          <h2>{{eventData.title}}</h2>
        </div>
        <div class="timeLine">
          <div class="ul_box">
            <ul class="my_timeline">
              <div class="main-wrap flex alicenter">
                <li class="my_timeline_item" v-for="(item,index) in eventList"
                    :key="item.id"
                    :class="{active: index == timeIndex}"  @click="changeActive(index)">
                  <!--圈圈节点-->
                  <div class="my_timeline_node"/>
                  <!--标注-->
                  <div class="my_timeline_item_content">
                    {{item.timestamp}}
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <template v-if="eventList[timeIndex]">
            <div class="main-wrap contView-box">
              <div class="content" v-for="item in eventList[timeIndex].children" :key="item.id">
                <h4 class="tit">{{item.title}}</h4>
                <ul class="cont-ul">
                  <li v-for="item in item.infoList" :key="item.id">
                    <p>{{item.info}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <div class="main-wrap">
            <ul class="contView-ul">
              <li><i class="ln2-up"/></li>
              <li><i class="ln2-down"/></li>
            </ul>
          </div>
        </div>

      </div>
      <div class="env-box" id="env">
        <div class="main-wrap">
          <h2 class="env-title">{{envData.title}}</h2>
          <ul>
            <li  v-for="item in envData.envList" :key="item.id">
              <div>
                <div class="env-img">
                  <img :src="item.imgSrc" alt="">
                </div>
                <div class="env-intro">
                  <h4>{{item.title}}</h4>
                  <p>{{item.conts}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  props: {
  },
  data: () => ({
    navList: [
      {
        id: 'intro',
        title: '公司介绍',
        anchor: 'intro',
      },
      {
        id: 'value',
        title: '价值观',
        anchor: 'value',
      },
      {
        id: 'duty',
        title: '社会责任',
        anchor: 'duty',
      },
      {
        id: 'event',
        title: '数科大事记',
        anchor: 'event',
      },
      {
        id: 'env',
        title: '公司环境',
        anchor: 'env',
      },
    ],
    introData: [],
    valueData: [],
    dutyData: [],
    eventData: [],
    envData: [],
    eventList: [],
    timeIndex: 0,
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/about/intro').then((res) => {
      this.introData = res.data.introData;
      this.valueData = res.data.valueData;
      this.dutyData = res.data.dutyData;
      this.eventData = res.data.eventData;
      this.eventList = res.data.eventData.eventList;
      this.envData = res.data.envData;
    });
  },
  mounted() {
    window.addEventListener('scroll', this.tabScroll, true);
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener('scroll', this.tabScroll);
  }, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    changeActive(index) {
      this.timeIndex = index;
    },
    tabScroll() {
      const scrollTop = window.pageYOffset
      || document.documentElement.scrollTop || document.body.scrollTop;
      const tab = this.$refs.anchorTab;

      if (scrollTop >= tab.offsetTop) {
        document.querySelector('.topnav-main').style.boxShadow = 'none';

        tab.style.backgroundColor = '#fff';
        tab.style.boxShadow = '0 2px 15px 0 rgba(0,72,174,.15)';
        tab.style.position = 'fixed';
        tab.style.top = '70px';
        tab.style.zIndex = '2';
        tab.style.width = '100%';
        tab.style.marginTop = '0';
      } else {
        tab.style.backgroundColor = 'transparent';
        tab.style.boxShadow = 'none';
        tab.style.position = '';
        tab.style.marginTop = '150px';
      }
    },
  },
};
</script>

<style lang="less" scoped>
.about-main{
  position: relative;
  width: 100%;
  margin-top: 70px;

  .about-bg {
    margin-top: -70px;
    background: url('../../assets/about_bg_a.png') no-repeat;
    padding-top: 230px;

    .anchor-tab {
      margin-top: 150px;
    }

    .intro-box {
      margin: 80px 0 40px 0;

      .left-img {
        width: 600px;
        height: 540px;
        position: relative;

        img {
          max-width: 540px;
          max-height: 540px;
          position: absolute;
          right: 0;
          z-index: 1;
        }
        .img-div {
          width: 539px;
          height: 330px;
          background: #dde7fb;
          position: absolute;
          bottom: 0;
        }
      }

      .right-intro {
        width: 600px;
        padding: 35px 0 0 40px;
        box-sizing: border-box;

        h2 {
          font-size: 36px;
          line-height: 50px;
          font-weight: 500;
          color: #00041a;
          padding-bottom: 24px;
        }

        .desc-box {
          line-height: 24px;
          font-size: 14px;
          height: 410px;
          color: rgba(0,4,26,.7);
          overflow-y: auto;

          p {
            margin-bottom: 15px;
            padding-right: 20px;
          }
          ::v-deep.el-scrollbar__wrap {
            overflow-x: hidden;
          }
        }
      }
    }

    .value-box {
      margin-bottom: 37px;

      h2 {
        font-size: 36px;
        line-height: 50px;
        font-weight: 500;
        color: #00041a;
      }
      p {
        margin-top: 7px;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0,4,26,.7);
      }

      ul {
        margin-top: 24px;
        li {
          display: inline-block;
          width: 385px;
          height: 120px;
          padding: 21px 0 0 18px;
          margin: 0 22px 20px 0;
          box-shadow: 0 2px 14px 0 rgba(0,39,123,.13);
          vertical-align: top;
          box-sizing: border-box;

          &:nth-of-type(3n) {
            margin-right: 0;
          }

          .icon-box {
            width: 78px;
            height: 78px;
            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
          .cont-box {
            h4 {
              font-size: 16px;
              font-weight: normal;
              line-height: 22px;
              color: #00041a;
            }
            p {
              margin-top: 7px;
              font-size: 14px;
              line-height: 20px;
              color: rgba(0,4,26,.7);
            }
          }
        }
      }
    }

    .duty-box {
      margin-bottom: 30px;

      .duty-title {
        position: relative;
        padding: 0 0 30px;

        h2 {
          position: relative;
          font-size: 36px;
          line-height: 50px;
          font-weight: 500;
          color: #00041a;
        }
        .btn {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.2s ease;

          &:hover {
            background: hsla(0,0%,100%,.8);
            a {
                span {
                  transform: translate(0);
                }
                i {
                  opacity: 1;
                  transform: translate(6px);
                }
            }
          }

          button {
            width: 130px;
            height: 46px;
            font-size: 14px;
            border: 1px solid #2c68ff;
            border-radius: 2px;
            margin: 0 auto;
            background: transparent;
            transition: all 0.2s ease;

            a {
              color: #2c68ff;
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
      }

      .duty-conts {
        li {
          width: 580px;
          display: inline-block;
          margin: 0 40px 40px 0;
          line-height: 24px;
          color: rgba(0,4,26,.7);
          box-shadow: 0 2px 14px 0 rgba(0,39,123,.13);

          &:nth-of-type(2n) {
            margin-right: 0;
          }

          .duty-img {
            width: 300px;
            height: 300px;
            img {
              max-height: 100%;
            }
          }

          .duty-intro {
            width: 280px;
            height: 300px;
            padding: 60px 25px 0;
            box-sizing: border-box;

            h4 {
              position: relative;
              font-size: 18px;
              font-weight: normal;
              padding-bottom: 14px;
              margin-bottom: 20px;
              line-height: 26px;

              &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 40px;
                height: 2px;
                background: #2c68ff;
              }
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }

    .event-box {
      background: url('../../assets/about_event_bg.png') no-repeat;
      padding: 50px 0;
      margin: 0 0 50px 0;

      h2 {
          font-size: 36px;
          line-height: 50px;
          font-weight: 500;
          color: #00041a;
          padding-bottom: 24px;
        }

      .timeLine {
        margin-top: 40px;

        .ul_box {
          margin-bottom: 30px;
        }

        .my_timeline {
          &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            margin: auto 0;
            background: rgba(0,4,26,.1);
          }

          .main-wrap {
            justify-content: space-around;
          }
        }

        .my_timeline_item {
          display: inline-block;
          margin-left: -80px;
          padding-left: 80px; /* 选中区域处理 */
          width: 160px;
          height: 30px;
          position: relative;
          cursor: pointer;

          &:first-child {
            margin-left: 0;
          }
        }
        .my_timeline_node {
          width: 12px;
          height: 12px;
          background: #9497a7;
          border: 4px solid #f3f4f7;
          border-radius: 100%;
          box-sizing: border-box;
          transition: all .2s ease;
          position: absolute;
          transform: translate(-50%,-50%);
          transition: all .2s ease;
        }
        .my_timeline_item_content {
          font-size: 14px;
          color: rgba(0,4,26,.5);
          margin-left: -20px;
          position: absolute;
          top: -34px;
          transition: all .2s ease;
        }
        li.active .my_timeline_node {
          width: 26px;
          height: 26px;
          background: #2c68ff;
          box-shadow: 0 2px 8px 0 rgba(1,52,133,.18);
          border: 7px solid #fff;
          position: absolute;
          transform: translate(-50%,-50%);
        }
        li.active .my_timeline_item_content {
          font-size: 18px;
          color: #00041a;
          top: -40px;
          margin-left: -26px;
        }
        .content h4 {
          font-size: 16px;
          color: #00041a;
          font-weight: normal;
        }
        .content p {
          position: relative;
          line-height: 24px;
          padding-left: 15px;
          font-size: 14px;
          color: rgba(0,4,26,.7);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .content p::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 100px;
          background: #2c68ff;
        }
        .cont-ul {
          margin: 20px 0;
        }
        .content ul li{
          display: inline-block;
          width: 292px;
          height: 130px;
          padding: 25px 18px 0 19px;
          margin: 0 11px 10px 0;
          background: hsla(0,0%,100%,.7);
          vertical-align: top;
          box-sizing: border-box;
        }
        .contView-box {
          height: 574px;
          overflow: hidden;
        }
        .contView-ul {
          li {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #195aff;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;

            &:first-child {
              margin-right: -1px;
            }
            i {
              color: #195aff;
              font-size: 18px;
            }
          }
        }
      }
    }

    .env-box {
      h2 {
        font-size: 36px;
        line-height: 50px;
        font-weight: 500;
        color: #00041a;
      }
      ul {
        margin-top: 30px;
        li {
          display: inline-block;
          width: 580px;
          height: 422px;
          margin-right: 40px;
          margin-bottom: 30px;
          vertical-align: top;

          &:nth-of-type(2n){
            margin-right: 0;
          }

          .env-img {
            width: 580px;
            height: 326px;
            margin-bottom: 20px;
            img {
              max-width: 100%;
            }
          }
          .env-intro {
            h4 {
              font-weight: normal;
              font-size: 16px;
              margin-bottom: 10px;
              line-height: 22px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              line-height: 22px;
              font-size: 14px;
              color: rgba(0,0,0,.7);
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
  }
}
</style>
