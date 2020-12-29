<template>
  <!-- 两个东西 -->
  <div class="layout-main flex flex1 column">
    <!-- 顶部 -->
    <TopNav />
    <div class="layout-centent flex flex1">
      <router-view />
    </div>

    <!-- 底部 -->
    <template v-if="$route.name=='home'">
      <Footer :bgColor="'#010103'" :showSlogan="false" />
    </template>
    <template v-else>
      <Footer :bgColor="'#00041a'" :showSlogan="true" />
    </template>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
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
.layout-main {
  // height: 100%;
  // width: 100%;
  overflow: hidden;

  .layout-centent {
    height: 100%;
    // background-color: red;
  }
}
</style>
