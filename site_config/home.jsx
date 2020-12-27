import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '睿鼎克工作室',
      briefIntroduction: '拥有数据分析、通信安全、视频智能等多种解决方案，我们只有5岁，期待和您一同发现产品之美',
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
      title: '团队介绍',
      desc: '团队分为开发，产品，测试3个主要团队',
      img: '/img/总办.png',
    },
    features: {
      title: '团队优势',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '年轻化',
          content: '开发侧正高级工程师7人，助理工程师1人，平均年龄33岁',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '专业性',
          content: '开发人员均来自腾讯，阿里等大厂',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '有保障',
          content: '和上海柔行，西安前观测控形成良好合作关系',
        },
      ],
    },
    start: {
      title: '项目介绍',
      desc: '',
      img: '/img/项目列表.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/项目列表.html',
      },
    },
    users: {
      title: '产品列表',
      desc: <span>产品列表</span>,
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
      img: '/img/项目列表.png',
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
