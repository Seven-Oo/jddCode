import { Message } from 'element-ui';

const Mock = require('mockjs');
// 获取mock对象
const { Random } = Mock; // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api'; // 定义默认域名，随便写
const code = 200; // 返回的状态码

// 导航菜单
const menuData = (req) => {
  // console.log(req); // 请求体，用于获取参数
  const solution = Mock.mock(
    {
      'solutionMenu|3': [{
        'id|+1': 999,
        title: Random.ctitle(6, 14), // 随机生成长度为10-25的标题
        children: [
          {
            'id|+1': 1,
            subtitle: Random.ctitle(6, 10),
            'children|10': [
              {
                'id|+1': 12,
                value: Random.ctitle(6, 10),
              },
            ],
          },
          {
            'id|+1': 5,
            subtitle: Random.ctitle(6, 10),
            'children|10': [
              {
                'id|+1': 100,
                value: Random.ctitle(6, 10),
              },
            ],
          },
        ],
      }],
      productionSubMenu: [
        {
          id: '1111',
          title: 'AI科技',
        },
        {
          id: '2222',
          title: '金融科技',
        },
        {
          id: '3333',
          title: '智能城市',
        },
        {
          id: '4444',
          title: '数字营销',
        },
      ],
      productionMenu: {
        lists: [
          [
            {
              id: 'ai11111',
              title: '智能机器人',
              children: [
                {
                  id: 'ai1-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'ai1-1-1',
                      value: '可穿戴AI仿生手',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-2',
                      value: '挂轨式巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-3',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-4',
                      value: '商服AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-5',
                      value: '机房巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-6',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-7',
                      value: '铁路巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-8',
                      value: '场景生态解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ai1-1-9',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: true,
                    },
                    {
                      id: 'ai1-1-10',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'lian22222',
              title: '区块链',
              children: [
                {
                  id: 'lian2-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'lian2-1-1',
                      value: '智臻链防伪追溯平台',
                      new: true,
                      hot: false,
                    },
                    {
                      id: 'lian2-1-2',
                      value: '智臻链数字存证平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lian2-1-3',
                      value: '氢舟数字资产产权服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lian2-1-4',
                      value: '智臻链JD Chain引擎',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'data33333',
              title: '大数据',
              children: [
                {
                  id: 'data3-1',
                  subtitle: '数据服务',
                  children: [
                    {
                      id: 'data3-1-1',
                      value: '稻田数据服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'data3-1-2',
                      value: '京东众智AI数据标注',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'data3-1-3',
                      value: '智能大数据可视化',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'data3-1-4',
                      value: '数据咨询',
                      new: false,
                      hot: false,
                    },
                  ],
                },
                {
                  id: 'data3-2',
                  subtitle: '数据中台',
                  children: [
                    {
                      id: 'data3-2-1',
                      value: '深海大数据平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'data3-2-2',
                      value: '机器学习平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'data3-2-3',
                      value: '图计算平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'data3-2-4',
                      value: '画像系统',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'farm44444',
              title: '农业',
              children: [
                {
                  id: 'farm4-1',
                  subtitle: '农业服务',
                  children: [
                    {
                      id: 'farm4-1-1',
                      value: '智能监测站',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'farm4-1-2',
                      value: '智能喷淋',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'farm4-1-3',
                      value: '智能饲喂器',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'farm4-1-4',
                      value: '智能投喂',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
          ],
          [
            {
              id: 'ren11111',
              title: '智能机器人',
              children: [
                {
                  id: 'ren1-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'ren1-1-1',
                      value: '可穿戴AI仿生手',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-2',
                      value: '挂轨式巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-3',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-4',
                      value: '商服AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-5',
                      value: '机房巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-6',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-7',
                      value: '铁路巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-8',
                      value: '场景生态解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'ren1-1-9',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: true,
                    },
                    {
                      id: 'ren1-1-10',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'qu22222',
              title: '区块链',
              children: [
                {
                  id: 'qu2-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'qu2-1-1',
                      value: '智臻链防伪追溯平台',
                      new: true,
                      hot: false,
                    },
                    {
                      id: 'qu2-1-2',
                      value: '智臻链数字存证平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qu2-1-3',
                      value: '氢舟数字资产产权服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qu2-1-4',
                      value: '智臻链JD Chain引擎',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'da33333',
              title: '大数据',
              children: [
                {
                  id: 'da3-1',
                  subtitle: '数据服务',
                  children: [
                    {
                      id: 'da3-1-1',
                      value: '稻田数据服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'da3-1-2',
                      value: '京东众智AI数据标注',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'da3-1-3',
                      value: '智能大数据可视化',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'da3-1-4',
                      value: '数据咨询',
                      new: false,
                      hot: false,
                    },
                  ],
                },
                {
                  id: 'da3-2',
                  subtitle: '数据中台',
                  children: [
                    {
                      id: 'da3-2-1',
                      value: '深海大数据平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'da3-2-2',
                      value: '机器学习平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'da3-2-3',
                      value: '图计算平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'da3-2-4',
                      value: '画像系统',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'nong44444',
              title: '农业',
              children: [
                {
                  id: 'nong4-1',
                  subtitle: '农业服务',
                  children: [
                    {
                      id: 'nong4-1-1',
                      value: '智能监测站',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'nong4-1-2',
                      value: '智能喷淋',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'nong4-1-3',
                      value: '智能饲喂器',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'nong4-1-4',
                      value: '智能投喂',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'lin55555',
              title: '林业',
              children: [
                {
                  id: 'lin5-1',
                  subtitle: '林业服务',
                  children: [
                    {
                      id: 'lin5-1-1',
                      value: '智能监测站',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lin5-1-2',
                      value: '喷淋打分法',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lin5-1-3',
                      value: '能昂饲喂器',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lin5-1-4',
                      value: '是搭嘎三道岗投喂',
                      new: false,
                      hot: false,
                    },
                  ],
                },
                {
                  id: 'lin5-2',
                  children: [
                    {
                      id: 'lin5-2-1',
                      value: 'k娄底市附近监测站',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lin5-2-2',
                      value: '喷淋灌溉',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lin5-2-3',
                      value: '蛋个饲喂器',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'lin5-2-4',
                      value: '投喂低功耗哈哈',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
          ],
          [
            {
              id: 'neng11111',
              title: '智能机器人',
              children: [
                {
                  id: 'neng1-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'neng1-1-1',
                      value: '可穿戴AI仿生手',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-2',
                      value: '挂轨式巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-3',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-4',
                      value: '商服AI机器人',
                      new: false,
                      hot: true,
                    },
                    {
                      id: 'neng1-1-5',
                      value: '机房巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-6',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-7',
                      value: '铁路巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-8',
                      value: '场景生态解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-9',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'neng1-1-10',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'kuai22222',
              title: '区块链',
              children: [
                {
                  id: 'kuai2-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'kuai2-1-1',
                      value: '智臻链防伪追溯平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'kuai2-1-2',
                      value: '智臻链数字存证平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'kuai2-1-3',
                      value: '氢舟数字资产产权服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'kuai2-1-4',
                      value: '智臻链JD Chain引擎',
                      new: true,
                      hot: false,
                    },
                  ],
                },
              ],
            },
          ],
          [
            {
              id: 'qi11111',
              title: '智能机器人',
              children: [
                {
                  id: 'qi1-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'qi1-1-1',
                      value: '可穿戴AI仿生手',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-2',
                      value: '挂轨式巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-3',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-4',
                      value: '商服AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-5',
                      value: '机房巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-6',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-7',
                      value: '铁路巡检AI机器人',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-8',
                      value: '场景生态解决方案',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'qi1-1-9',
                      value: '室内运送AI机器人',
                      new: false,
                      hot: true,
                    },
                    {
                      id: 'qi1-1-10',
                      value: '大零售解决方案',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'line22222',
              title: '区块链',
              children: [
                {
                  id: 'line2-1',
                  // subtitle: '',
                  children: [
                    {
                      id: 'line2-1-1',
                      value: '智臻链防伪追溯平台',
                      new: true,
                      hot: false,
                    },
                    {
                      id: 'line2-1-2',
                      value: '智臻链数字存证平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'line2-1-3',
                      value: '氢舟数字资产产权服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'line2-1-4',
                      value: '智臻链JD Chain引擎',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'shu33333',
              title: '大数据',
              children: [
                {
                  id: 'shu3-1',
                  subtitle: '数据服务',
                  children: [
                    {
                      id: 'shu3-1-1',
                      value: '稻田数据服务平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'shu3-1-2',
                      value: '京东众智AI数据标注',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'shu3-1-3',
                      value: '智能大数据可视化',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'shu3-1-4',
                      value: '数据咨询',
                      new: false,
                      hot: false,
                    },
                  ],
                },
                {
                  id: 'shu3-2',
                  subtitle: '数据中台',
                  children: [
                    {
                      id: 'shu3-2-1',
                      value: '深海大数据平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'shu3-2-2',
                      value: '机器学习平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'shu3-2-3',
                      value: '图计算平台',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'shu3-2-4',
                      value: '画像系统',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 'farmer44444',
              title: '农业',
              children: [
                {
                  id: 'farmer4-1',
                  subtitle: '农业服务',
                  children: [
                    {
                      id: 'farmer4-1-1',
                      value: '智能监测站',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'farmer4-1-2',
                      value: '智能喷淋',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'farmer4-1-3',
                      value: '智能饲喂器',
                      new: false,
                      hot: false,
                    },
                    {
                      id: 'farmer4-1-4',
                      value: '智能投喂',
                      new: false,
                      hot: false,
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
  );

  // 返回状态码和文章数据gets
  return {
    code,
    solution,
  };
};
// 轮播
const sliderData = (req) => {
  // console.log(req); // 请求体，用于获取参数
  // const slides = []; // 用于存放文章数据的数组

  // for (let i = 0; i < 4; i += 1) {
  //   const post = {
  //     title1: Random.ctitle(6, 14), // 随机生成长度为10-25的标题
  //     title2: Random.ctitle(10, 25),
  //     paragraphs: Random.csentence(),
  //     href: Random.url('https'),
  //     hrefTxt: '查看更多',
  //     src: `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com
  //     %2Fforum%2F201402%2F02%2F082719z1qbm28mff3ms5c0.jpg&refer=http%3A%2F%2Fa
  //     ttach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?
  //     sec=1611475328&t=a66fc9b89ca047e4fe74d1944e7dac50`,
  //   };

  //   slides.push(post);
  // }

  const slides = [
    {
      src: require('@/assets/carousel-3.png'),
      title1: '央媒省媒聚焦',
      title2: '南通市域治理现代化',
      paragraphs: `江苏省南通市基于京东数科“智能城市操作系统”
      建成市域治理现代化指挥中心`,
      hrefTxt: '查看更多',
      href: 'https://www.jddglobal.com/',
    },
    {
      src: require('@/assets/carousel-2.png'),
      title1: '助智能城市展翼',
      title2: '与实体产业共进',
      paragraphs: `京东全球科技探索者大会于25日在京举办。京东数字科技集团CEO陈生强做了题为“助智能城市展翼
      与实体产业共进”的主题发言`,
      hrefTxt: '去手机APP查看',
      href: 'https://www.jddglobal.com/',
    },
    {
      src: require('@/assets/carousel-1.png'),
      title1: 'T1金融云跻身中国金融云平台',
      title2: '解决方案市场五强',
      paragraphs: `IDC最新发布报告显示，京东数科T1金融云进入金融云平台解决方案市场前五名，
      在中国金融云（平台）解决方案市场上占据了9.5%的市场份额`,
      hrefTxt: '查看更多',
      href: 'https://www.jddglobal.com/',
    },
  ];
  const slidersData = {
    slideSpeed: Random.float(3000, 6000),
    slides,
  };

  // 返回状态码和文章数据gets
  return {
    code,
    slidersData,
  };
};
// 解决方案
const solutionData = (req) => {
  const solution = Mock.mock(
    // {
    //   'tabTilData|3': [{
    //     id: Random.id(),
    //     title: Random.ctitle(6, 14), // 随机生成长度为10-25的标题
    //   }],
    //   'solutionData|3': [{
    //     'lists|5-8': [
    //       {
    //         id: Random.id(),
    //         src: Random.image('132x132', '#02adea', 'Hello'),
    //         title: Random.ctitle(6, 16),
    //         intro: Random.ctitle(16, 30),
    //       },
    //     ],
    //   }],
    // },
    {
      tabTilData: [
        {
          id: 'tabTil1',
          title: '金融机构数字化解决方案',
        },
        {
          id: 'tabTil2',
          title: '商户与企业数字化解决方案',
        },
        {
          id: 'tabTil3',
          title: '政府及其他客户数字化解决方案',
        },
      ],
      solutionData1: [
        {
          lists: [
            {
              id: 'Scenario',
              src: require('@/assets/solution_financial-gov.png'),
              title: '场景生态解决方案',
              intro: '海量场景驱动业务创新，实现商业银行差异化竞争优势',
            },
            {
              id: 'retail',
              src: require('@/assets/solution_cashier.png'),
              title: '智能风控解决方案',
              intro: '为商业银行金融场景输出智能风控分析服务',
            },
            {
              id: 'corpratefin',
              src: require('@/assets/solution_customer-service.png'),
              title: '智能运营解决方案',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'finmarketb',
              src: require('@/assets/solution_data-middle.png'),
              title: '数据中台解决方案',
              intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
            },
            {
              id: 'risk',
              src: require('@/assets/solution_risk-management.png'),
              title: '提供多场景多工具',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'aitarcb',
              src: require('@/assets/solution_social-governance.png'),
              title: '一体化智能营销',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'Intelligentop',
              src: require('@/assets/solution_tourism.png'),
              title: '帮助银行打造统一',
              intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
            },
            {
              id: 'dataCenter',
              src: require('@/assets/solution_trading.png'),
              title: '数据共享服务中心',
              intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
            },
          ],
        },
      ],
      solutionData2: [
        {
          lists: [
            {
              id: 'corpratefin2',
              src: require('@/assets/solution_customer-service.png'),
              title: '智能运营解决方案',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'finmarketb2',
              src: require('@/assets/solution_data-middle.png'),
              title: '数据中台解决方案',
              intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
            },
            {
              id: 'risk2',
              src: require('@/assets/solution_risk-management.png'),
              title: '提供多场景多工具',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'aitarcb2',
              src: require('@/assets/solution_social-governance.png'),
              title: '一体化智能营销',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'Intelligentop2',
              src: require('@/assets/solution_tourism.png'),
              title: '帮助银行打造统一',
              intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
            },
          ],
        },
      ],
      solutionData3: [
        {
          lists: [
            {
              id: 'Scenario3',
              src: require('@/assets/solution_financial-gov.png'),
              title: '场景生态解决方案',
              intro: '海量场景驱动业务创新，实现商业银行差异化竞争优势',
            },
            {
              id: 'retail3',
              src: require('@/assets/solution_cashier.png'),
              title: '智能风控解决方案',
              intro: '为商业银行金融场景输出智能风控分析服务',
            },
            {
              id: 'corpratefin3',
              src: require('@/assets/solution_customer-service.png'),
              title: '智能运营解决方案',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
            {
              id: 'finmarketb3',
              src: require('@/assets/solution_data-middle.png'),
              title: '数据中台解决方案',
              intro: '帮助银行打造统一的数据共享服务中心，降低数据开发和使用成本',
            },
            {
              id: 'risk3',
              src: require('@/assets/solution_risk-management.png'),
              title: '提供多场景多工具',
              intro: '为广大机构提供多场景多工具多策略的一体化智能营销运营合作',
            },
          ],
        },
      ],
    },
  );
  // 返回状态码和文章数据gets
  return {
    code,
    solution,
  };
};
// 产品
const product = (req) => {
  const products = Mock.mock(
    {
      'productDatas|4': [{
        'id+1': `proD${0}`,
        title: Random.ctitle(4), // 随机生成长度为10-25的标题
        'children|3-7': [
          {
            'id+1': `proD_c${0}`,
            subtitle: Random.ctitle(2, 7),
            'children|1-9': [
              {
                'id+1': `proD_c_c${0}`,
                contTitle: Random.ctitle(6, 16),
                contBody: Random.ctitle(10, 46),
              },
            ],
          },
        ],
      }],
    },
  );
  // 返回状态码和文章数据gets
  return {
    code,
    products,
  };
};
// 案例
const caseData = (req) => {
  const cases = Mock.mock(
    {
      caseDatas: [{
        id: Random.id(),
        caseTitle: '客户案例',
        caseTitle_tips: '与合作伙伴一起，共创数字经济增长新方式',
        btnTxt: '查看更多',
        'caseImgs|12': [
          {
            'id+1': 111,
            src: require('@/assets/index_case_icon_1.png'),
            list: [
              {
                'id+1': 63,
                title: Random.ctitle(8, 36),
                conts: Random.cparagraph(),
                btnTxt: '了解详情',
                href: Random.url('http'),
              },
            ],
          },
        ],
      }],
    },
  );
  // 返回状态码和文章数据gets
  return {
    code,
    cases,
  };
};
// 新闻
const news = (req) => {
  const newsWraper = {
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
  // 返回状态码和文章数据gets
  return {
    code,
    newsWraper,
  };
};
// foot
const foot = (req) => {
  const footer = {
    footData: [
      {
        lists: [
          {
            id: 'nav1',
            title: '热门产品',
            list: [
              {
                id: 'navl1-1',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl1-2',
                value: '城市操作系统',
              },
              {
                id: 'navl1-3',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl1-4',
                value: '城市操作系统',
              },
            ],
          },
          {
            id: 'nav2',
            title: '解决方案',
            list: [
              {
                id: 'navl2-1',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl2-2',
                value: '城市操作系统',
              },
              {
                id: 'navl2-3',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl2-4',
                value: '城市操作系统',
              },
              {
                id: 'navl2-5',
                value: '场景生态解决方案',
              },
            ],
          },
          {
            id: 'nav3',
            title: '快速链接',
            list: [
              {
                id: 'navl3-1',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl3-2',
                value: '城市操作系统',
              },
              {
                id: 'navl3-3',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl3-4',
                value: '城市操作系统',
              },
            ],
          },
          {
            id: 'nav4',
            title: '更多信息',
            list: [
              {
                id: 'navl4-1',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl4-2',
                value: '城市操作系统',
              },
              {
                id: 'navl4-3',
                value: '可穿戴AI仿生手',
              },
              {
                id: 'navl4-4',
                value: '城市操作系统',
              },
            ],
          },
        ],
      },
    ],
  };
  // 返回状态码和文章数据gets
  return {
    code,
    footer,
  };
};

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/menuData`, 'get', menuData);
Mock.mock(`${domain}/slides`, 'get', sliderData);
Mock.mock(`${domain}/solution`, 'get', solutionData);
Mock.mock(`${domain}/product`, 'get', product);
Mock.mock(`${domain}/case`, 'get', caseData);
Mock.mock(`${domain}/news`, 'get', news);
Mock.mock(`${domain}/footData`, 'get', foot);

// 数科
const topIntroData = (req) => {
  const introData = [];
  const newsData = [];
  for (let i = 0; i < 3; i += 1) {
    introData.push(Mock.mock({
      id: '@increment',
      title: '@ctitle(18, 36)',
      imgSrc: require('@/assets/trend-2.png'),
      author: '@cname',
      pub_time: '@date',
      href: '@url("https")',
    }));
  }
  for (let i = 0; i < 40; i += 1) {
    newsData.push(Mock.mock({
      id: '@increment',
      title: '@ctitle(18, 36)',
      conts: '@cparagraph(20)',
      imgSrc: require('@/assets/dynamic_news_1.png'),
      author: '@cname',
      pub_time: '@date',
      href: '@url("https")',
    }));
  }
  return {
    code,
    introData,
    newsData,
  };
};
// 数科 — 文章
const dynamicNews = (req) => {
  const res = JSON.parse(req.body);
  if (!res.newsId) {
    // Message.error('错误!未传参!');
    return false;
  }
  const relateData = [];
  const tagList = [];
  for (let i = 0; i < 3; i += 1) {
    relateData.push(Mock.mock({
      id: '@increment',
      title: '@ctitle(18, 36)',
      author: '@cname',
      pub_time: '@date',
    }));
  }
  for (let i = 0; i < 5; i += 1) {
    tagList.push(Mock.mock({
      id: '@increment',
      tagName: '@ctitle(2, 8)',
    }));
  }
  const dynamicNewsData = {
    news: {
      id: Random.increment(),
      title: Random.ctitle(18, 36),
      author: Random.cname(),
      pub_time: Random.date(),
      detail: Random.cparagraph(20),
      tag: {
        list: tagList,
      },
      prev: {
        id: Random.increment(),
        title: Random.ctitle(18, 36),
        author: Random.cname(),
        pub_time: Random.date(),
      },
      next: {
        id: Random.increment(),
        title: Random.ctitle(18, 36),
        author: Random.cname(),
        pub_time: Random.date(),
      },
    },
    relate: {
      list: relateData,
    },
  };
  return {
    code,
    dynamicNewsData,
  };
};
Mock.mock(`${domain}/dynamic/topIntro`, 'get', topIntroData);
Mock.mock(`${domain}/dynamic/news`, 'post', dynamicNews);

// 关于我们
const aboutData = (req) => {
  const introDesc = [];
  for (let i = 0; i < 6; i += 1) {
    introDesc.push(Mock.mock({
      id: '@increment',
      conts: '@cparagraph(20)',
    }));
  }
  const introData = {
    id: 'introJD',
    title: '公司介绍',
    introList: introDesc,
  };

  const valueArr = [
    {
      id: 'value1',
      iconSrc: require('@/assets/about_icon_1.png'),
      title: '客户为先',
      conts: '始终是京东不断前行的动力源泉',
    },
    {
      id: 'value2',
      iconSrc: require('@/assets/about_icon_2.png'),
      title: '诚信为本',
      conts: '是京东的商业准绳',
    },
    {
      id: 'value3',
      iconSrc: require('@/assets/about_icon_3.png'),
      title: '团结合作',
      conts: '每位京东人团队精神的基本',
    },
    {
      id: 'value4',
      iconSrc: require('@/assets/about_icon_4.png'),
      title: '感恩之心',
      conts: '京东人处事情怀，会让人一生快乐',
    },
    {
      id: 'value5',
      iconSrc: require('@/assets/about_icon_5.png'),
      title: '拼搏进取',
      conts: '京东人身上最闪亮的精神',
    },
    {
      id: 'value6',
      iconSrc: require('@/assets/about_icon_6.png'),
      title: '敢于担当',
      conts: '每位京东人团队精神的基本',
    },
  ];
  const valueData = {
    id: 'valueJD',
    title: '价值观',
    desc: '数科人的精神准则，也是京东的价值观延续',
    valueList: valueArr,
  };

  const dutyArr1 = [
    {
      id: 'duty1',
      imgSrc: require('@/assets/about_img_2.png'),
      title: '数字普惠',
      conts: `京东数科数字农贷积极帮助农民减少 60% 利息负担, 
      让守法有信、经营良好的传统企业能享受便捷的企业金融服务。`,
    },
    {
      id: 'duty2',
      imgSrc: require('@/assets/about_img_3.png'),
      title: '数字扶贫',
      conts: `用数字科技去做对的事，数字就变得温情并有能量。
      消费即公益、购买即慈善，京东数字科技响应国家号召，助力精准脱贫。`,
    },
  ];
  const dutyArr2 = [
    {
      id: 'duty3',
      imgSrc: require('@/assets/about_img_4.png'),
      title: '数字安全',
      conts: `敬畏风险，守护您的安全。数科风控体系利用深度学习、
      图计算等人工智能技术实现无人工审核授信和放款，坏账率和资损水平低于行业平均值约 50% 以上。`,
    },
    {
      id: 'duty4',
      imgSrc: require('@/assets/about_img_2.png'),
      title: '人才培养',
      conts: `京东数科在未来三年：
      让85后核心管理者超过30%，让90后的经理和高级经理层员工要超过50%，并且增加主要来自内部晋升。`,
    },
  ];
  const dutyData = {
    id: 'dutyJD',
    title: '社会责任',
    rightTxt: '查看更多',
    rightHref: '',
    dutyList1: dutyArr1,
    dutyList2: dutyArr2,
  };

  const timeLineList = [{
    id: '2012',
    timestamp: '2012年',
    children: [
      {
        id: '2012-6-1',
        title: '2012年6月大事记',
        infoList: [
          {
            id: '2012-6-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
          {
            id: '2012-6-info2',
            info: `我们成功于深交所发行首个互联网消费金融ABS项目，
          在随后的5年时间里我们于上交所发行首单互联网保理ABS首次推出“ABS云平台”
          在银行间市场发行首单消费金融信托型ABN、首单互联网消费金融ABN债券通，
          首次将区块链技术应用于ABS产品，并与金融机构共同落地全球首个ABS联盟链。`,
          },
        ],
      },
      {
        id: '2012-7-11',
        title: '2012年7月大事记',
        infoList: [
          {
            id: '2012-7-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
      {
        id: '2012-9-1',
        title: '2012年9月大事记',
        infoList: [
          {
            id: '2012-9-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
      {
        id: '2012-10-1',
        title: '2012年10月大事记',
        infoList: [
          {
            id: '2012-10-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
    ],
  }, {
    id: '2013',
    timestamp: '2013年',
    children: [
      {
        id: '2013-1-1',
        title: '2013年1月大事记',
        infoList: [
          {
            id: '2013-1-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
      {
        id: '2013-11-1',
        title: '2013年11月大事记',
        infoList: [
          {
            id: '2013-11-info1',
            info: `在随后的5年时间里我们于上交所发行首单互联网保理ABS首次推出“ABS云平台”
            在银行间市场发行首单消费金融信托型ABN、首单互联网消费金融ABN债券通`,
          },
        ],
      },
    ],
  }, {
    id: '2014',
    timestamp: '2014年',
    children: [
      {
        id: '2014-8-1',
        title: '2014年8月大事记',
        infoList: [
          {
            id: '2014-8-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
          {
            id: '2014-8-info2',
            info: `我们成功于深交所发行首个互联网消费金融ABS项目，
          在随后的5年时间里我们于上交所发行首单互联网保理ABS首次推出“ABS云平台”
          在银行间市场发行首单消费金融信托型ABN、首单互联网消费金融ABN债券通，
          首次将区块链技术应用于ABS产品，并与金融机构共同落地全球首个ABS联盟链。`,
          },
        ],
      },
    ],
  }, {
    id: '2015',
    timestamp: '2015年',
    children: [
      {
        id: '2015-6-1',
        title: '2015年6月大事记',
        infoList: [
          {
            id: '2015-6-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
          {
            id: '2015-6-info2',
            info: `我们成功于深交所发行首个互联网消费金融ABS项目，
          在随后的5年时间里我们于上交所发行首单互联网保理ABS首次推出“ABS云平台”
          在银行间市场发行首单消费金融信托型ABN、首单互联网消费金融ABN债券通，
          首次将区块链技术应用于ABS产品，并与金融机构共同落地全球首个ABS联盟链。`,
          },
        ],
      },
      {
        id: '2015-10-1',
        title: '2015年10月大事记',
        infoList: [
          {
            id: '2015-10-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
    ],
  }, {
    id: '2016',
    timestamp: '2016年',
    children: [
      {
        id: '2016-6-1',
        title: '2016年6月大事记',
        infoList: [
          {
            id: '2016-6-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
          {
            id: '2016-6-info2',
            info: `我们成功于深交所发行首个互联网消费金融ABS项目，
          在随后的5年时间里我们于上交所发行首单互联网保理ABS首次推出“ABS云平台”
          在银行间市场发行首单消费金融信托型ABN、首单互联网消费金融ABN债券通，
          首次将区块链技术应用于ABS产品，并与金融机构共同落地全球首个ABS联盟链。`,
          },
        ],
      },
      {
        id: '2016-10-1',
        title: '2016年10月大事记',
        infoList: [
          {
            id: '2016-10-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
    ],
  }, {
    id: '2019',
    timestamp: '2019年',
    children: [
      {
        id: '2019-6-1',
        title: '2019年6月大事记',
        infoList: [
          {
            id: '2019-6-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
          {
            id: '2019-6-info2',
            info: `我们成功于深交所发行首个互联网消费金融ABS项目，
          在随后的5年时间里我们于上交所发行首单互联网保理ABS首次推出“ABS云平台”
          在银行间市场发行首单消费金融信托型ABN、首单互联网消费金融ABN债券通，
          首次将区块链技术应用于ABS产品，并与金融机构共同落地全球首个ABS联盟链。`,
          },
        ],
      },
      {
        id: '2019-10-1',
        title: '2019年10月大事记',
        infoList: [
          {
            id: '2019-10-info1',
            info: `我们在行业内首次提出金融科技定位，致力于为金融机构提供科技服务，
          推动中国互联网金融行业整体向金融科技升级。`,
          },
        ],
      },
    ],
  }];
  const eventData = {
    id: 'eventJD',
    title: '数科大事记',
    eventList: timeLineList,
  };

  const envArr = [
    {
      id: 'env1',
      imgSrc: require('@/assets/about_env_1.png'),
      title: '总部大楼',
      conts: `位于北京市大兴区亦庄经济开发区，总占地4.5公顷，
      总建筑面积28.4万平米，由3栋80-100米高楼构成位于北京市大兴区亦庄经济开发区，总占地4.5公顷，
      总建筑面积28.4万平米，由3栋80-100米高楼构成`,
    },
    {
      id: 'env2',
      imgSrc: require('@/assets/about_env_4.png'),
      title: '健身房',
      conts: `齐全的健身器材，想练哪里就练哪里，操课丰富，
      瑜伽、搏击操、爵士舞等多种选择`,
    },
    {
      id: 'env3',
      imgSrc: require('@/assets/about_env_4.png'),
      title: '健身房',
      conts: `齐全的健身器材，想练哪里就练哪里，操课丰富，
      瑜伽、搏击操、爵士舞等多种选择`,
    },
    {
      id: 'env4',
      imgSrc: require('@/assets/about_env_1.png'),
      title: '总部大楼',
      conts: `位于北京市大兴区亦庄经济开发区，总占地4.5公顷，
      总建筑面积28.4万平米，由3栋80-100米高楼构成位于北京市大兴区亦庄经济开发区，总占地4.5公顷，
      总建筑面积28.4万平米，由3栋80-100米高楼构成`,
    },
  ];
  const envData = {
    id: 'envJD',
    title: '公司环境',
    envList: envArr,
  };

  return {
    code,
    introData,
    valueData,
    dutyData,
    eventData,
    envData,
  };
};
Mock.mock(`${domain}/about/intro`, 'get', aboutData);

const clientCase = (req) => {
  const caseShowImg = [
    {
      id: 1,
      src: require('@/assets/case-pc-ico_1.png'),
    },
    {
      id: 2,
      src: require('@/assets/case-pc-ico_2.png'),
    },
    {
      id: 3,
      src: require('@/assets/case-pc-ico_3.png'),
    },
    {
      id: 4,
      src: require('@/assets/case-pc-ico_1.png'),
    },
    {
      id: 5,
      src: require('@/assets/case-pc-ico_2.png'),
    },
  ];
  const caseShowData = [];
  const listData = [];
  for (let i = 0; i < 6; i += 1) {
    caseShowData.push(Mock.mock({
      id: '@increment',
      title: '@ctitle(4, 8)',
      amount: '@natural(40, 1500)',
    }));
  }
  for (let i = 0; i < 26; i += 1) {
    listData.push(Mock.mock({
      id: '@increment',
      src: '@image()',
      title: '@ctitle(4, 8)',
      conts: '@cparagraph(20)',
      moreTxt: '了解详情',
    }));
  }

  const finalyData = {
    imgData: {
      id: 'case_imgData',
      title: '与合作伙伴一起，共创数字经济增长新方式',
      caseShowImg,
      caseShowData,
    },
    listData,
  };
  return {
    code,
    finalyData,
  };
};
Mock.mock(`${domain}/clientCase`, 'get', clientCase);

const caseDetails = (req) => {
  const res = JSON.parse(req.body);
  // if (!res.caseId) {
  //   // Message.error('错误!未传参!');
  //   return false;
  // }
  const caseDetailsData = {
    // bg: require('@/assets/case_detail_bg.png'),
    bg: require('@/assets/case_detail_bg_2.jpg'),
    title: Random.ctitle(10, 16),
    briefs: Random.csentence(30, 52),
    navList: [
      {
        id: Random.increment(),
        title: Random.ctitle(4),
        detail: Random.cparagraph(20),
        anchor: 'tab1',
      },
      {
        id: Random.increment(),
        title: Random.ctitle(4),
        detail: Random.cparagraph(20),
        anchor: 'tab2',
      },
      {
        id: Random.increment(),
        title: Random.ctitle(5),
        detail: Random.cparagraph(20),
        anchor: 'tab3',
      },
      {
        id: Random.increment(),
        title: Random.ctitle(7),
        anchor: 'tab4',
        product: [
          {
            id: 'case-pro-1',
            src: require('@/assets/case-pro_1.png'),
            title: Random.ctitle(7, 16),
            conts: Random.csentence(26, 52),
            isArrow: true,
          },
          {
            id: 'case-pro-2',
            src: require('@/assets/case-pro_2.jpg'),
            title: Random.ctitle(7, 16),
            conts: Random.csentence(26, 52),
            isArrow: false,
          },
          {
            id: 'case-pro-3',
            src: require('@/assets/case-pro_1.png'),
            title: Random.ctitle(7, 16),
            conts: Random.csentence(26, 52),
            isArrow: true,
          },
          {
            id: 'case-pro-4',
            src: require('@/assets/case-pro_2.jpg'),
            title: Random.ctitle(7, 16),
            conts: Random.csentence(26, 52),
            isArrow: false,
          },
        ],
      },
    ],
  };
  return {
    code,
    caseDetailsData,
  };
};
Mock.mock(`${domain}/caseNews`, 'post', caseDetails);

// ai
const aiCenter = (req) => {
  const aiCore = {
    title: 'AI核心技术',
    tab: {
      list: [
        {
          id: 'machineStudy',
          tabValue: '机器学习',
          list: [
            {
              id: 'machine_1',
              icon: require('@/assets/ai_core_1_1.png'),
              title: '人机识别',
              title_en: 'Machine recognition',
              brief: `<p>在反消费信贷套现欺诈过程中，利用生物探针采集的移动端界面传感器数据，进行人机识别。
              通过获取数据并观察其统计特征及分布，结合业务规则和数据的分布建立深度学习模型。</p>
              <p>测试集双指标95%以上的前提下，在保证验证集（抽取实际样本验证）机器数据召回率 72%，
              人的数据误识率1%的情况下，能够基本稳定的拦截线上数据的日均千分之五（记录数）。</p>`,
            },
            {
              id: 'machine_2',
              icon: require('@/assets/ai_core_1_2.png'),
              title: '图神经网络',
              title_en: 'Figure neural network',
              brief: `<p>知识网络通常表示为异构图，其中不同的关系由不同类型的边表示。图神经网络可以浓缩图中的节点信息，
              生成节点嵌入，作为机器学习模型的输入。</p>
              <p>在营销反欺诈任务中，利用用户间多种关系（注册表/绑卡/实名认证等）生成异构图，达到甚至超越有监督学习模型的性能。</p>`,
            },
            {
              id: 'machine_3',
              icon: require('@/assets/ai_core_1_3.png'),
              title: '深度学习',
              title_en: 'Deep learning',
              brief: `<p>这项创新深度学习优化算法，从根本上解决了深度学习算法的计算速度瓶颈问题，提出了新颖的深度学习分布式优化理论和算法
              ——特征回放算法（Features Replay），通过实验验证了无性能损失的前提下，特征回放算法比传统反向传播算法（Back Propagation）在速率上节省至少34.4%，
              应用该技术成果将加速深度学习模型的训练计算，提升效能。</p>`,
            },
            {
              id: 'machine_4',
              icon: require('@/assets/ai_core_1_4.png'),
              title: '联邦学习',
              title_en: 'Federal learning',
              brief: `<p>目前，所有联邦学习都是同步的。因为不同服务器的计算能力、计算速度有差别，所以同步的联邦学习不能解决多方的联合建模问题，进而需要异步计算。</p>
              <p>将联邦学习技术应用于风控联合建模，解决隐私数据安全共享问题，改变数据孤岛条件下无法实现的业务效果。
              目前已经整合区块链、容器技术、联邦学习构建行业级的联合建模解决方案。</p>`,
            },
          ],
        },
        {
          id: 'computerVision',
          tabValue: '计算机视觉',
          list: [
            {
              id: 'vision_1',
              icon: require('@/assets/ai_core_2_1.png'),
              title: '人脸识别',
              title_en: 'Face recognition',
              brief: `<p>在反消费信贷套现欺诈过程中，利用生物探针采集的移动端界面传感器数据，进行人机识别。
              通过获取数据并观察其统计特征及分布，结合业务规则和数据的分布建立深度学习模型。</p>
              <p>测试集双指标95%以上的前提下，在保证验证集（抽取实际样本验证）机器数据召回率 72%，
              人的数据误识率1%的情况下，能够基本稳定的拦截线上数据的日均千分之五（记录数）。</p>`,
            },
            {
              id: 'vision_2',
              icon: require('@/assets/ai_core_2_2.png'),
              title: '人脸防伪',
              title_en: 'Face anti-counterfeiting',
              brief: `<p>知识网络通常表示为异构图，其中不同的关系由不同类型的边表示。图神经网络可以浓缩图中的节点信息，
              生成节点嵌入，作为机器学习模型的输入。</p>
              <p>在营销反欺诈任务中，利用用户间多种关系（注册表/绑卡/实名认证等）生成异构图，达到甚至超越有监督学习模型的性能。</p>`,
            },
            {
              id: 'vision_3',
              icon: require('@/assets/ai_core_2_1.png'),
              title: '文字识别',
              title_en: 'OCR',
              brief: `<p>这项创新深度学习优化算法，从根本上解决了深度学习算法的计算速度瓶颈问题，提出了新颖的深度学习分布式优化理论和算法
              ——特征回放算法（Features Replay），通过实验验证了无性能损失的前提下，特征回放算法比传统反向传播算法（Back Propagation）在速率上节省至少34.4%，
              应用该技术成果将加速深度学习模型的训练计算，提升效能。</p>`,
            },
          ],
        },
        {
          id: 'voiceStudy',
          tabValue: '语音学习',
          list: [
            {
              id: 'voice_1',
              icon: require('@/assets/ai_core_3_1.png'),
              title: '语音合成',
              title_en: 'Speech synthesis',
              brief: `<p>在反消费信贷套现欺诈过程中，利用生物探针采集的移动端界面传感器数据，进行人机识别。
              通过获取数据并观察其统计特征及分布，结合业务规则和数据的分布建立深度学习模型。</p>
              <p>测试集双指标95%以上的前提下，在保证验证集（抽取实际样本验证）机器数据召回率 72%，
              人的数据误识率1%的情况下，能够基本稳定的拦截线上数据的日均千分之五（记录数）。</p>`,
            },
            {
              id: 'voice_2',
              icon: require('@/assets/ai_core_3_2.png'),
              title: '文本合成',
              title_en: 'Text synthesis',
              brief: `<p>知识网络通常表示为异构图，其中不同的关系由不同类型的边表示。图神经网络可以浓缩图中的节点信息，
              生成节点嵌入，作为机器学习模型的输入。</p>
              <p>在营销反欺诈任务中，利用用户间多种关系（注册表/绑卡/实名认证等）生成异构图，达到甚至超越有监督学习模型的性能。</p>`,
            },
            {
              id: 'voice_3',
              icon: require('@/assets/ai_core_3_3.png'),
              title: '语音识别',
              title_en: 'Speech recognition',
              brief: `<p>这项创新深度学习优化算法，从根本上解决了深度学习算法的计算速度瓶颈问题，提出了新颖的深度学习分布式优化理论和算法
              ——特征回放算法（Features Replay），通过实验验证了无性能损失的前提下，特征回放算法比传统反向传播算法（Back Propagation）在速率上节省至少34.4%，
              应用该技术成果将加速深度学习模型的训练计算，提升效能。</p>`,
            },
            {
              id: 'voice_4',
              icon: require('@/assets/ai_core_3_4.png'),
              title: '知识图谱',
              title_en: 'Knowledge graph',
              brief: `<p>目前，所有联邦学习都是同步的。因为不同服务器的计算能力、计算速度有差别，所以同步的联邦学习不能解决多方的联合建模问题，进而需要异步计算。</p>
              <p>将联邦学习技术应用于风控联合建模，解决隐私数据安全共享问题，改变数据孤岛条件下无法实现的业务效果。
              目前已经整合区块链、容器技术、联邦学习构建行业级的联合建模解决方案。</p>`,
            },
          ],
        },
      ],
      rightTxt: '查看更多',
    },
  };
  const aiIndustry = Mock.mock({
    title: 'AI产业应用',
    tab: {
      list: [
        {
          id: Random.increment(),
          tabValue: 'AI机器人',
          'list|1-8': [
            {
              id: Random.increment(),
              src: require('@/assets/ai_indu_img_1_1.png'),
              title: Random.ctitle(7, 16),
              conts: Random.csentence(26, 52),
              isArrow: false,
            },
          ],
        },
        {
          id: Random.increment(),
          tabValue: '金融科技',
          'list|1-8': [
            {
              id: Random.increment(),
              src: require('@/assets/ai_indu_img_1_2.png'),
              title: Random.ctitle(7, 16),
              conts: Random.csentence(26, 52),
              isArrow: false,
            },
          ],
        },
        {
          id: Random.increment(),
          tabValue: '智能城市',
          'list|1-8': [
            {
              id: Random.increment(),
              src: require('@/assets/ai_indu_img_1_3.png'),
              title: Random.ctitle(7, 16),
              conts: Random.csentence(26, 52),
              isArrow: false,
            },
          ],
        },
        {
          id: Random.increment(),
          tabValue: '农业',
          'list|1-8': [
            {
              id: Random.increment(),
              src: require('@/assets/ai_indu_img_1_1.png'),
              title: Random.ctitle(7, 16),
              conts: Random.csentence(26, 52),
              isArrow: false,
            },
          ],
        },
      ],
    },
  });
  const aiPaper = Mock.mock({
    title: '科技论文',
    topData: [
      {
        id: Random.guid(),
        title: 'AI实验室',
        bg: require('@/assets/ai_paper_bg_1.png'),
        'list|1-8': [
          {
            id: Random.increment(),
            title: Random.title(),
          },
        ],
      },
      {
        id: Random.guid(),
        title: '京东智能城市研究院',
        bg: require('@/assets/ai_paper_bg_2.png'),
        'list|1-8': [
          {
            id: Random.increment(),
            title: Random.title(),
          },
        ],
      },
      {
        id: Random.guid(),
        title: '据智能实验室',
        bg: require('@/assets/ai_paper_bg_3.png'),
        'list|1-8': [
          {
            id: Random.increment(),
            title: Random.title(),
          },
        ],
      },
    ],
    bottomData: {
      id: 'paper_bottom',
      title: Random.ctitle(6, 19),
      list: [
        {
          id: 'paper_b_1',
          title: Random.ctitle(),
          conts: Random.csentence(26, 52),
        },
        {
          id: 'paper_b_2',
          title: Random.ctitle(),
          conts: Random.csentence(26, 52),
        },
        {
          id: 'paper_b_3',
          title: Random.ctitle(),
          conts: Random.csentence(26, 52),
        },
        {
          id: 'paper_b_4',
          title: Random.ctitle(),
          conts: Random.csentence(26, 52),
        },
        {
          id: 'paper_b_5',
          title: Random.ctitle(),
          conts: Random.csentence(26, 52),
        },
      ],
    },
  });
  const aiLab = Mock.mock({
    title: '科技研发机构',
    list: [
      {
        id: 'lab_1',
        icon: require('@/assets/ai_lab_icon_1.png'),
        hoverIcon: require('@/assets/ai_lab_icon_1_f.png'),
        title: '数据智能实验室',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_2',
        icon: require('@/assets/ai_lab_icon_2.png'),
        hoverIcon: require('@/assets/ai_lab_icon_2_f.png'),
        title: '智能风控实验室',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_3',
        icon: require('@/assets/ai_lab_icon_3.png'),
        hoverIcon: require('@/assets/ai_lab_icon_3_f.png'),
        title: '区块链实验室',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_4',
        icon: require('@/assets/ai_lab_icon_4.png'),
        hoverIcon: require('@/assets/ai_lab_icon_4_f.png'),
        title: '数字农牧院士研究院',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_5',
        icon: require('@/assets/ai_lab_icon_5.png'),
        hoverIcon: require('@/assets/ai_lab_icon_5_f.png'),
        title: '智能城市研究院',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_6',
        icon: require('@/assets/ai_lab_icon_6.png'),
        hoverIcon: require('@/assets/ai_lab_icon_6_f.png'),
        title: 'AI实验室',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_7',
        icon: require('@/assets/ai_lab_icon_7.png'),
        hoverIcon: require('@/assets/ai_lab_icon_7_f.png'),
        title: '资管科技创新实验室',
        brief: Random.csentence(26, 89),
      },
      {
        id: 'lab_8',
        icon: require('@/assets/ai_lab_icon_8.png'),
        hoverIcon: require('@/assets/ai_lab_icon_8_f.png'),
        title: 'AI机器人实验室',
        brief: Random.csentence(26, 89),
      },
    ],
  });

  const aiData = {
    title: '产业AI中心',
    infoTxt: `<p style="margin-bottom: 15px;">产业AI中心集成了京东数科集团旗下AI实验室、数据智能实验室、智能风控实验室、
    智能城市研究院、数字农牧研究院、资管科技实验室、区块链实验室、AI机器人实验室等多个科技研发机构的AI研发力量，
    聚集了来自全球各领域的超百位顶尖人工智能技术专家。</p>
    <p style="margin-bottom: 15px;">致力于将机器学习、深度学习、知识图谱、计算机视觉、
    语音与自然语言处理等前沿AI技术实现产业级应用，服务于工业、农业、大宗商品流通、金融、
    资管、零售、商旅出行、生活服务、广告营销、城市公共服务等行业，推动产业数字化浪潮的快速的前进。</p>`,
    aiCore,
    aiIndustry,
    aiLab,
    aiPaper,
  };
  return {
    code,
    aiData,
  };
};
Mock.mock(`${domain}/aiCenter`, 'get', aiCenter);
