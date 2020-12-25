<template>
  <div class="home" @mousemove="bannerMove($event)" @mouseenter="bannerEnter($event)">
    <div class="index">
      <div class="bar-box">
        <img src="@/assets/index_banner_bg_small_d.png" alt="" class="ban-smalld" >
        <img src="@/assets/index_banner_bg_circle.png" alt="" class="ban-circle" >
      </div>
      <div class="bar-box">
        <img
          src="@/assets/index_banner_bg.png"
          alt=""
          class="ban-d"
          :style="{ transform: `translate(${disX}px, ${disY}px)` }"
        >
      </div>
      <div class="main-wrap banner-box flex">
        <div class="banner-nav">
          <img src="@/assets/common_slogan.svg" alt="">
          <div class="banner-play">{{ playVideo }}<i class="ln2-right" /></div>
          <ul>
            <li v-for="item in jiejue" :key="item.id">
              <img :src="item.src" alt="" >
              <h4>{{ item.title }}</h4>
            </li>
          </ul>
        </div>
        <div class="banner-main-box flex">
          <Slides :slides="slides" :inv="slideSpeed" />
        </div>
      </div>
    </div>
    <div class="solution-box">
      <div class="main-wrap">
        <Solution />
      </div>
    </div>
    <div class="product-box">
      <div class="main-wrap">
        <div class="pro-box flex">
          <div class="left-box">
            <div class="left-d-img">
              <img src="@/assets/prod_dynamic_d.png" alt="">
            </div>
            <div class="left-d-tit">
              <h2>{{ prodLeftData.title }}</h2>
              <p>{{ prodLeftData.parap }}</p>
            </div>
          </div>
          <div class="right-box">
            <Product :proDatas="productDatas" />
          </div>
        </div>
      </div>
    </div>
    <div class="case-box">
      <Case :caseData="caseDatas"/>
    </div>
    <div class="news-box">
      <News :newsData="newsDatas"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { throttle } from 'lodash';

export default {
  name: 'Home',
  data() {
    return {
      disX: 0,
      disY: 0,
      coordinateX: 0,
      coordinateY: 0,
      playVideo: '播放短片',
      jiejue: [
        {
          id: 'jiejue1',
          src: require('@/assets/jiejue-1.png'),
          title: '金融机构数字化解决方案',
        },
        {
          id: 'jiejue2',
          src: require('@/assets/jiejue-2.png'),
          title: '商户与企业数字化解决方案',
        },
        {
          id: 'jiejue3',
          src: require('@/assets/jiejue-3.png'),
          title: '政府及其他客户数字化解决方案',
        },
      ],
      slideSpeed: 3000,
      slides: [],
      prodLeftData: {
        title: '数字化产品',
        parap:
          '京东数字科技以人工智能、大数据、区块链等时代前沿技术为基础，开发多种产品为企业创造更大的价值',
      },
      productDatas: [],
      caseDatas: [],
      newsDatas: [],
    };
  },
  created() {
    this.$http.get('/slides').then((res) => {
      this.slideSpeed = res.data.slidersData.slideSpeed;
      this.slides = res.data.slidersData.slides;
    });
    this.$http.get('/product').then((res) => {
      this.productDatas = res.data.products.productDatas;
    });
    this.$http.get('/case').then((res) => {
      this.caseDatas = res.data.cases.caseDatas;
    });
    this.$http.get('/news').then((res) => {
      this.newsDatas = res.data.newsWraper.newsDatas;
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    bannerEnter(event) {
      const { offsetX, offsetY } = event;
      this.coordinateX = offsetX;
      this.coordinateY = offsetY;
    },
    // eslint-disable-next-line
    bannerMove: throttle(function (event) {
      const { offsetX, offsetY } = event;
      this.disY = (this.coordinateY - offsetY) * 0.05;
      this.disX = (this.coordinateX - offsetX) * 0.05;
      this.coordinateX = offsetX;
      this.coordinateY = offsetY;
      document.onmouseleave = () => {
        this.disX = 0;
        this.disY = 0;
        this.coordinateX = 0;
        this.coordinateY = 0;
      };
    }, 250),
    handleScroll() {
      const scrollTop = window.pageYOffset
      || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= 70) {
        document.querySelector('.topnav-main').style.backgroundColor = '#fff';
        document.querySelector('.topnav-main').style.boxShadow = '0 2px 15px 0 rgba(0,72,174,.15)';
      } else {
        document.querySelector('.topnav-main').style.backgroundColor = 'transparent';
        document.querySelector('.topnav-main').style.boxShadow = 'none';
      }
    },
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  margin-top: 70px;

  .index {
    background: url('../../assets/index_bg.png') no-repeat -10px;

    .bar-box {
      height: 100%;
    }
    .ban-d {
      width: 918px;
      height: 970px;
      right: 0;
      top: -220px;
      transition: all 0.2s linear;
      background-size: contain;
      position: absolute;
      z-index: 1;
    }
    .ban-d:hover {
      filter: blur(20px);
    }
    .ban-smalld {
      position: absolute;
      top: 120px;
      left: -202px;
      width: 306px;
      height: 320px;
      transition: all 0.2s linear;
      background-size: contain;
      animation: banner-move 5s infinite alternate;
    }
    .ban-circle {
      position: absolute;
      top: 336px;
      left: 0;
      width: 100px;
      height: 100px;
      transition: all 0.2s linear;
      background-size: contain;
      animation: banner-move 5s infinite alternate;
    }
    @keyframes banner-move {
      0% {
        transform: translateZ(0);
      }
      33% {
        transform: translate3d(8%, -8%, 0);
      }
      66% {
        transform: translate3d(-8%, -8%, 0);
      }
      100% {
        transform: translateZ(0);
      }
    }

    // 轮播
    .banner-box {
      padding-top: 49px;

      .banner-nav {
        padding-top: 30px;
        width: 344px;
        text-align: left;

        .banner-play {
          width: 120px;
          height: 38px;
          padding-left: 27px;
          margin: 19px 0 52px;
          line-height: 36px;
          color: #2c68ff;
          font-size: 14px;
          border-radius: 100px;
          border: 1px solid #2c68ff;
          box-sizing: border-box;
          transition: all 0.1s ease;
          cursor: pointer;
          transform: none;

          .ln2-right {
            font-size: 14px;
          }
        }
        .banner-play:hover {
          color: #fff;
          background: #2c68ff;
        }

        ul {
          padding-left: 0;

          li {
            height: 48px;
            transition: all 0.2s ease;
          }
          li:hover {
            transform: translate(5px);

            h4 {
              color: #2c68ff;
            }
          }

          img {
            width: 32px;
            vertical-align: middle;
            padding-right: 8px;
          }

          h4 {
            color: #00041a;
            font-size: 14px;
            display: inline-block;
            vertical-align: middle;
            font-weight: normal;
          }
        }
      }

      .banner-main-box {
        width: 856px;
        height: 430px;
        box-shadow: 0 18px 35px 0 rgba(0, 34, 178, 0.4);
        overflow: hidden;
        z-index: 2;
      }
    }
  }
  //solution
  .solution-box {
    position: relative;
    padding-top: 90px;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('../../assets/solution_bg.jpg') no-repeat top;
    }
  }
  //product
  .product-box {
    .pro-box {
      height: 660px;
      box-sizing: border-box;
      position: relative;

      .left-box {
        width: 340px;
        height: 100%;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -360px;
          background: url('../../assets/prod_left_bg.jpg') no-repeat;
          height: 660px;
          width: 1220px;
        }

        .left-d-img {
          position: relative;
          padding: 70px 0;
        }

        .left-d-tit {
          position: relative;

          h2 {
            font-weight: normal;
            font-size: 40px;
            line-height: 50px;
          }

          p {
            width: 340px;
            padding-right: 30px;
            margin-top: 13px;
            line-height: 24px;
            font-size: 14px;
            color: rgba(0, 4, 26, 0.5);
            box-sizing: border-box;
          }
        }
      }

      .right-box {
        position: relative;
        width: 860px;
        padding: 40px 0 0 50px;
        height: 100%;
        background: #2c68ff;
        box-sizing: border-box;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background: #2c68ff url('../../assets/prod_right_bg.png') no-repeat;
          height: 660px;
          width: 1220px;
        }
      }
    }
  }
}
// #footer-main {
//   background: #010103!important;
// }
</style>
