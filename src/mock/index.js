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
        id: Random.id(),
        title: Random.ctitle(6, 14), // 随机生成长度为10-25的标题
        children: [
          {
            'id|+1': 0,
            subtitle: Random.ctitle(6, 10),
            'children|6': [
              {
                id: Random.id(),
                value: Random.ctitle(6, 10),
              },
            ],
          },
        ],
      }],
      'productionSubMenu|4': [{
        'id|+1': 0,
        title: Random.ctitle(6, 10),
      }],
      'productionMenu|10': [{

      }],
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
  const slides = []; // 用于存放文章数据的数组

  for (let i = 0; i < 4; i += 1) {
    const post = {
      title1: Random.ctitle(6, 14), // 随机生成长度为10-25的标题
      title2: Random.ctitle(10, 25),
      paragraphs: Random.csentence(),
      href: Random.url('https'),
      hrefTxt: '查看更多',
      src: `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com
      %2Fforum%2F201402%2F02%2F082719z1qbm28mff3ms5c0.jpg&refer=http%3A%2F%2Fa
      ttach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?
      sec=1611475328&t=a66fc9b89ca047e4fe74d1944e7dac50`,
    };

    slides.push(post);
  }
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
        id: Random.id(),
        title: Random.ctitle(4), // 随机生成长度为10-25的标题
        'children|3-7': [
          {
            id: Random.id(),
            subtitle: Random.ctitle(2, 7),
            'children|1-9': [
              {
                id: Random.id(),
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
            'id+1': `caseIcon${0}`,
            src: require('@/assets/index_case_icon_1.png'),
            list: [
              {
                'id+1': `case${0}`,
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
