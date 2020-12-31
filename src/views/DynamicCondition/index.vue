<template>
  <div class="dynamiccondition-main">
    <div class="top-box">
      <div class="main-wrap">
        <h1>{{pageTitle}}</h1>
        <ul class="intro-box flex">
          <li v-for="item in introData" :key="item.id">
            <div class="img-box"><img :src="item.imgSrc" alt=""></div>
            <h4>{{item.title}}</h4>
            <div class="info-box">
              <span>{{item.author}}</span><span class="timer">{{item.pub_time}}</span>
            </div>
            <a href="javascript:;"
               @click="goto('NewsDetail',{newsId: item.id, newsTitle: item.title})"/>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-wrap">
      <ul class="cont-box">
        <li v-for="item in newsData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            :key="item.id">
          <div class="cont-div flex alicenter">
            <div class="img-box"><img :src="item.imgSrc" alt=""></div>
            <div class="text-box">
              <h4>{{item.title}}</h4>
              <p>{{item.conts}}</p>
              <div class="info-box">
                <span>{{item.author}}</span><span class="timer">{{item.pub_time}}</span>
              </div>
              <a href="javascript:;"
                 @click="goto('NewsDetail',{newsId: item.id, newsTitle: item.title})"/>
            </div>
            <i class="ln2-changjiantou"/>
          </div>
        </li>
      </ul>

      <div class="page-box">
        <el-pagination
          background
          layout="prev, pager, next, sizes, total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          :total="total"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicCondition',
  components: {
  },
  props: {
  },
  data: () => ({
    pageTitle: '数科动态',
    introData: [],
    newsData: [],

    total: 0,
    currentPage: 1, // 初始页
    pagesize: 10, // 每页的数据
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/dynamic/topIntro').then((res) => {
      this.introData = res.data.introData;
      this.newsData = res.data.newsData;
      this.total = this.newsData.length;
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
    // 每页显示的条数
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.pagesize = val;
      // 点击每页显示的条数时，显示第一页
      // this.getData(val, 1)
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
    },
    goto(name, params) {
      this.$router.push({
        name, params,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.dynamiccondition-main{
  position: relative;
  width: 100%;
  margin-top: 70px;

  .top-box {
    background: url('../../assets/dynamic_bg.png') no-repeat top center;
    margin-top: -70px;
    margin-bottom: 44px;
    padding-top: 166px;

    h1 {
      font-weight: normal;
      font-size: 44px;
      color: #00041a;
      margin-bottom: 110px;
    }
    .intro-box {

      li {
        position: relative;
        width: 380px;
        height: 285px;
        margin-right: 30px;
        box-shadow: 0 6px 20px 0 rgba(0,72,174,.2);
        overflow: hidden;
        background: #0d0f1b;

        &:last-child {
          margin-right: 0;
        }
        &::before {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(180deg,rgba(38,41,60,0),#26293c);
          opacity: .6;
        }
        &:hover {
          .img-box {
            transform: scale(1.3);
          }
        }

        .img-box {
          transition: all .2s ease;
          img {
            width: 100%;
          }
        }
        h4 {
          position: absolute;
          z-index: 2;
          top: 220px;
          left: 0;
          width: 100%;
          padding: 0 20px;
          line-height: 22px;
          font-size: 16px;
          font-weight: normal;
          color: #fff;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .info-box {
          position: absolute;
          z-index: 2;
          top: 248px;
          left: 0;
          font-size: 12px;
          line-height: 17px;
          padding-left: 20px;
          color: #fff;

          span {
            margin-right: 10px;

            &:last-child {
              position: relative;
              padding-left: 10px;
              margin-right: 0;
              opacity: .5;

              &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 1px;
                height: 12px;
                margin: auto 0;
                background-color:#fff;
                opacity: .5;
              }
            }
          }
        }
        a {
          position: absolute;
          z-index: 3;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .cont-box {
    border-bottom: 1px solid rgba(166,167,175,.2);
    margin-bottom: 30px;

    li {
      height: 242px;
      overflow: hidden;
      border-top: 1px solid rgba(166,167,175,.2);
      transition: all .2s ease;
      box-sizing: border-box;

      &:first-child {
        border-top-width: 0;
      }

      &:hover {
        border-top-color: rgba(166,167,175,0);
        box-shadow: 0 2px 15px 0 rgba(0,72,174,.15);

        .cont-div {
          transform: translate(30px);
          .text-box {
            h4, p {
              color: #2c68ff;
            }
          }
          i {
            color: #2c68ff;
            opacity: .5;
          }
        }

      }

      .cont-div {
        height: 100%;
        padding: 30px 30px 30px 0;
        transition: all .2s ease;
        box-sizing: border-box;

        .img-box {
          width: 260px;
          height: 196px;
          overflow: hidden;

          img {
            height: 196px;
          }
        }
        .text-box {
          position: relative;
          width: 760px;
          margin: 0 0 0 40px;
          color: rgba(0,4,26,.7);

          h4 {
            line-height: 25px;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 9px;
            color: #00041a;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p {
            height: 48px;
            line-height: 24px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .info-box {
            margin: 45px 0 15px;
            line-height: 14px;
            color: rgba(0,4,26,.7);
            font-size: 14px;

            span {
              margin-right: 10px;

              &:last-child {
                position: relative;
                padding-left: 10px;
                font-size: 12px;
                opacity: .5;

                &::before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 0;
                  bottom: 0;
                  width: 1px;
                  height: 12px;
                  margin: auto 0;
                  background-color:rgba(0,4,26,.7);
                  opacity: .5;
                }
              }
            }
          }
          a {
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }

        i {
          position: absolute;
          right: 62px;
          bottom: 46px;
          transition: all .2s ease;
          font-size: 30px;
          color: rgba(0,4,26,.7);
          opacity: 0;
        }
      }
    }
  }

  .page-box {
    text-align: right;
    margin-bottom: 80px;
  }
}
</style>
