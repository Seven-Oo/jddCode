<template>
  <div class="newsdetail-main">
    <div class="news-nav">
      <div class="main-wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>您的位置：</el-breadcrumb-item>
          <el-breadcrumb-item>
            <router-link :to="'/'">首页</router-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <router-link :to="'/dynamicCondition'">数科动态</router-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$route.params.newsTitle}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="main-wrap flex">
      <div class="news-left">
        <h2>{{news.title}}</h2>
        <div class="info-box">
          <span>{{news.author}}</span><span class="timer">{{news.pub_time}}</span>
        </div>
        <div class="detail-box">
          {{news.detail}}
        </div>
        <div class="tag-box">
          <span v-for="item in news.tag.list" :key="item.id">{{item.tagName}}</span>
        </div>
        <div class="news-page">
          <ul class="flex">
            <li>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>上一篇</span>
                </div>
                <ul>
                  <li @click="goto('NewsDetail',{newsId: item.id, newsTitle: item.title})">
                    <div class="relate-item">
                      <h4 class="ellips2">{{news.prev.title}}</h4>
                      <div class="info-box">
                        <span>{{news.prev.author}}</span>
                        <span class="timer">{{news.prev.pub_time}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </el-card>
            </li>
            <li>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>下一篇</span>
                </div>
                <ul>
                  <li @click="goto('NewsDetail',{newsId: item.id, newsTitle: item.title})">
                    <div class="relate-item">
                      <h4 class="ellips2">{{news.next.title}}</h4>
                      <div class="info-box">
                        <span>{{news.next.author}}</span>
                        <span class="timer">{{news.next.pub_time}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </el-card>
            </li>
          </ul>
        </div>
      </div>
      <div class="news-right">
        <div class="news-relate">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>相关阅读</span>
            </div>
            <ul>
              <li v-for="item in relate.list" :key="item.id"
                  @click="goto('NewsDetail',{newsId: item.id, newsTitle: item.title})">
                <div class="relate-item">
                  <h4 class="ellips2">{{item.title}}</h4>
                  <div class="info-box">
                    <span>{{item.author}}</span><span class="timer">{{item.pub_time}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </el-card>
        </div>
        <div class="news-share">
          <ul class="flex">
            <li><i class="ln2-weixin"/><span>分享到微信</span></li>
            <li><i class="ln2-weibo"/><span>分享到微博</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  components: {
  },
  props: {
  },
  data: () => ({
    news: {},
    relate: {},
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.post('/dynamic/news',
      {
        newsId: this.$route.params.newsId,
      }).then((res) => {
      console.log(res);
      this.news = res.data.dynamicNewsData.news;
      this.relate = res.data.dynamicNewsData.relate;
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
    goto(name, params) {
      this.$router.push({
        name, params,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.newsdetail-main{
  position: relative;
  width: 100%;
  margin-top: 70px;

  .news-nav {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    background: rgba(199,201,216,.16);

    .el-breadcrumb {
      height: 50px;
      line-height: 50px;
      ::v-deep .el-breadcrumb__inner {
        color: rgba(0,4,26,.45);
      }

      a {
        font-weight: normal;
        color: rgba(0,4,26,.45);

        &:hover {
          color: #2c68ff;
        }
      }
    }
  }

  .news-left {
    width: 900px;
    padding-right: 70px;

    h2 {
      padding: 42px 0 20px;
      line-height: 50px;
      font-size: 38px;
      font-weight: normal;
      color: #00041a;
    }

    .info-box {
      margin: 0 0 42px;
      font-size: 14px;
      line-height: 14px;
      color: rgba(0,4,26,.7);

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
            background-color:rgba(0,4,26,.7);
            opacity: .5;
          }
        }
      }
    }

    .detail-box {
      color: rgba(0,4,26,.5);
    }

    .tag-box {
      margin-top: 32px;

      span {
        display: inline-block;
        padding: 0 16px;
        height: 26px;
        margin-right: 20px;
        line-height: 26px;
        font-size: 14px;
        color: #2c68ff;
        background: rgba(44,104,255,.1);
      }
    }

    .news-page {
      margin: 42px 0;

      ul {
        li {
          width: 50%;
          margin-right: 30px;
          border-radius: 2px;
          box-sizing: border-box;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }
          &:hover {
            .relate-item {
              h4 {
                color: #2c68ff;
              }
            }
          }
          ::v-deep.el-card__header {
            position: relative;
            border-top: 4px solid #2c68ff;
            border-bottom: none;

            &::after {
              position: absolute;
              content: "";
              width: 30px;
              height: 2px;
              left: 22px;
              bottom: 0;
              background: #2c68ff;
            }

            span {
              color: rgba(0,4,26,.7);
              font-size: 14px;
              font-weight: 700;
            }
          }
          .el-card__body {
            li {
              width: auto;
            }
          }

          .relate-item {
            h4 {
              color: rgba(0,4,26,.7);
              font-weight: normal;
              font-size: 16px;
              margin: 0 0 18px;
              line-height: 24px;
              transition: all .2s ease;
            }
            .info-box {
              margin: 0 0 10px;
              font-size: 12px;
              line-height: 14px;
              color: rgba(0,4,26,.7);

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
                    background-color:rgba(0,4,26,.7);
                    opacity: .5;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .news-right {
    width: 300px;
    padding-top: 47px;

    .news-relate {
      ::v-deep.el-card__header {
        position: relative;
        border-top: 4px solid #2c68ff;
        border-bottom: none;

        &::after {
          position: absolute;
          content: "";
          width: 30px;
          height: 2px;
          left: 22px;
          bottom: 0;
          background: #2c68ff;
        }

        span {
          color: rgba(0,4,26,.7);
          font-size: 14px;
        }
      }

      ul {
        li {
          cursor: pointer;

          &:hover {
            .relate-item {
              h4 {
                color: #2c68ff;
              }
            }
          }
          &:last-child {
            .relate-item {
              .info-box {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
              }
            }
          }

          .relate-item {
            h4 {
              color: rgba(0,4,26,.7);
              font-weight: normal;
              font-size: 16px;
              margin: 0 0 18px;
              line-height: 24px;
              transition: all .2s ease;
            }
            .info-box {
              margin: 0 0 20px;
              padding-bottom: 22px;
              font-size: 12px;
              line-height: 14px;
              color: rgba(0,4,26,.7);
              border-bottom: 1px solid rgba(199,201,216,.3);

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
                    background-color:rgba(0,4,26,.7);
                    opacity: .5;
                  }
                }
              }
            }
          }
        }
      }
    }

    .news-share {
      height: 50px;
      margin: 20px 24px;

      li {
        width: 122px;
        height: 50px;
        margin-right: 10px;
        color: rgba(0,4,26,.7);
        border: 1px solid #e7e7ec;
        border-radius: 100px;
        cursor: pointer;
        box-sizing: border-box;
        transition: all .2s ease;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          background: #2c68ff;
          color: #fff;
        }

        i {
          font-size: 24px;
          margin: 0 8px 0 10px;
          vertical-align: middle;
          transition: all .2s ease;
        }
        span {
          font-size: 12px;
          line-height: 48px;
          transition: all .2s ease;
        }
      }
    }
  }
}
</style>
