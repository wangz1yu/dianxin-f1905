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
      title: '操作系统',
      links: [
        { text: '点薪·结算系统', href: 'https://www.dianxingg.cn/' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
