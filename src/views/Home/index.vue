<template>
  <div class="home" @mousemove="bannerMove($event)" @mouseenter="bannerEnter($event)">
    <div class="index">
      <div class="bar-box">
        <img src="@/assets/index_banner_bg_small_d.png" alt="" class="ban-smalld" >
        <img src="@/assets/index_banner_bg_circle.png" alt="" class="ban-circle" >
      </div>
      <div class="bar-box">
        <img
          src="@/assets/index_banner_bg.png"
          alt=""
          class="ban-d"
          :style="{ transform: `translate(${disX}px, ${disY}px)` }"
        >
      </div>
      <div class="main-wrap banner-box flex">
        <div class="banner-nav">
          <img src="@/assets/common_slogan.svg" alt="">
          <div class="banner-play">{{ playVideo }}<i class="ln2-right" /></div>
          <ul>
            <li v-for="item in jiejue" :key="item.id">
              <img :src="item.src" alt="" >
              <h4>{{ item.title }}</h4>
            </li>
          </ul>
        </div>
        <div class="banner-main-box flex">
          <Slides :slides="slides" :inv="slideSpeed" />
        </div>
      </div>
    </div>
    <div class="solution-box">
      <div class="main-wrap">
        <Solution />
      </div>
    </div>
    <div class="product-box">
      <div class="main-wrap">
        <div class="pro-box flex">
          <div class="left-box">
            <div class="left-d-img">
              <img src="@/assets/prod_dynamic_d.png" alt="">
            </div>
            <div class="left-d-tit">
              <h2>{{ prodLeftData.title }}</h2>
              <p>{{ prodLeftData.parap }}</p>
            </div>
          </div>
          <div class="right-box">
            <Product :proDatas="productDatas" />
          </div>
        </div>
      </div>
    </div>
    <div class="case-box">
      <Case :caseData="caseDatas"/>
    </div>
    <div class="news-box">
      <News :newsData="newsDatas"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { throttle } from 'lodash';

export default {
  name: 'Home',
  data() {
    return {
      disX: 0,
      disY: 0,
      coordinateX: 0,
      coordinateY: 0,
      playVideo: '播放短片',
      jiejue: [
        {
          id: 'jiejue1',
          src: require('@/assets/jiejue-1.png'),
          title: '金融机构数字化解决方案',
        },
        {
          id: 'jiejue2',
          src: require('@/assets/jiejue-2.png'),
          title: '商户与企业数字化解决方案',
        },
        {
          id: 'jiejue3',
          src: require('@/assets/jiejue-3.png'),
          title: '政府及其他客户数字化解决方案',
        },
      ],
      slideSpeed: 3000,
      slides: [],

      prodLeftData: {
        title: '数字化产品',
        parap:
          '京东数字科技以人工智能、大数据、区块链等时代前沿技术为基础，开发多种产品为企业创造更大的价值',
      },
      productDatas: [
        {
          id: 'aisen',
          title: 'AI科技',
          children: [
            {
              id: 'aisen1',
              subtitle: '智能机器人',
              children: [
                {
                  id: 'aisen1-1',
                  contTitle: '可穿戴AI仿生手',
                  contBody: '可用于特种作业，代替人员进入危险环境中完成操作任务',
                },
                {
                  id: 'aisen1-2',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'aisen1-3',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
                {
                  id: 'aisen1-4',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'aisen1-5',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
              ],
            },
            {
              id: 'aisen2',
              subtitle: '区块链',
              children: [
                {
                  id: 'aisen2-1',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'aisen2-2',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'aisen2-3',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
              ],
            },
            {
              id: 'aisen3',
              subtitle: '智能风控',
              children: [
                {
                  id: 'aisen3-1',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
                {
                  id: 'aisen3-2',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
                {
                  id: 'aisen3-3',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'aisen3-4',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
              ],
            },
          ],
        },
        {
          id: 'jinrong',
          title: '金融科技',
          children: [
            {
              id: 'jinrong1',
              subtitle: '金融云',
              children: [
                {
                  id: 'jinrong1-1',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'jinrong1-2',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'jinrong1-3',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
              ],
            },
            {
              id: 'jinrong2',
              subtitle: '风控',
              children: [
                {
                  id: 'jinrong2-1',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
                {
                  id: 'jinrong2-2',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
                {
                  id: 'jinrong2-3',
                  contTitle: '挂轨式巡检AI机器人',
                  contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
                },
                {
                  id: 'jinrong2-4',
                  contTitle: '商服AI机器人',
                  contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
                },
              ],
            },
          ],
        },
        {
          id: 'zhineng',
          title: '智能城市',
          children: [
            {
              id: 'zhineng-1',
              contTitle: '挂轨式巡检AI机器人',
              contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
            },
            {
              id: 'zhineng-2',
              contTitle: '挂轨式巡检AI机器人',
              contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
            },
            {
              id: 'zhineng-3',
              contTitle: '挂轨式巡检AI机器人',
              contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
            },
            {
              id: 'zhineng-4',
              contTitle: '商服AI机器人',
              contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
            },
            {
              id: 'zhineng-5',
              contTitle: '挂轨式巡检AI机器人',
              contBody: '依托AI视觉识别等技术系统组成 实现全时段智慧安防巡检',
            },
            {
              id: 'zhineng-6',
              contTitle: '商服AI机器人',
              contBody: '集合图像识别、语音智能对话、屏幕交互、智能导航等功能',
            },
          ],
        },
        {
          id: 'shuzi',
          title: '数字营销',
          children: [
            {
              id: 'shuzi1',
              subtitle: '屏端应用生态',
              children: [
                {
                  id: 'shuzi1-1',
                  contTitle: '钼媒方舟平台',
                  contBody:
                    '基于AI、数据、硬件、安全等基础技术，以IoT平台、方舟小程序开放平台、屏端应用平台为连接，实现内容应用与线下场景屏幕连接。',
                },
              ],
            },
            {
              id: 'shuzi2',
              subtitle: 'SAAS产品',
              children: [
                {
                  id: 'shuzi2-1',
                  contTitle: '钼媒方舟平台',
                  contBody:
                    '基于AI、数据、硬件、安全等基础技术，以IoT平台、方舟小程序开放平台、屏端应用平台为连接，实现内容应用与线下场景屏幕连接。',
                },
                {
                  id: 'shuzi2-2',
                  contTitle: '钼媒方舟平台',
                  contBody:
                    '基于AI、数据、硬件、安全等基础技术，以IoT平台、方舟小程序开放平台、屏端应用平台为连接，实现内容应用与线下场景屏幕连接。',
                },
              ],
            },
          ],
        },
      ],

      caseDatas: [
        {
          id: 'caseData',
          caseTitle: '客户案例',
          caseTitle_tips: '与合作伙伴一起，共创数字经济增长新方式',
          btnTxt: '查看更多',
          caseImgs: [
            {
              id: 'caseIcon1',
              src: require('@/assets/index_case_icon_1.png'),
              list: [
                {
                  id: 'case1-1',
                  title: '京东数科助力南通市域治理现代化',
                  conts: `江苏省南通市基于京东数科“智能城市操作系统”建成市域治理现代化指挥中心。
                  该中心打破数据孤岛，汇聚南通市64个部门、10个县市区数十亿量级的数据。
                  全南通市交通运行、公共安全、环境污染等情况都在一张大屏幕上实时呈现，一屏统览。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon2',
              src: require('@/assets/index_case_icon_2.png'),
              list: [
                {
                  id: 'case2-1',
                  title: '京东数科携手兴银基金推出“兴银策略智选混合型证券投资基金”',
                  conts: `10月22日，兴银基金与京东数字科技集团（简称京东数科）
                  携手推出“兴银策略智选混合型证券投资基金”（简称兴银策略智选）`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon3',
              src: require('@/assets/index_case_icon_3.png'),
              list: [
                {
                  id: 'case3-1',
                  title: '京东数科携手中国雄安集团打造雄安新区“块数据平台”',
                  conts: `2019年，京东数科的智能城市操作系统在雄安落地为块数据平台，它是雄安新区城市大数据资源中心的实际载体，
                  承担着汇聚新区全域数据，统筹新区数据管理，实现新区数据融合应用的重要任务。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon4',
              src: require('@/assets/index_case_icon_2.png'),
              list: [
                {
                  id: 'case4-1',
                  title: '京东数科携手兴银基金推出“兴银策略智选混合型证券投资基金”',
                  conts: `10月22日，兴银基金与京东数字科技集团（简称京东数科）
                  携手推出“兴银策略智选混合型证券投资基金”（简称兴银策略智选）`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon5',
              src: require('@/assets/index_case_icon_1.png'),
              list: [
                {
                  id: 'case5-1',
                  title: '京东数科助力南通市域治理现代化',
                  conts: `江苏省南通市基于京东数科“智能城市操作系统”建成市域治理现代化指挥中心。
                  该中心打破数据孤岛，汇聚南通市64个部门、10个县市区数十亿量级的数据。
                  全南通市交通运行、公共安全、环境污染等情况都在一张大屏幕上实时呈现，一屏统览。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon6',
              src: require('@/assets/index_case_icon_3.png'),
              list: [
                {
                  id: 'case6-1',
                  title: '京东数科携手中国雄安集团打造雄安新区“块数据平台”',
                  conts: `2019年，京东数科的智能城市操作系统在雄安落地为块数据平台，它是雄安新区城市大数据资源中心的实际载体，
                  承担着汇聚新区全域数据，统筹新区数据管理，实现新区数据融合应用的重要任务。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon7',
              src: require('@/assets/index_case_icon_1.png'),
              list: [
                {
                  id: 'case7-1',
                  title: '京东数科携手兴银基金推出“兴银策略智选混合型证券投资基金”',
                  conts: `10月22日，兴银基金与京东数字科技集团（简称京东数科）
                  携手推出“兴银策略智选混合型证券投资基金”（简称兴银策略智选）`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon8',
              src: require('@/assets/index_case_icon_2.png'),
              list: [
                {
                  id: 'case8-1',
                  title: '京东数科助力南通市域治理现代化',
                  conts: `江苏省南通市基于京东数科“智能城市操作系统”建成市域治理现代化指挥中心。
                  该中心打破数据孤岛，汇聚南通市64个部门、10个县市区数十亿量级的数据。
                  全南通市交通运行、公共安全、环境污染等情况都在一张大屏幕上实时呈现，一屏统览。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon9',
              src: require('@/assets/index_case_icon_3.png'),
              list: [
                {
                  id: 'case9-1',
                  title: '京东数科携手兴银基金推出“兴银策略智选混合型证券投资基金”',
                  conts: `10月22日，兴银基金与京东数字科技集团（简称京东数科）
                  携手推出“兴银策略智选混合型证券投资基金”（简称兴银策略智选）`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon10',
              src: require('@/assets/index_case_icon_1.png'),
              list: [
                {
                  id: 'case10-1',
                  title: '京东数科携手中国雄安集团打造雄安新区“块数据平台”',
                  conts: `2019年，京东数科的智能城市操作系统在雄安落地为块数据平台，它是雄安新区城市大数据资源中心的实际载体，
                  承担着汇聚新区全域数据，统筹新区数据管理，实现新区数据融合应用的重要任务。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon11',
              src: require('@/assets/index_case_icon_2.png'),
              list: [
                {
                  id: 'case11-1',
                  title: '京东数科助力南通市域治理现代化',
                  conts: `江苏省南通市基于京东数科“智能城市操作系统”建成市域治理现代化指挥中心。
                  该中心打破数据孤岛，汇聚南通市64个部门、10个县市区数十亿量级的数据。
                  全南通市交通运行、公共安全、环境污染等情况都在一张大屏幕上实时呈现，一屏统览。`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
            {
              id: 'caseIcon12',
              src: require('@/assets/index_case_icon_1.png'),
              list: [
                {
                  id: 'case12-1',
                  title: '京东数科携手兴银基金推出“兴银策略智选混合型证券投资基金”',
                  conts: `10月22日，兴银基金与京东数字科技集团（简称京东数科）
                  携手推出“兴银策略智选混合型证券投资基金”（简称兴银策略智选）`,
                  btnTxt: '了解详情',
                  href: 'https://www.jddglobal.com/',
                },
              ],
            },
          ],
        },
      ],

      newsDatas: [
        {
          id: 'newsData',
          title: '数科动态',
          rightBtnTxt: '更多新闻',
          rightHref: 'https://www.baidu.com/',
          lists: [
            {
              id: 'news1',
              href: 'https://www.jddglobal.com/',
              src: require('@/assets/trend-1.png'),
              publish: {
                puber: '京东数科',
                time: '2020-12-25',
              },
              title: '京东数科陈生强：助智能城市展翼，与实体产业共进',
              conts: `11月25日,JDDiscovery-2020京东全球科技探索者大会在京举办。在智能城市论坛上,
              京东数字科技集团CEO陈生强做了题为“助智能城市展翼 与实体产业共进”的主题发言。
              陈生强认为通过数字科技,可以推动社会、生产、生活向数字化转型,进而培育中国经济新的内生增长动力,
              提升实体产业的高质量发展,还可以助力国际竞争力持续增强。而时下智能城市则成为了一个能够服务于社会治理、
              实体产业和百姓民生最全面和最立体的场景,也成为了数字科技应用最具创新的表现形式。
              智能城市技术的演进也驱动着数字政府和数字经济的不断发展。目前,国内数字政府的建设已经开始进入到第四阶段,
              即“市域治理现代化服务”,也是当前京东数科在智能城市服务中非常核心的模块。而陈生强在论坛现场提出,
              光有数字政府服务还不够,智能城市建设之中,数字政府建设与数字经济建设不可分割。政府推动城市数字化、
              智能化的目标,不仅是追求安全和稳定,以及更优`,
              linkTxt: '查看详情',
            },
            {
              id: 'news2',
              href: 'https://www.jddglobal.com/',
              src: require('@/assets/trend-2.png'),
              publish: {
                puber: '京东',
                time: '2020-11-01',
              },
              title: '苏州开展数字人民币红包试点，京东提供场景+技术支持',
              conts: `12月5日，苏州市人民政府联合中国人民银行开展的数字人民币红包试点工作正式启动预约。
              该试点结合“双十二苏州购物节”，将面向所有符合条件的苏州市民发放总计2000万元的数字人民币红包，
              红包数量共计10万个，每个红包200元，并于12月11日20：00时正式生效。`,
              linkTxt: '查看详情',
            },
            {
              id: 'news3',
              href: 'https://www.jddglobal.com/',
              src: require('@/assets/trend-3.png'),
              publish: {
                puber: '京东数科News',
                time: '2019-06-25',
              },
              title: '京东数科T1金融云跻身中国金融云平台解决方案市场五强',
              conts: `智能城市技术的演进也驱动着数字政府和数字经济的不断发展。目前,国内数字政府的建设已经开始进入到第四阶段,
              即“市域治理现代化服务”,也是当前京东数科在智能城市服务中非常核心的模块。而陈生强在论坛现场提出,
              光有数字政府服务还不够,智能城市建设之中,数字政府建设与数字经济建设不可分割。政府推动城市数字化、
              智能化的目标,不仅是追求安全和稳定,以及更优`,
              linkTxt: '查看详情',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.$http.get('/sliders').then((res) => {
      this.slideSpeed = res.data.data.slideSpeed;
      this.slides = res.data.data.slides;
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    bannerEnter(event) {
      const { offsetX, offsetY } = event;
      this.coordinateX = offsetX;
      this.coordinateY = offsetY;
    },
    // eslint-disable-next-line
    bannerMove: throttle(function (event) {
      const { offsetX, offsetY } = event;
      this.disY = (this.coordinateY - offsetY) * 0.05;
      this.disX = (this.coordinateX - offsetX) * 0.05;
      this.coordinateX = offsetX;
      this.coordinateY = offsetY;
      document.onmouseleave = () => {
        this.disX = 0;
        this.disY = 0;
        this.coordinateX = 0;
        this.coordinateY = 0;
      };
    }, 250),
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
.home {
  position: relative;
  width: 100%;
  margin-top: 70px;

  .index {
    background: url('../../assets/index_bg.png') no-repeat -10px;

    .bar-box {
      height: 100%;
    }
    .ban-d {
      width: 918px;
      height: 970px;
      right: 0;
      top: -220px;
      transition: all 0.2s linear;
      background-size: contain;
      position: absolute;
      z-index: 1;
    }
    .ban-d:hover {
      filter: blur(20px);
    }
    .ban-smalld {
      position: absolute;
      top: 120px;
      left: -202px;
      width: 306px;
      height: 320px;
      transition: all 0.2s linear;
      background-size: contain;
      animation: banner-move 5s infinite alternate;
    }
    .ban-circle {
      position: absolute;
      top: 336px;
      left: 0;
      width: 100px;
      height: 100px;
      transition: all 0.2s linear;
      background-size: contain;
      animation: banner-move 5s infinite alternate;
    }
    @keyframes banner-move {
      0% {
        transform: translateZ(0);
      }
      33% {
        transform: translate3d(8%, -8%, 0);
      }
      66% {
        transform: translate3d(-8%, -8%, 0);
      }
      100% {
        transform: translateZ(0);
      }
    }

    // 轮播
    .banner-box {
      padding-top: 49px;

      .banner-nav {
        padding-top: 30px;
        width: 344px;
        text-align: left;

        .banner-play {
          width: 120px;
          height: 38px;
          padding-left: 27px;
          margin: 19px 0 52px;
          line-height: 36px;
          color: #2c68ff;
          font-size: 14px;
          border-radius: 100px;
          border: 1px solid #2c68ff;
          box-sizing: border-box;
          transition: all 0.1s ease;
          cursor: pointer;
          transform: none;

          .ln2-right {
            font-size: 14px;
          }
        }
        .banner-play:hover {
          color: #fff;
          background: #2c68ff;
        }

        ul {
          padding-left: 0;

          li {
            height: 48px;
            transition: all 0.2s ease;
          }
          li:hover {
            transform: translate(5px);

            h4 {
              color: #2c68ff;
            }
          }

          img {
            width: 32px;
            vertical-align: middle;
            padding-right: 8px;
          }

          h4 {
            color: #00041a;
            font-size: 14px;
            display: inline-block;
            vertical-align: middle;
            font-weight: normal;
          }
        }
      }

      .banner-main-box {
        width: 856px;
        height: 430px;
        box-shadow: 0 18px 35px 0 rgba(0, 34, 178, 0.4);
        overflow: hidden;
        z-index: 2;
      }
    }
  }
  //solution
  .solution-box {
    position: relative;
    padding-top: 90px;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('../../assets/solution_bg.jpg') no-repeat top;
    }
  }
  //product
  .product-box {
    .pro-box {
      height: 660px;
      box-sizing: border-box;
      position: relative;

      .left-box {
        width: 340px;
        height: 100%;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -360px;
          background: url('../../assets/prod_left_bg.jpg') no-repeat;
          height: 660px;
          width: 1220px;
        }

        .left-d-img {
          position: relative;
          padding: 70px 0;
        }

        .left-d-tit {
          position: relative;

          h2 {
            font-weight: normal;
            font-size: 40px;
            line-height: 50px;
          }

          p {
            width: 340px;
            padding-right: 30px;
            margin-top: 13px;
            line-height: 24px;
            font-size: 14px;
            color: rgba(0, 4, 26, 0.5);
            box-sizing: border-box;
          }
        }
      }

      .right-box {
        position: relative;
        width: 860px;
        padding: 40px 0 0 50px;
        height: 100%;
        background: #2c68ff;
        box-sizing: border-box;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background: #2c68ff url('../../assets/prod_right_bg.png') no-repeat;
          height: 660px;
          width: 1220px;
        }
      }
    }
  }
}
// #footer-main {
//   background: #010103!important;
// }
</style>
