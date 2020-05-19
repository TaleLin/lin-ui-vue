<template>
  <button 
    class="lin-button"
    :class="btnClass"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  import VueCompositionApi from '@vue/composition-api'
  Vue.use(VueCompositionApi)
  
  const COMPONENT_NAME = 'lin-button';

  interface Props {
    name: string,
    disabled: boolean,
    type: string,
    size: string,
    plain: string,
    shape: string
  }

  export default defineComponent({
    name: COMPONENT_NAME,
    props: {
      icon: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // default primary success danger warning info
      type: {
        type: String,
        default: 'default'
      },
      // mini,medium,large,long
      size: {
        type: String,
        default: 'large'
      },
      plain: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: 'circle'
      }
    },
    setup(props: Props, context: any) {
      const btnClass = computed(() => ({
        [`lin-button-${props.size}`]: true,
        [`lin-button-${props.type}`]: true,
        'lin-button-disabled': props.disabled,
        'lin-button-plain': props.plain
      }))

      return {
        btnClass
      }
    }
  })
</script>

<style lang="less">
  @import "../../common/styles/variable.less";
  // prefix class
  @button-prefix-cls: ~'@{lin-prefix}-button';
  .@{button-prefix-cls}{
    position: relative; 
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
    outline: none;
    cursor: pointer;
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background-color: @btn-primary-active-bgc;
      border: inherit;
      border-color: @btn-primary-active-bgc;
      border-radius: inherit;
      transform: translate(-50%, -50%);
      opacity: 0;
      content: ' ';
    }
    &-disabled {
      &::before {
        display: none;
      }
    }
    &:active::before{
      opacity: 0.1;
    }
    &-mini{
      width: @button-mini-min-width;
      height: @button-mini-height;
      line-height: @button-mini-line-height;
      font-size: @button-mini-font-size;
    }
    &-medium{
     width: @button-medium-min-width;
      height: @button-medium-height;
      line-height: @button-medium-line-height;
      font-size: @button-medium-font-size;
    }
    &-large{
      width: @button-large-min-width;
      height: @button-large-height;
      line-height: @button-large-line-height;
      font-size: @button-large-font-size;
    }
    &-long{
      width: @button-long-width;
      height: @button-long-height;
      line-height: @button-long-line-height;
      font-size: @button-long-font-size;
    }
    &-default{
      background: @btn-default-bgc;
      border: 1px solid @btn-default-border-color;
      color: @btn-default-color;
    }
    &-primary{
      background: @btn-primary-bgc;
      border: 1px solid @btn-primary-border-color;
      color: @btn-primary-color;
    }
    &-success{
      background: @btn-success-bgc;
      border: 1px solid @btn-success-bgc;
      color: @btn-success-color;
    }
    &-info{
      background: @btn-info-bgc;
      border: 1px solid @btn-info-bgc;
      color: @btn-info-color;
    }
    &-warning{
      background: @btn-warning-bgc;
      border: 1px solid @btn-warning-bgc;
      color: @btn-warning-color;
    }
    &-danger{
      background: @btn-danger-bgc;
      border: 1px solid @btn-danger-bgc;
      color: @btn-danger-color;
    }
    &-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &-plain {
      background-color: @button-plain-background-color;
      &.lin-button{
        &-default{
          color: @btn-default-color;
        }
        &-primary{
          color: @btn-primary-bgc;
        }
        &-success{
          color: @btn-success-bgc;
        }
        &-info{
          color: @btn-info-bgc;
        }
        &-warning{
          color: @btn-warning-bgc;
        }
        &-danger{
          color: @btn-danger-bgc;
        }
      }
    }
    &-shape{}
  }
</style>
