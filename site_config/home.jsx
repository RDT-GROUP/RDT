import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '睿鼎克',
      briefIntroduction: '睿鼎克简单介绍',
      buttons: [
        {
          text: '团队介绍',
          link: '/zh-cn/docs/团队介绍.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/RDT-GROUP',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '产品介绍',
      desc: '~~',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '年轻化',
          content: '中，正高级工程师1人，工程师6人，助理工程师1人，开发人员平均年龄33岁',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '专业性',
          content: '来自腾讯，阿里等大厂',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '用户',
      desc: <span>前沿测控</span>,
      list: [
        '/img/users_alibaba.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'brandName',
      briefIntroduction: 'some description of product',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/demo1.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
};
