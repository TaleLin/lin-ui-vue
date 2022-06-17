<template>
  <div class="app-sidebar">
    <div v-for="(menu, key) in menuData" :key="key" class="sidebar-group">
      <div class="sidebar-heading" :class="{ active: activeParent === key }">
        {{ key }}
      </div>
      <ul>
        <li
          v-for="item in menu"
          :key="item.title"
          :class="{ active: currentPath === item.routePath }"
        >
          <router-link :to="item.routePath">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MenuData from '../menu.json'

export default defineComponent({
  name: 'AppSidebar',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const currentPath = ref('')
    const activeParent = ref('')

    const clickMenu = () => {}

    watch(
      () => route.path,
      (value) => {
        currentPath.value = value
        activeParent.value = router.currentRoute.value.meta?.parent as string
      },
      { immediate: true }
    )

    return {
      menuData: ref(MenuData),
      currentPath,
      activeParent,
    }
  },
})
</script>
<style lang="scss">
.app-sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 240px;
  border-right: 1px solid #eaecef;
  z-index: 10;
  background: #fff;
  padding-top: 20px;
  color: #45526b;
  .sidebar-group {
    padding-left: 5px;
    .sidebar-heading {
      color: #45526b;
      transition: color 0.15s ease;
      font-size: 16px;
      padding: 10px 25px;
      width: 100%;
      box-sizing: border-box;
      margin: 0;

      &.active {
        background: #e4f1ff;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        color: #3683d6;
      }

      &:hover {
        color: #3683d6;
      }
    }
    ul {
      list-style: none;
      padding-left: 45px;
      li {
        cursor: pointer;
        font-size: 13px;
        margin: 10px 0;
        &.active a {
          color: #3683d6;
        }
        a {
          color: #45526b;
          text-decoration: none;
          display: block;
          &:hover {
            color: #3683d6;
          }
        }
      }
    }
  }
}
</style>
