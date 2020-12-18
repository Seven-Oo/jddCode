<template>
  <div class="topnav-main flex jucenter">
    <div class="topnav-box flex row alicenter">
      <a class="logo flex alicenter" href=""><img src="@/assets/logo-index.png"></a>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-container"
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
                <i class="iconfont ln2-arrow_right" />
              </div>
            </div>
            <div class="right">
              <Submenu :menudata="productionMenu1" />
              <Submenu :menudata="productionMenu2" />
              <Submenu :menudata="productionMenu3" />
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
      <a class="top-tree" href=""><img src="@/assets/top-tree.png"></a>
      <a class="top-ask" href="">获取方案</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  components: {},
  props: {},
  data() {
    return {
      activeIndex: '1',
      solutionMenu: [],
      productionSubMenu: [],
      productionMenu1: [],
      productionMenu2: [],
      productionMenu3: [],
    };
  },
  created() {
    this.$http.get('/menuData').then((res) => {
      this.productionSubMenu = res.data.data.productionSubMenu;
      this.productionMenu1 = res.data.data.productionMenu1;
      this.productionMenu2 = res.data.data.productionMenu2;
      this.productionMenu3 = res.data.data.productionMenu3;
      this.solutionMenu = res.data.data.solutionMenu;
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.topnav-main {
  height: @g-header-height;
  //   background-color: red;
  z-index: 110;
  .topnav-box {
    min-width: 1200px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    .top-tree {
      img {
        width: 218px;
        height: 80px;
      }
    }
    .top-ask {
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
    }
    .top-ask:hover {
      opacity: 1;
    }
    .logo {
      img {
        height: 29px;
      }
    }
    .el-menu-container {
      background-color: transparent;
      .is-active {
        color: #00041a;
        font-weight: 700;
        background-color: transparent;
      }
      .el-submenu {
        width: 130px;
        height: @g-header-height;
        ::v-deep .production {
          margin-top: 10px;
          margin-left: -168px;
          height: 600px;
          width: 1200px;
          overflow: hidden;
        }
      }
      .el-menu-item {
        text-align: center;
        width: 130px;
        height: @g-header-height;
        line-height: @g-header-height;
        color: rgba(0, 4, 26, 0.7);
        font-size: 14px;
        &:hover {
          color: #00041a;
          font-weight: 700;
          background-color: transparent;
        }
      }
    }
  }
}
// 带下拉框的，需要额外覆盖
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
  text-align: center;
  height: @g-header-height;
  line-height: @g-header-height;
  color: rgba(0, 4, 26, 0.7);
  font-size: 14px;
  &:hover {
    color: #00041a;
    font-weight: 700;
    background-color: transparent;
  }
}
// 移除下边框
::v-deep .el-menu.el-menu--horizontal {
  border: none;
}
// 激活
</style>
