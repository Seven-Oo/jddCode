<template>
  <div class="topnav-main">
    <div class="topnav-box">
      <a class="logo" href=""><img src="../../assets/logo-index.png"></a>
      <el-menu
        :default-active="activeIndex"
        class="el-menu navbar"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-submenu index="1" popper-class="production" :popper-append-to-body="false">
          <template slot="title">
            <span @click="go2('/productCenter')">产品中心</span>
          </template>
          <div class="production-menu">
            <div class="left">
              <div class="items" v-for="item in productionSubMenu" :key="item.id">
                <span class="title">{{ item.title }}</span>
                <i class="ln2-arrow_right" />
              </div>
            </div>
            <div class="right">
              <Submenu :menudata="productionMenu" />
            </div>
          </div>
        </el-submenu>
        <el-submenu index="2" popper-class="solution" :popper-append-to-body="false">
          <template slot="title"> <span @click="go2('/solution')">解决方案</span></template>
          <div class="solution-menu">
            <Submenu :menudata="solutionMenu" />
            <Submenu :menudata="solutionMenu" />
            <Submenu :menudata="solutionMenu" />
          </div>
        </el-submenu>
        <el-menu-item index="/AICenter">产业AI中心</el-menu-item>
        <el-menu-item index="/DynamicCondition">数科动态</el-menu-item>
        <el-submenu index="5" popper-class="about" :popper-append-to-body="false">
          <template slot="title"> <span @click="go2('/about')">关于我们</span></template>
          <el-menu-item index="5-1">公司介绍</el-menu-item>
          <el-menu-item index="5-2">社会责任</el-menu-item>
          <el-menu-item index="5-3">客户案例</el-menu-item>
          <el-menu-item index="5-4">大事记</el-menu-item>
          <el-menu-item index="5-5">公司环境</el-menu-item>
        </el-submenu>
      </el-menu>
      <a class="top-ad" href=""><img src="@/assets/top-tree.png"></a>
      <a class="top-ask" href="">获取方案</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  components: {},
  props: {},
  data: () => ({
    activeIndex: '1',
    solutionMenu: [],
    productionSubMenu: [],
    productionMenu: [],
  }),
  computed: {},
  watch: {},
  created() {
    this.$http.get('/menuData').then((res) => {
      this.productionSubMenu = res.data.data.productionSubMenu;
      // this.productionMenu1 = res.data.data.productionMenu1;
      this.solutionMenu = res.data.data.solutionMenu;
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
    handleSelect(key) {
      // console.log(key, keyPath);
      this.go2(key);
    },
    go2(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.topnav-main {
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 110;
  transition: all .2s ease;
}
.topnav-box {
  width: 1200px;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin: auto;
  position: relative;
}
.logo {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  img {
    height: 29px;
  }
}
.navbar {
  margin-left: 200px;
  text-align: center;
}
.el-menu--horizontal > .el-menu-item {
  width: 130px;
  padding: 0;
  border-bottom: none;
}
::v-deep .el-submenu__title {
  width: 130px;
  padding: 0;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
::v-deep .el-submenu__title:hover {
  color: #00041a !important;
  font-weight: 700;
}
::v-deep .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
::v-deep .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: transparent;
}
::v-deep .el-menu.el-menu--horizontal {
  border-bottom: none;
}
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title,
.el-menu--horizontal > .el-menu-item {
  height: 70px;
  line-height: 70px;
  color: rgba(0, 4, 26, 0.7);
  font-size: 14px;
}
::v-deep .el-submenu__title i {
  color: rgba(0, 4, 26, 0.7);
  font-size: 14px;
}
.el-menu::after,
.el-menu::before {
  display: inline;
}
.top-ad {
  position: absolute;
  right: 140px;
  display: inline-block;

  img {
    width: 218px;
    height: 80px;
  }
}
.top-ask {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 0;
  display: inline-block;
  width: 105px;
  height: 38px;
  color: #fff;
  text-align: center;
  line-height: 38px;
  font-size: 14px;
  border-radius: 2px;
  border: none;
  opacity: 0.8;
  background: linear-gradient(90deg, #3693ff, #195aff);
  box-shadow: 0 4px 14px 0 rgba(25, 90, 255, 0.25);

  &:hover {
    opacity: 1;
  }
}
.mask {
  background: #fff;
  box-shadow: 0 2px 15px 0 rgba(0, 72, 174, 0.15);
}
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  margin-left: 3px;
}
::v-deep .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none;

  &::after {
    transform: scale(1);
  }
}
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 73px;
  height: 2px;
  margin: 0 auto;
  background-color: #2c68ff;
  transform: scale(0);
  transform-origin: center center;
  transition: all 0.2s ease;
}
.el-menu--horizontal > .el-menu-item.is-active::after {
  transform: scale(1);
}
.el-menu--horizontal > .el-menu-item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70px;
  height: 2px;
  margin: 0 auto;
  background-color: #2c68ff;
  transform: scale(0);
  transform-origin: center center;
  transition: all 0.2s ease;
}
::v-deep .about-us .el-menu-item:hover {
  color: #2c68ff;
}
::v-deep .production {
  position: absolute!important;
  top: 65px !important;
  left: -200px !important;
  height: 600px;
  width: 1200px;
  overflow: hidden;

  .el-menu--popup {
    height: 100%;
    box-shadow: -5px 10px 24px 0 rgba(122, 143, 200, 0.1);
    background: transparent url('../../assets/common_header_bg.jpg') no-repeat top;
    background-size: cover;
    padding: 0;
  }
}
.production-menu {
  display: flex;
  justify-content: flex-start;

  .left {
    width: 220px;
    background: #fff;
    margin-right: 40px;
    height: 600px;

    .items {
      height: 80px;
      line-height: 80px;
      color: #00041a;
      font-weight: 700;
      font-size: 16px;
      margin: 0 25px;
      text-align: left;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding: 0;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: space-between;

      &:hover {
        background: linear-gradient(90deg, #4c9eff, #195aff);
        transition: all 0.2s ease;
        margin: 0;

        .title {
          color: #fff;
          padding-left: 36px;
        }

        .title:before {
          position: absolute;
          content: '';
          left: 0;
          top: 0;
          bottom: 0;
          width: 39px;
          background: url('../../assets/common_icon_light.png') no-repeat 0 0;
        }
        .ln2-arrow_right {
          display: inline;
          padding-right: 36px;
        }
      }
    }

    .ln2-arrow_right {
      color: #fff;
      display: none;
    }
  }
  .right {
    width: 940px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0 10px 0;
    height: 560px;
    overflow: auto;
  }
}
::v-deep .solution {
  position: absolute!important;
  top: 65px !important;
  left: -200px !important;
  max-height: 600px;
  overflow: auto;
  width: 1200px;
  padding: 0;

  .el-menu--popup {
    height: 100%;
    box-shadow: -5px 10px 24px 0 rgba(122, 143, 200, 0.1);
    background: transparent url('../../assets/common_header_bg.jpg') no-repeat top;
    background-size: cover;
    padding: 30px 0;
  }
}
.solution-menu {
  display: flex;
  justify-content: space-around;
}
::v-deep .about {
  top: 65px !important;

  .el-menu--popup {
    min-width: 130px;
    width: 130px;
    background: #fff;

    .el-menu-item {
      min-width: auto;
      color: rgba(0, 4, 26, 0.7);

      &:hover {
      color: #2c68ff !important;
      font-weight: normal;
    }
    }
  }
}
</style>
