<script setup>
import Sidebar from '~/components/layout/sideBar.vue'
import TopNav from '~/components/layout/topNav.vue'
import { ref } from 'vue'

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex">
    <Sidebar :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div :class="[isSidebarOpen ? 'w-[calc(100%-180px)]' : 'w-[calc(100%-55px)]']">
      <TopNav />
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  body {
    background: var(--overview-background);
    color: var(--overview-text);
  }
</style>