<template>
  <div class="slides-main" @mouseover="clearInv" @mouseout="runInv">
    <div class="banner-box">
      <img :src="slides[nowIndex].src" alt="" >

      <transition name="slide-trans">
        <div v-if="isShow" class="banner-texts">
          <h2>{{ slides[nowIndex].title1 }}</h2>
          <h2>{{ slides[nowIndex].title2 }}</h2>
          <p class="p-text">{{ slides[nowIndex].paragraphs }}</p>
          <a :href="slides[nowIndex].href">
            <div class="p-text">
              {{ slides[nowIndex].hrefTxt }}
              <i v-show="slides[nowIndex].href ? true : false" class="ln2-arrow_right" />
            </div>
          </a>
        </div>
      </transition>
      <transition name="slide-trans-old">
        <div v-if="!isShow" class="banner-texts">
          <h2>{{ slides[nowIndex].title1 }}</h2>
          <h2>{{ slides[nowIndex].title2 }}</h2>
          <p class="p-text">{{ slides[nowIndex].paragraphs }}</p>
          <a :href="slides[nowIndex].href">
            <div class="p-text">
              {{ slides[nowIndex].hrefTxt }}
              <i v-show="slides[nowIndex].href ? true : false" class="ln2-arrow_right" />
            </div>
          </a>
        </div>
      </transition>
    </div>
    <div class="banner-page">
      <div
        class="default"
        :class="{active: index==nowIndex}"
        v-for="(item, index) in slides"
        :key="index"
        @click="goto(index)"
      >
        <span/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slides',
  components: {},
  props: {
    slides: {
      type: Array,
      required: true,
    },
    inv: {
      type: Number,
      default: 1000,
    },
  },
  data: () => ({
    nowIndex: 0,
    isShow: true,
    timer: null,
  }),
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      }
      return this.nowIndex - 1;
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      }
      return this.nowIndex + 1;
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.runInv();
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runInv() {
      this.timer = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style lang="less" scoped>
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateY(630px);
}
.slide-trans-old-leave-active {
  display: none;
}
@keyframes lights {
  0% {
    opacity: 0.2;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slides-main {
  width: 856px;
  height: 430px;
  position: relative;

  img {
    width: 100%;
  }

  .banner-texts {
    position: absolute;
    top: 0;
    z-index: 100;
    padding-left: 80px;
    text-align: left;
    animation: lights 0.5s ease-in-out 1;

    h2 {
      font-size: 40px;
      font-weight: 500;
      color: #32447d;
      line-height: 56px;
      margin: 0;
    }
    h2:first-child {
      padding-top: 90px;
    }
    .p-text {
      font-size: 14px;
      font-weight: 400;
      color: #3d5399;
      line-height: 24px;
      padding-top: 16px;
      width: 280px;
    }
    i {
      font-size: 14px;
      margin-left: 2px;
    }
  }
}

.banner-page {
  position: absolute;
  bottom: 0;
  left: 80px;

  .default {
    height: 40px;
    display: inline-block;

    span {
      width: 30px;
      height: 4px;
      display: inline-block;
      background-color: #ddd;
      margin-right: 8px;
      background-clip: content-box !important;
      transition: all 1s ease-out;
    }
  }

  .active {
    height: 40px;
    display: inline-block;

    span {
      width: 30px;
      height: 4px;
      display: inline-block;
      background-color: #2c68ff;
      margin-right: 8px;
      background-clip: content-box !important;
      transition: all 1s ease-out;
    }
  }
}
</style>
