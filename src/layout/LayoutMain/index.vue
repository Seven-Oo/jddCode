<template>
  <!-- 两个东西 -->
  <div class="layout-main flex flex1 column">
    <!-- 顶部 -->
    <TopNav />
    <div class="layout-centent flex flex1">
      <router-view />
    </div>

    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-main {
  // height: 100%;
  // width: 100%;
  .layout-centent {
    height: 100%;
    // background-color: red;
  }
}
</style>
