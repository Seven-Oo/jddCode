<template>
  <!-- <div>
    <ul class="box" ref="box">
      <li class="left" ref="left">西瓜</li>
      <li class="resize" ref="resize" />
      <li class="mid" ref="mid">备注2</li>
      <li class="resize2" ref="resize2" />
      <li class="right" ref="right">test</li>
    </ul>
    <ul class="box" ref="box">
      <li class="left" ref="left">芒果</li>
      <li class="resize" ref="resize" />
      <li class="mid" ref="mid">备注</li>
      <li class="resize2" ref="resize2" />
      <li class="right" ref="right">test</li>
    </ul>
  </div> -->
  <!-- 两排 -->
  <div class="wid100 hig100">
    <ul class="box" ref="box">
      <li class="left" ref="left">西瓜</li>
      <li class="resize" ref="resize"/>
      <li class="mid" ref="mid">备注2</li>
    </ul>
    <ul class="box" ref="box">
      <li class="left" ref="left">西瓜</li>
      <li class="resize" ref="resize"/>
      <li class="mid" ref="mid">备注2</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.dragControllerDiv();
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    // 三排
    // dragControllerDiv() {
    //   const resize = document.getElementsByClassName('resize');
    //   const resize2 = document.getElementsByClassName('resize2');
    //   const left = document.getElementsByClassName('left');
    //   const right = document.getElementsByClassName('right');
    //   const mid = document.getElementsByClassName('mid');
    //   const box = document.getElementsByClassName('box');
    //   for (let i = 0; i < resize.length; i += 1) {
    //     resize[i].onmousedown = (e1) => {
    //       const startX = e1.clientX;
    //       resize[i].left = resize[i].offsetLeft;
    //       document.onmousemove = (e2) => {
    //         const endX = e2.clientX;
    //         const rightW = right[i].offsetWidth;
    //         let moveLen = resize[i].left + (endX - startX);
    //         const maxT = box[i].clientWidth - resize[i].offsetWidth;
    //         if (moveLen < 150) moveLen = 150;
    //         if (moveLen > maxT - rightW - 150) moveLen = maxT - rightW - 150;

    //         resize[i].style.left = moveLen;

    //         for (let j = 0; j < left.length; j += 1) {
    //           left[j].style.width = `${moveLen}px`;
    //           mid[j].style.width = `${box[i].clientWidth - moveLen - rightW - 10}px`;
    //         }
    //       };
    //       document.onmouseup = () => {
    //         document.onmousemove = null;
    //         document.onmouseup = null;
    //         // resize[i].releaseCapture && resize[i].releaseCapture();
    //       };
    //       // resize[i].setCapture && resize[i].setCapture();
    //       return false;
    //     };
    //   }
    //   for (let i = 0; i < resize2.length; i += 1) {
    //     resize2[i].onmousedown = (e3) => {
    //       const startX = e3.clientX;
    //       resize2[i].left = resize2[i].offsetLeft;
    //       document.onmousemove = (e4) => {
    //         const endX = e4.clientX;
    //         const leftW = left[i].offsetWidth;
    //         let moveLen = resize2[i].left + (endX - startX) - leftW;
    //         const maxT = box[i].clientWidth - resize2[i].offsetWidth - 5;
    //         if (moveLen < 150) moveLen = 150;
    //         if (moveLen > maxT - leftW - 150) moveLen = maxT - leftW - 150;

    //         resize2[i].style.left = moveLen;
    //         for (let j = 0; j < right.length; j += 1) {
    //           mid[j].style.width = `${moveLen}px`;
    //           right[j].style.width = `${box[i].clientWidth - moveLen - leftW - 10}px`;
    //         }
    //       };
    //       document.onmouseup = () => {
    //         document.onmousemove = null;
    //         document.onmouseup = null;
    //         // resize2[i].releaseCapture && resize2[i].releaseCapture();
    //       };
    //       // resize2[i].setCapture && resize2[i].setCapture();
    //       return false;
    //     };
    //   }
    // },

    // 两排
    dragControllerDiv() {
      const resize = document.getElementsByClassName('resize');
      const left = document.getElementsByClassName('left');
      const mid = document.getElementsByClassName('mid');
      const box = document.getElementsByClassName('box');
      for (let i = 0; i < resize.length; i += 1) {
        // 鼠标按下事件
        resize[i].onmousedown = (e1) => {
          const startX = e1.clientX;
          resize[i].left = resize[i].offsetLeft;
          // 鼠标拖动事件
          document.onmousemove = (e2) => {
            const endX = e2.clientX;
            let moveLen = resize[i].left + (endX - startX);
            // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
            const maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

            if (moveLen < 150) moveLen = 150; // 左边区域的最小宽度为150px
            if (moveLen > maxT - 150) moveLen = maxT - 150; // 右边区域最小宽度为150px

            resize[i].style.left = moveLen; // 设置左侧区域的宽度

            for (let j = 0; j < left.length; j += 1) {
              left[j].style.width = `${moveLen}px`;
              mid[j].style.width = `${box[i].clientWidth - moveLen - 10}px`;
            }
          };
          // 鼠标松开事件
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
            // resize[i].releaseCapture && resize[i].releaseCapture();
            // 当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
          };
          // resize[i].setCapture && resize[i].setCapture();
          // 该函数在属于当前线程的指定窗口里设置鼠标捕获
          return false;
        };
      }
    },
  },
};
</script>
<style scoped>
ul,
li {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}
.box {
  width: 800px;
  height: 32px;
  overflow: hidden;
}
.left {
  width: calc(30% - 10px);
  height: 100%;
  background: skyblue;
  float: left;
}

.resize {
  width: 5px;
  height: 100%;
  cursor: w-resize;
  float: left;
}

.resize2 {
  width: 5px;
  height: 100%;
  cursor: w-resize;
  float: left;
}

.right {
  float: left;
  width: 35%;
  height: 100%;
  background: tomato;
}
.mid {
  float: left;
  width: 35%;
  height: 100%;
  background: #f00;
}
</style>
