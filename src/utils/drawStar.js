/* eslint-disable no-new */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
export function drawStar() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width = window.innerWidth;
  const h = 600;
  const hue = 217; // 基调色
  const stars = [];
  let count = 0;
  const maxStars = 200; // 星星数量
  /** ******************************绘制星星**************************************** */
  const canvas2 = document.createElement('canvas');
  const ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  const half = canvas2.width / 2;
  const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  // 渐变开始圆的x  y坐标，开始圆的半径；渐变结束圆的x y 坐标，结束圆的半径
  // 渐变色
  gradient2.addColorStop(0.02, '#FCFAFF'); // 星星内白点大小
  gradient2.addColorStop(0.05, `hsl(${hue}, 50%, 20%)`); // 渐变色
  gradient2.addColorStop(0.3, 'transparent');
  gradient2.addColorStop(1, 'transparent');

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }
    if (min > max) {
      const hold = max;
      max = min;
      min = hold;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    const max = Math.max(x, y); // 返回最大值
    const diameter = Math.round(Math.sqrt(2 * max * max)); // 平方根的四舍五入
    return diameter / 2;
  }
  const Star = function () {
    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 8;
    // 星星大小
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(50, maxStars);
    this.alpha = random(2, 10) / 10;
    count++;
    stars[count] = this;
  };
  Star.prototype.draw = function () {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
    const twinkle = random(10);
    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  };
  for (let i = 0; i < maxStars; i++) {
    new Star();
  }

  function animation() {
    ctx.clearRect(0, 0, w, h); // 清理画布
    for (let i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }
    window.requestAnimationFrame(animation);
  }
  animation();
}
