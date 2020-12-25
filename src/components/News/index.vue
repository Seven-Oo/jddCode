<template>
  <div class="news-main">
    <div class="main-wrap">
      <template v-for="item in newsData">
        <div class="title-box flex" :key="item.id">
          <h2>{{item.title}}</h2>
          <div class="btn">
            <button>
              <a :href="item.rightHref">
                <span>{{ item.rightBtnTxt }}</span>
                <i class="ln2-arrow_right" />
              </a>
            </button>
          </div>
        </div>
        <ul class="conts-box flex" :key="`cont${item.id}`">
          <li v-for="item in item.lists" :key="item.id">
            <a :href="item.href">
              <div class="img-box">
                <img :src="item.src" alt="">
              </div>
              <div class="publish-box">
                <span>{{item.publish.puber}}</span>|<span class="timer">{{item.publish.time}}</span>
              </div>
              <h4>{{item.title}}</h4>
              <p>{{item.conts}}</p>
              <div class="link-box">
                <span>{{item.linkTxt}}</span>
                <i class="ln2-arrow_right"/>
              </div>
            </a>
          </li>
        </ul>
      </template>
      <div class="slogan-box">
        <img src="@/assets/index_news_slogan.svg" alt="">
        <a href="#">{{sloganTxt}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  components: {
  },
  props: {
    newsData: {
      required: true,
      type: Array,
    },
  },
  data: () => ({
    sloganTxt: '获取方案',
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
.news-main{
  padding-top: 220px;
  background: url('../../assets/trend_bg.jpg') no-repeat 0 0;
  background-position: center -270px;

  .title-box {
    position: relative;

    h2 {
      font-size: 36px;
      line-height: 50px;
      font-weight: normal;
      color: #fff;
    }

    .btn {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      button {
        width: 130px;
        height: 46px;
        font-size: 14px;
        border: 1px solid hsla(0,0%,100%,.2);
        border-radius: 2px;
        margin: 0 auto;
        background: transparent;

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
  }

  .conts-box {
    margin-top: 44px;
    padding-bottom: 550px;

    li {
      margin-right: 45px;
      width: 370px;
      overflow: hidden;

      &:last-child {
        margin-right: 0;
      }
      &:hover {
        img {
          transform: translate3d(-50%,-50%,0) scale(1.3);
        }
        h4 {
          color: #33a6ff;
        }
        i {
          opacity: 1;
        }
      }
    }
    a {
      color: #fff;
    }
    .img-box {
      position: relative;
      width: 100%;
      height: 277px;
      overflow: hidden;
      box-sizing: border-box;
      transform-origin: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      transition: all .2s ease;

      img {
        width: 100%;
        transition: all .4s ease;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .publish-box {
      margin: 30px 0 16px 0;
      font-size: 14px;
      color: hsla(0,0%,100%,.5);

      span {
        margin-right: 10px;

        &:last-child {
          margin-left: 10px;
          margin-right: 0;
        }
      }
    }
    h4 {
      height: 32px;
      font-size: 18px;
      color: #fff;
      line-height: 28px;
      font-weight: normal;
      transition: all .2s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      margin-top: 12px;
      height: 48px;
      font-size: 14px;
      color: #fff;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .link-box {
      margin-top: 14px;
      font-size: 14px;
      color: #33a6ff;

      i {
        margin-left: 8px;
        transition: all .2s ease;
        opacity: 0;
      }
    }
  }

  .slogan-box {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 34px;
    transform: translate(-50%, -90px);

    a {
      background: linear-gradient(90deg,#3693ff,#195aff);
      box-shadow: 0 4px 14px 0 rgba(25,90,255,.25);
      color: #fff;
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: -70px;
      width: 130px;
      height: 46px;
      line-height: 46px;
      font-size: 16px;
      margin: 0 auto;
      opacity: 1;
    }
  }
}
</style>
