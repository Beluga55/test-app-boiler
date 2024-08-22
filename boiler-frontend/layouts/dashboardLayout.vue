<script setup>
import Sidebar from '~/components/layout/sideBar.vue'
import TopNav from '~/components/layout/topNav.vue'
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full">
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