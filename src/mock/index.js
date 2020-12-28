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
