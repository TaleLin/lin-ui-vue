<template>
  <div>
    图片加载出错了
    <button @click="reload">重新加载</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['reload'],
  setup(props, { emit }) {
    const reload = () => {
      emit('reload')
    }
    return { reload }
  },
})
</script>
