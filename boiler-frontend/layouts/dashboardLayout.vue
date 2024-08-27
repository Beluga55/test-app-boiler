<script setup>
import Sidebar from '~/components/layout/sideBar.vue'
import TopNav from '~/components/layout/topNav.vue'
import { ref, onMounted } from 'vue'

const isSidebarOpen = ref(true);
const selectedRepository = ref('');
const isAndroid = ref(false);
const isIOS = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const detectOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    isAndroid.value = true;
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    isIOS.value = true;
  }
}

onMounted(() => {
  detectOS();
})
</script>

<template>
  <div v-if="isAndroid || isIOS">
    
  </div>
  <div v-else class="flex">
    <Sidebar :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" @update:selectedRepository="selectedRepository = $event" />
    <div :class="[isSidebarOpen ? 'w-[calc(100%-242px)]' : 'w-[calc(100%-55px)]']">
      <TopNav :selectedRepository="selectedRepository" />
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