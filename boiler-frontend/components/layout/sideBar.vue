<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultImage from "@/assets/images/default-user-icon.jpg"
import { ChevronLeft, Pen, Share2, Globe, Settings, LogIn as Logout } from 'lucide-vue-next'
import ComboBox from '~/components/elements/ComboBox.vue'

const route = useRoute()

const navItems = ref([
  { name: 'Overview', path: '/overview', icon: 'icon-overview' },
  { name: 'Routes', path: '/routes', icon: Share2 },
  { name: 'Revisions', path: '/revisions', icon: 'icon-circle' },
  { name: 'Editor', path: '/editor', icon: Pen },
  { name: 'Domains', path: '/domains', icon: Globe },
])

/* ====== ACTIVE CLASS BASED ON ROUTES ====== */
const isActive = computed(() => (path) => route.path === path)

/* ====== RENDER ICON BASED ON TYPE ====== */
const renderIcon = (icon) => {
  if (typeof icon === 'string') {
    if (icon === 'icon-circle') {
      return h('span', { class: 'icon-circle text-[14px]' }, // ICOMOON return SVG to <span>
          Array.from({ length: 11 }, (_, i) => h('span', { class: `path${i + 1}` }))
      )
    }
    return h('span', { class: `${icon} text-[14px]` })
  }
  return h(icon, { size: 14 })
}
</script>

<template>
  <aside class="w-[180px] h-screen flex flex-col justify-between border-r-2 border-solid border-overview-border">
    <div>
      <header class="pb-2 border-b-2 border-solid border-overview-border">
        <div class="pt-3.5 px-3.5 flex items-center justify-between">
          <h1 class="text-base font-bold">BLDR.</h1>
          <ChevronLeft class="cursor-pointer" :size="18" />
        </div>
        <div class="credit-badge text-black mt-[7px] ml-3.5 rounded-[32px] text-center w-fit py-[3px] px-1.5">
          <p class="font-medium text-[10px]">100 credits remaining +</p>
        </div>
        <div class="flex items-center gap-[7px] mt-3 mx-2 px-[13px] py-[9px] bg-overview-repo-button border-2 border-solid border-overview-border rounded-[6px]">
          <ComboBox />
        </div>
      </header>
      <nav class="px-2 py-1">
        <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="py-2.5 px-[10.5px] flex items-center gap-2 text-xs font-medium w-full cursor-pointer no-underline text-inherit"
            :class="{ 'bg-overview-button rounded-md text-overview-primary': isActive(item.path) }"
        >
          <component :is="renderIcon(item.icon)" />
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
    <footer class="border-t-2 border-solid border-overview-border py-[9px] px-2 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img class="w-6 h-6" :src="DefaultImage" alt="Profile picture" />
        <p class="text-xs font-medium">ShaneWen</p>
      </div>
      <div class="flex items-center gap-3.5">
        <Settings :size="12" />
        <Logout :size="12" />
      </div>
    </footer>
  </aside>
</template>

<style lang="scss" scoped>
  @import url("@/assets/css/icon-font.css");

  .credit-badge {
    background: linear-gradient(49deg, var(--overview-primary) 0%, var(--overview-secondary) 100%);
  }
</style>

