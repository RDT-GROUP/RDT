export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '介绍',
        children: [
          {
            title: '团队介绍',
            link: '/zh-cn/docs/团队介绍.html',
          },
          {
            title: '项目列表',
            link: '/zh-cn/docs/项目列表.html',
          },
          {
            title: '产品介绍',
            opened: true,
            children: [
              {
                title: '高效志愿',
                link: '/zh-cn/docs/高效志愿.html',
              },
              {
                title: '每日校招',
                link: '/zh-cn/docs/每日校招.html',
              },
              {
                title: '安全通讯模块',
                link: '/zh-cn/docs/安全模块.html',
              },
              {
                title: '高速基因比对设备',
                link: '/zh-cn/docs/基因比对.html',
              },
              {
                title: '超大规模应力实时检测系统',
                link: '/zh-cn/docs/应力系统.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '产品介绍',
  },
};
