<template>
  <div class="aicenter-main">
    <div class="banner-box">
      <div class="banner-animate">
        <div class="main-wrap">
          <div class="animate-circle"/>
          <img class="animate-g1" src="@/assets/ai_banner_bg_group_1.png" alt="">
          <img class="animate-g2" src="@/assets/ai_banner_bg_group_2.png" alt="">
          <img class="animate-g3" src="@/assets/ai_banner_bg_group_3.png" alt="">
        </div>
      </div>
      <div class="main-wrap">
        <div class="info-box">
          <h1>{{title}}</h1>
          <div class="text-div" v-html="infoTxt"/>
        </div>
      </div>
    </div>
    <div class="core-box">
      <div class="main-wrap">
        <h1>{{aiCore.title}}</h1>
        <div class="tab-head">
          <ul class="tab-tit flex alicenter">
            <li
              v-for="(item, index) in aiCore.tab.list"
              :key="item.id"
              :class="{ active: index == coreNowIndex }"
              @click="changeCore(index)"
            >
              {{ item.tabValue }}
            </li>
          </ul>
          <div class="btn" v-if="aiCore.tab.rightTxt">
            <button>
              <span>{{ aiCore.tab.rightTxt }}</span>
              <i class="ln2-arrow_right" />
            </button>
          </div>
        </div>

        <transition name="slide-fade">
          <div class="tab-cont" v-if="coreVisibility">
            <ul class="item-box flex">
              <li class="flex flex1 alicenter"
                  v-for="(item, index) in aiCore.tab.list[coreNowIndex].list" :key="item.id"
                  @mouseover="changeCoreItem(index)" :class="{active: index==coreItemNowIndex}">
                <div class="items-box">
                  <img :src="item.icon" alt="">
                  <h4>{{ item.title }}</h4>
                  <span>{{ item.title_en }}</span>
                </div>
                <div class="brief-box" v-html="item.brief"/>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div class="industry-box">
      <div class="main-wrap">
        <h1>{{aiIndustry.title}}</h1>
        <div class="tab-head">
          <ul class="tab-tit flex alicenter">
            <li
              v-for="(item, index) in aiIndustry.tab.list"
              :key="item.id"
              :class="{ active: index == induNowIndex }"
              @click="changeIndu(index)"
            >
              {{ item.tabValue }}
            </li>
          </ul>
        </div>

        <transition name="slide-fade">
          <div class="tab-cont" v-if="induVisibility">
            <ProductItem :productData="aiIndustry.tab.list[induNowIndex].list"/>
          </div>
        </transition>
      </div>
    </div>
    <div class="lab-box">
      <div class="main-wrap">
        <h1>{{aiLab.title}}</h1>
        <ul class="cont-box">
          <li v-for="(item, index) in aiLab.list" :key="item.id"
              @mouseenter="changeImgSrc(index, item)" @mouseleave="recoverImgSrc(index, item)">
            <div class="pr">
              <img ref="changeImg" :src="item.icon" alt="">
              <h4>{{item.title}}</h4>
              <div class="ellips2">{{item.brief}}</div>
              <i class="ln2-changjiantou"/>
            </div>
          </li>
          <div class="animate-box">
            <i class="ani-dot"/>
            <i class="ani-dot"/>
            <i class="ani-dot"/>
          </div>
        </ul>
      </div>
    </div>
    <div class="paper-box">
      <div class="main-wrap">
        <div class="title-box">
          <h1>{{aiPaper.title}}</h1>
        </div>
        <div class="cont-box">
          <div class="top">
            <ul class="flex outerUl">
              <li class="flex1" v-for="(item, index) in aiPaper.topData" :key="item.id"
                  :style="`background-image: url(${item.bg})`">
                <h3>{{item.title}}</h3>
                <div class="top-conts-box">
                  <div class="science-box">
                    <div class="innerUl" ref="innerUl"
                         style="transform: translate(0px, 0px);">
                      <div class="flex alicenter" v-for="item in item.list" :key="item.id">
                        <img class="paper_ico" src="@/assets/ai_paper_paper_icon.png" alt="">
                        <p class="ellips2">{{item.title}}</p>
                        <a href="javascript:;"/>
                      </div>
                    </div>
                  </div>
                  <div class="more-box" v-if="item.list.length > 5">
                    <div class="arrow-box flex alicenter">
                      <i @click="paperTopUlDown(index)" class="ln2-down"/>
                      <i @click="paperTopUlUp(index)" class="ln2-up"/>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="bottom">
            <div class="tit-box">
              <h1>{{aiPaper.bottomData.title}}</h1>
            </div>
            <ul class="bottom-ul">
              <li v-for="item in aiPaper.bottomData.list" :key="item.id">
                <div class="flex alicenter bottom-box">
                  <div class="bottom-txt-box">
                    <h6>{{item.title}}</h6>
                    <div class="ellips2">{{item.conts}}</div>
                  </div>
                  <img src="@/assets/ai_paper_paper_icon.png" alt="">
                  <a href="javascript:;"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiCenter',
  components: {
  },
  props: {
  },
  data: () => ({
    title: '',
    infoTxt: '',
    aiCore: {},
    coreNowIndex: 0,
    coreVisibility: true,
    coreItemNowIndex: 0,

    aiIndustry: {},
    induNowIndex: 0,
    induVisibility: true,

    aiLab: {},

    aiPaper: {},
    paperTransY: 0,
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/aiCenter').then((res) => {
      this.title = res.data.aiData.title;
      this.infoTxt = res.data.aiData.infoTxt;
      this.aiCore = res.data.aiData.aiCore;
      this.aiIndustry = res.data.aiData.aiIndustry;
      this.aiLab = res.data.aiData.aiLab;
      this.aiPaper = res.data.aiData.aiPaper;
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
    changeCore(index) {
      this.coreVisibility = false;
      this.coreNowIndex = index;
      setTimeout(() => {
        this.coreVisibility = true;
      });
    },
    changeCoreItem(index) {
      this.coreItemNowIndex = index;
    },
    changeIndu(index) {
      this.induVisibility = false;
      this.induNowIndex = index;
      setTimeout(() => {
        this.induVisibility = true;
      });
    },
    // paper 内容多时上下滑动
    paperTopUlDown(index) {
      this.paperTransY += 80;
      const allHeight = (this.$refs.innerUl[index].children.length - 5) * 80;
      if (this.paperTransY <= allHeight) {
        this.$refs.innerUl[index].style.transform = `translate(0px, -${this.paperTransY}px)`;
      }
    },
    paperTopUlUp(index) {
      this.paperTransY -= 80;
      this.$refs.innerUl[index].style.transform = `translate(0px, -${this.paperTransY}px)`;
    },
    // lab hover换图标
    changeImgSrc(index, item) {
      this.$refs.changeImg[index].setAttribute('src', item.hoverIcon);
    },
    recoverImgSrc(index, item) {
      this.$refs.changeImg[index].setAttribute('src', item.icon);
    },
  },
};
</script>

<style lang="less" scoped>
.slide-fade-enter-active {
  transition: all .3s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
@keyframes ai-banner-float1 {
  0% {
    transform: translateZ(0);
  }
  50% {
    transform: translate3d(20px,-16px,0);
  }
  100% {
        transform: translateZ(0);
  }
}
@keyframes ai-banner-float2 {
  0% {
    transform: translate3d(15px,-12px,0);
  }
  50% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(15px,-12px,0);
  }
}
@keyframes ai-banner-float3 {
  0% {
    transform: translate3d(18px,-15px,0);
  }
  50% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(18px,-15px,0);
  }
}
@-webkit-keyframes scale-out {
  0% {
    transform:translate(-50%,-50%) scale(0);
    border-color:#2c68ff}
  70% {
    transform:translate(-50%,-50%) scale(.7);
    border-color:rgba(44,104,255,.8)
  }
  to {
    transform:translate(-50%,-50%) scale(1);
    border-color:rgba(44,104,255,0)
  }
}
@keyframes scale-out {
  0% {
    transform:translate(-50%,-50%) scale(0);
    border-color:#2c68ff
  }
  70% {
    transform:translate(-50%,-50%) scale(.7);
    border-color:rgba(44,104,255,.8)
  }
  to {
    transform:translate(-50%,-50%) scale(1);
    border-color:rgba(44,104,255,0)}
  }

.aicenter-main{
  position: relative;
  width: 100%;
  background: url('../../assets/ai_banner_bg.png') no-repeat;

  .banner-box {
    position: relative;
    height: 650px;
    padding-top: 184px;
    box-sizing: border-box;

    .banner-animate {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      .animate-circle {
        background: url('../../assets/ai_banner_bg_circle.png') no-repeat;
        position: absolute;
        right: -680px;
        top: -500px;
        width: 1387px;
        height: 1192px;
      }
      .animate-g1 {
        position: absolute;
        width: 374px;
        top: 168px;
        right: 180px;
        animation: ai-banner-float1 8s linear infinite;
      }
      .animate-g2 {
        position: absolute;
        width: 196px;
        top: 88px;
        right: 492px;
        animation: ai-banner-float2 6s linear infinite;
      }
      .animate-g3 {
        position: absolute;
        width: 369px;
        top: 77px;
        right: -24px;
        animation: ai-banner-float3 7s linear infinite;
      }
    }

    .info-box {
      width: 520px;

      h1 {
        position: relative;
        font-weight: normal;
        font-size: 44px;
        color: #00041a;
        padding-bottom: 50px;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 20px;
          height: 3px;
          width: 80px;
          background: #2c68ff;
        }
      }
      .text-div {
        color: rgba(0,4,26,.7);
        font-size: 14px;
        line-height: 28px;
      }
    }
  }

  .core-box {
    h1 {
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
      color: #00041a;
    }

    .tab-head {
      position: relative;
      margin-top: 20px;
      border-bottom: 1px solid #e8e9ea;

      .tab-tit {
        li {
          position: relative;
          font-size: 16px;
          line-height: 60px;
          width: 134px;
          margin-right: 51px;
          color: rgba(0, 4, 26, 0.7);
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;

          &:last-child {
            margin-right: 0;
          }

          &::before {
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 80px;
            height: 2px;
            background: #4067ff;
            transform: scale(0);
            transition: all 0.2s ease;
          }

          &:hover {
            color: #4067ff;
            font-size: 22px;
          }

          &.active {
            color: #4067ff;
            font-size: 22px;

            &::before {
              transform: scale(1);
            }
          }
        }
      }

      .btn {
        position: absolute;
        right: 0;
        top: 6px;

        button {
          width: 130px;
          height: 46px;
          font-size: 14px;
          border: 1px solid #195aff;
          border-radius: 2px;
          margin: 0 auto;
          background: transparent;
          color: #195aff;

          &:hover {
            span {
              transform: translate(0);
            }
            i {
              opacity: 1;
              transform: translate(6px);
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
    }

    .tab-cont {
      margin-top: 30px;

      .item-box {
        height: 450px;

        li {
          transition: all .2s ease;
          position: relative;

          &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            content: '';
            height: 152px;
            margin: auto 0;
            width: 1px;
            background:rgba(0,0,0,.06);;
          }
          &:last-child {
            &::after {
              width: 0;
            }
          }

          .items-box {
            margin: 0 30px;
            transition: all .2s ease;

            img {
              width: 75px;
              height: 75px;
              vertical-align: bottom;
            }
            h4 {
              margin: 10px 0 7px;
              font-weight: normal;
              font-size: 16px;
              color: rgba(0,4,26,.7);
            }
            span {
              font-size: 12px;
              color: rgba(0,4,26,.5);
              transition: all .2s ease;
              opacity: 1;
            }
          }
          .brief-box {
            position: absolute;
            top: 161px;
            left: 40px;
            width: 340px;
            font-size: 14px;
            line-height: 20px;
            color: rgba(0,4,26,.5);
            opacity: 0;
            transform: translateY(125px);
            transition: transform .2s ease,opacity .2s ease;
          }
        }
        li.active {
          flex: 1.6;
          border-radius: 0 100px 0 0;
          overflow: hidden;
          border: 1px solid #2c68ff;
          box-shadow: 0 4px 20px 0 rgba(45,105,255,.1);

          .items-box {
            margin: 0 40px;
            transform: translateY(-125px);

            span {
              opacity: 0;
            }
          }
          .brief-box {
            opacity: 1;
            transform: translate(0);
          }
        }
      }
    }
  }

  .industry-box {
    margin-top: 50px;
    padding-top: 70px;
    background: url('../../assets/ai_indu_bg.jpg') no-repeat;

    h1 {
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
      color: #00041a;
    }
    .tab-head {
      position: relative;
      margin-top: 20px;
      border-bottom: 1px solid rgba(0,4,26,.1);

      .tab-tit {
        li {
          position: relative;
          font-size: 16px;
          line-height: 60px;
          width: 134px;
          margin-right: 51px;
          color: rgba(0, 4, 26, 0.7);
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;

          &:last-child {
            margin-right: 0;
          }

          &::before {
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 80px;
            height: 2px;
            background: #4067ff;
            transform: scale(0);
            transition: all 0.2s ease;
          }

          &:hover {
            color: #4067ff;
            font-size: 22px;
          }

          &.active {
            color: #4067ff;
            font-size: 22px;

            &::before {
              transform: scale(1);
            }
          }
        }
      }
    }
    .tab-cont {
      margin-top: 30px;
      height: 540px;
    }
  }

  .lab-box {
    padding: 30px 0 50px;
    box-sizing: border-box;

    h1 {
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
      color: #00041a;
    }

    .cont-box {
      position: relative;
      height: 792px;
      margin-top: 24px;
      background: url('../../assets/ai_lab_bg.png') no-repeat top;

      li {
        display: inline-block;
        z-index: 1;
        width: 340px;
        height: 200px;
        padding: 24px 30px 0 34px;
        border-radius: 2px;
        background: #fff;
        transition: all .2s ease;
        cursor: pointer;
        box-sizing: border-box;
        overflow: hidden;
        box-shadow: 0 8px 20px 0 rgba(0,72,174,.18);

        &:hover {
          background: #2c68ff;
          transform: translateY(-8px);

          div {
            h4 {
              color: #fff;
            }
            color: #fff;
            i {
              opacity: .7;
              color: #fff;
            }
          }
        }

        div {
          img {
            width: 50px;
            height: 50px;
          }
          h4 {
            margin: 10px 0 14px;
            font-size: 18px;
            color: rgba(0,4,26,.7);
            font-weight: 400;
            transition: all .2s ease;
          }
          div {
            font-size: 14px;
            height: 48px;
            overflow: hidden;
            color: rgba(0,4,26,.5);
            line-height: 24px;
            transition: all .2s ease;
          }
          i {
            position: absolute;
            right: 0;
            bottom: -30px;
            font-size: 30px;
            color: #2c68ff;
            opacity: 0;
          }
        }

        &:nth-of-type(1) {
          position: absolute;
          top: 40px;
          left: 40px;
        }
        &:nth-of-type(2) {
          position: absolute;
          top: 280px;
          left: 0;
        }
        &:nth-of-type(3) {
          position: absolute;
          top: 520px;
          left: 40px;
        }
        &:nth-of-type(4) {
          position: absolute;
          right: 0;
          margin: 0 auto;
          top: 159px;
          left: 0;
        }
        &:nth-of-type(5) {
          position: absolute;
          right: 0;
          margin: 0 auto;
          top: 397px;
          left: 0;
        }
        &:nth-of-type(6) {
          position: absolute;
          top: 40px;
          right: 40px;
        }
        &:nth-of-type(7) {
          position: absolute;
          top: 280px;
          right: 0;
        }
        &:nth-of-type(8) {
          position: absolute;
          top: 520px;
          right: 40px;
        }
      }

      .animate-box {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .ani-dot {
          position: relative;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(44,104,255,.5);

          &::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 100px;
            height: 100px;
            transform-origin: center center;
            border-radius: 500px;
            border: 1px solid #2c68ff;
            -webkit-animation: scale-out 1.5s linear infinite;
            animation: scale-out 1.5s linear infinite;
          }

          &:nth-of-type(1) {
            position: absolute;
            top: 100px;
            right: 400px;
          }
          &:nth-of-type(2) {
            position: absolute;
            top: 300px;
            left: 380px;
          }
          &:nth-of-type(3) {
            position: absolute;
            top: 400px;
            right: 374px;
          }
        }
      }
    }
  }

  .paper-box {
    background: url('../../assets/ai_paper_bg.png') no-repeat;

    .title-box {
      padding: 62px 0 42px;
      h1 {
        font-size: 36px;
        line-height: 50px;
        font-weight: 500;
        color: #00041a;
      }
    }

    .cont-box {
      .top {
        .outerUl {
          li {
            margin-right: 8px;
            background-size: cover;
            background-position: 0 0;
            background-repeat: no-repeat;
            box-shadow: 0 8px 20px 0 rgba(0,72,174,.18);

            &:last-child {
              margin-right: 0;
            }

            h3 {
              height: 110px;
              padding-left: 40px;
              font-size: 26px;
              font-weight: normal;
              line-height: 110px;
              color: #fff;
              box-sizing: border-box;
            }

            .top-conts-box {
              width: 360px;
              height: 482px;
              padding-top: 10px;
              box-sizing: border-box;
              border-radius: 0 40px 0 0;
              background: #fff;

              .science-box {
                height: 402px;
                overflow: hidden;

                .innerUl {
                  width: 360px;
                  height: 482px;
                  padding-top: 10px;
                  box-sizing: border-box;
                  border-radius: 0 40px 0 0;
                  background: #fff;
                  transition: all .2s ease;

                  div {
                    position: relative;
                    height: 80px;
                    margin-right: 26px;

                    &::after {
                      content: "";
                      position: absolute;
                      left: 74px;
                      right: 0;
                      bottom: 0;
                      height: 1px;
                      background: rgba(0,0,0,.04);
                    }
                    &:hover {
                      a {
                        opacity: 1;
                      }
                    }

                    img.paper_ico {
                      position: absolute;
                      left: 30px;
                      width: 23px;
                      height: 29px;
                    }
                    p {
                      margin: 0 46px 0 73px;
                      font-size: 14px;
                      color: rgba(0,4,26,.7);
                      line-height: 20px;
                    }
                    a {
                      display: inline-block;
                      width: 25px;
                      height: 22px;
                      opacity: 0;
                      transition: all .2s ease;
                      background: url('../../assets/ai_paper_download.png') no-repeat 0 0;
                      background-size: contain;
                      position: absolute;
                      right: 0;
                    }
                  }
                }
              }

              .more-box {
                position: relative;
                width: 360px;
                height: 69px;
                background: #fff;

                .arrow-box {
                  height: inherit;
                  width: 100%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%,-50%);
                  justify-content: center;
                  i {
                    width: 60px;
                    text-align: center;
                    font-size: 18px;
                    cursor: pointer;
                    &:hover {
                      color: #2c68ff;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .bottom {
        .tit-box {
          h1 {
            padding: 50px 0 20px;
            color: rgba(0,4,26,.7);
            font-size: 28px;
            font-weight: 400;
          }
        }
        .bottom-ul {
          padding-bottom: 30px;
          li {
            height: 137px;
            box-sizing: border-box;
            width: 48%;
            display: inline-block;
            vertical-align: top;
            margin-right: 2%;
            cursor: pointer;

            &:nth-of-type(2n) {
              margin-right: 0;
            }
            &:hover {
              .bottom-box {
                transform: translateY(-5px);

                .bottom-txt-box {
                  h6 {
                    color: #2c68ff;
                  }
                }
                a {
                  opacity: 1;
                }
              }
            }

            .bottom-box {
              height: 100%;
              transition: all .2s ease;
              position: relative;

              &::after {
                content: "";
                position: absolute;
                left: 53px;
                right: 0;
                bottom: 0;
                height: 1px;
                background-color: rgba(0,0,0,.08);
              }

              .bottom-txt-box {
                padding: 0 45px 0 53px;
                h6 {
                  margin-bottom: 13px;
                  color: rgba(0,4,26,.7);
                  font-size: 16px;
                  font-weight: normal;
                  line-height: 22px;
                  transition: all .2s ease;
                }
                div {
                  color: rgba(0,4,26,.5);
                  font-size: 14px;
                  line-height: 20px;
                  height: 40px;
                }
              }
              img {
                position: absolute;
                top: 34px;
                left: 0;
              }
              a {
                position: absolute;
                top: 33px;
                right: 0;
                display: inline-block;
                width: 25px;
                height: 22px;
                opacity: 0;
                transition: all .2s ease;
                background: url('../../assets/ai_paper_download_0.png') no-repeat 0 0;
                background-size: contain;
              }
            }
          }
        }
      }
    }
  }
}
</style>
