import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '主页',
      href: '/',
    },
    {
      text: '产品服务',
      links: [
        {
          text: '灵工签约系统',
          href: getPermalink('/services'),
        },
        {
          text: '税优服务商',
          href: getPermalink('/pricing'),
        },
        {
          text: '智能结算系统',
          href: getPermalink('https://www.dianxingg.cn'),
        },
      ],
    },
    {
      text: '解决方案',
      links: [
        {
          text: '物流配送',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: '零售餐饮',
          href: getPermalink('/landing/sales'),
        },
        {
          text: '互联网科技',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: '金融保险',
          href: getPermalink('/landing/product'),
        },
        {
          text: '医疗健康',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: '建筑工程',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: '关于我们',
      links: [
        {
          text: '关于点薪',
          href: getPermalink('/about'),
        },
        {
          text: '联系我们',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: '合作洽谈', href: 'https://work.weixin.qq.com/ca/cawcde6d443537b621', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '产品服务',
      links: [
        { text: '智能结算系统', href: 'https://www.dianxingg.cn/' },
        { text: '灵工签约系统', href: 'https://demo.dianxin.love/services' },
        { text: '税优服务商', href: 'https://demo.dianxin.love/pricing' },
      ],
    },
    {
      title: '平台',
      links: [
        { text: '开发人员 API', href: 'https://beta.dianxingg.cn/platform/v2/index.html' },
        { text: '开放平台', href: '#' },
      ],
    },
    {
      title: '解决方案',
      links: [
        { text: '物流配送', href: 'https://demo.dianxin.love/landing/lead-generation' },
        { text: '餐饮零售', href: 'https://demo.dianxin.love/landing/sales' },
        { text: '互联网科技', href: 'https://demo.dianxin.love/landing/click-through' },
        { text: '金融保险', href: 'https://demo.dianxin.love/landing/product' },
        { text: '医疗健康', href: 'https://demo.dianxin.love/landing/pre-launch' },
        { text: '建筑工程', href: 'https://demo.dianxin.love/landing/subscription' },
      ],
    },
    {
      title: '关于我们',
      links: [
        { text: '点薪介绍', href: 'https://demo.dianxin.love/about' },
        { text: '联系我们', href: 'https://demo.dianxin.love/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '系统公告', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://dx.imgix.net/logo32.png" alt="点薪logo" loading="lazy"></img>
     <a class="text-blue-600 underline dark:text-muted" href="https://beian.miit.gov.cn/"> 皖ICP备2024034333号-2</a> · 点薪云.
  `,
};
