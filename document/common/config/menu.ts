const menuConfig = {
  "en-US": {
    essentials: {
      name: 'Essentials',
      angle: "01",
      subList: {
        introduction: "Introduction",
        quickStart: "QuickStart",
        changelog: "Changelog",
        theme: 'Custom Theme',
        internationalization : 'Internationalization'
      }
    },
    components: {
      name: "Basic",
      angle: "02",
      subList: {
        button: "Button",
        icon: "Icon"
      }
    },
  },
  "zh-CN": {
    essentials: {
      name: '开发指南',
      angle: "01",
      subList: {
        introduction: "介绍",
        quickStart: "快速上手",
        changelog: "更新日志",
        theme: '定制主题',
        internationalization : '国际化'
      }
    },
    components: {
      name: "基础组件",
      angle: "02",
      subList: {
        button: '按钮 Button',
        icon: '图标 Icon'
      }
    },
  }
}

export default menuConfig;