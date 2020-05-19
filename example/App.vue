<template>
  <div id="app">
    <header class="lin-bar">
      <h1>lin-ui</h1>
    </header>
    <section class="lin-content">
      <component-list v-for="(item, index) in componentArr" :key="index" :data="item"/>
    </section>
    <transition name="page-move">
      <router-view />
    </transition>
  </div>
</template>

<script>
import ComponentList from './components/component-list.vue'
export default{
  name: 'app',
  components: {
    ComponentList
  },
  data() {
    return {
      componentArr: [
          {
            'name': 'Basic 基础组件',
            'shortcut': 'Basic',
            'items': [
              {
                path: '/button',
                text: 'Button'
              },
              {
                path: '/icon',
                text: 'Icon'
              },
              {
                path: '/tip',
                text: 'Tip'
              },
              {
                path: '/toolbar',
                text: 'Toolbar'
              },
              {
                path: '/tab-bar',
                text: 'TabBar'
              }
            ]
          },
          {
            'name': 'Form 表单组件',
            'shortcut': 'Form',
            'items': [
              {
                path: '/checkbox',
                text: 'Checkbox'
              },
              {
                path: '/checkbox-group',
                text: 'CheckboxGroup'
              },
              {
                path: '/checker',
                text: 'Checker'
              },
              {
                path: '/radio',
                text: 'Radio'
              },
              {
                path: '/input',
                text: 'Input'
              },
              {
                path: '/textarea',
                text: 'Textarea'
              },
              {
                path: '/select',
                text: 'Select'
              },
              {
                path: '/switch',
                text: 'Switch'
              },
              {
                path: '/rate',
                text: 'Rate'
              },
              {
                path: '/validator',
                text: 'Validator'
              },
              {
                path: '/upload',
                text: 'Upload'
              },
              {
                path: '/form',
                text: 'Form'
              }
            ]
          },
          {
            'name': 'Popup 弹窗组件',
            'shortcut': 'Popup',
            'items': [
              {
                path: '/popup',
                text: 'Popup'
              },
              {
                path: '/toast',
                text: 'Toast'
              },

              {
                path: '/picker',
                text: 'Picker'
              },
              {
                path: '/cascade-picker',
                text: 'CascadePicker'
              },
              {
                path: '/segment-picker',
                text: 'SegmentPicker'
              },
              {
                path: '/date-picker',
                text: 'DatePicker'
              },
              {
                path: '/time-picker',
                text: 'TimePicker'
              },
              {
                path: '/dialog',
                text: 'Dialog'
              },
              {
                path: '/action-sheet',
                text: 'ActionSheet'
              },
              {
                path: '/drawer',
                text: 'Drawer'
              },
              {
                path: '/image-preview',
                text: 'ImagePreview'
              }
            ]
          },
          {
            'name': 'Scroll 滚动组件',
            'shortcut': 'Scroll',
            'items': [
              {
                path: '/scroll',
                text: 'Scroll'
              },
              {
                path: '/slide',
                text: 'Slide'
              },
              {
                path: '/index-list',
                text: 'IndexList'
              },
              {
                path: '/swipe',
                text: 'Swipe'
              },
              {
                path: '/sticky',
                text: 'Sticky'
              },
              {
                path: '/scroll-nav-bar',
                text: 'ScrollNavBar'
              },
              {
                path: '/scroll-nav',
                text: 'ScrollNav'
              },
              {
                path: '/recycle-list',
                text: 'RecycleList'
              }
            ]
          }
        ]
    }
  }
}
</script>

<style scoped lang="less">
  #app {
    background: #ffffff;
    .lin-bar{
      z-index: 10;
      position: absolute;
      right: 0;
      left: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background-color: #edf0f4;
      box-shadow: 0 2px 1px #e9eaea;
      backface-visibility: hidden;
      h1{
        font-size: 18px;
        font-weight: 400;
      }
    }
    .lin-content{
      position: absolute;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: scroll;
      padding: 0 20px;
    }
    .page-move-enter, .page-move-leave-active{
      transform: translate(100%, 0)
    }
    .page-move-enter-active, .page-move-leave-active{
      transition: transform .3s
    }
  }
</style>