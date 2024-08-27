<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultImage from "~/assets/images/default-user-icon.jpg"
import { CaretLeftIcon, ReaderIcon, GlobeIcon, ShadowInnerIcon, Share1Icon, Pencil1Icon, GearIcon, EnterIcon } from '@radix-icons/vue'
import ComboBox from '~/components/ui/combobox/ComboBox.vue'

const props = defineProps({
  isSidebarOpen: Boolean
})

const emit = defineEmits(['toggle-sidebar'])

const route = useRoute();
const selectedRepository = ref('');

const navItems = [
  { name: 'Overview', path: '/overview', icon: ReaderIcon },
  { name: 'Routes', path: '/routes', icon: Share1Icon },
  { name: 'Revisions', path: '/revisions', icon: ShadowInnerIcon },
  { name: 'Editor', path: '/editor', icon: Pencil1Icon },
  { name: 'Domains', path: '/domains', icon: GlobeIcon },
]

const repositories = [
  { value: 'pets-management-system', label: 'pets-management-system' },
  { value: 'e-commerce-system', label: 'e-commerce-system' },
  { value: 'nuxt-tutorial', label: 'Nuxt-tutorial' },
  { value: 'remix-tutorial', label: 'Remix-tutorial' },
  { value: 'astro-tutorial', label: 'Astro-tutorial' },
]

const isActive = computed(() => (path) => route.path === path)

const toggleSidebar = () => emit('toggle-sidebar')
</script>

<template>
  <aside :class="['h-screen flex flex-col justify-between border-r-2 border-solid border-border', props.isSidebarOpen ? 'w-[242px]' : 'w-auto']">
    <div>
      <header class="pb-2 border-b-2 border-solid border-border bg-background-secondary">
        <div class="pt-3.5 px-3.5 flex items-center justify-between">
          <h1 v-if="props.isSidebarOpen" class="text-[26px] font-bold">BLDR.</h1>
          <CaretLeftIcon
              :class="['cursor-pointer', 'w-[24px] h-[24px]']"
              @click="toggleSidebar"
          />
        </div>
        <div v-if="props.isSidebarOpen" class="credit-badge text-black mt-[7px] ml-3.5 rounded-[32px] text-center w-fit py-[3px] px-3">
          <p class="font-medium text-[10px]">100 credits remaining +</p>
        </div>
        <div v-if="props.isSidebarOpen" class="flex items-center gap-[7px] mt-[25px] mx-2 px-[13px] py-[9px] bg-button-secondary border-2 border-solid border-border rounded-[6px]">
          <ComboBox
              v-model="selectedRepository"
              :items="repositories"
              placeholder="Select Repository..."
              :command-style="{ background: '#353535' }"
          />
        </div>
      </header>
      <nav class="px-2 py-1">
        <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="py-2.5 px-[10.5px] flex items-center gap-2 text-xs font-medium w-full cursor-pointer no-underline text-inherit"
            :class="{ 'bg-button rounded-md text-primary-system': isActive(item.path) }"
        >
          <component :is="item.icon" :size="14" />
          <span class="text-[14px]" v-if="props.isSidebarOpen">{{ item.name }}</span>
        </NuxtLink>
      </nav>
    </div>
    <footer :class="['border-t-2 border-solid border-border py-[9px] px-2 flex items-center', props.isSidebarOpen ? 'justify-between' : 'justify-center']">
      <div class="flex items-center gap-2">
        <img class="w-6 h-6" :src="DefaultImage" alt="Profile picture" />
        <p v-if="props.isSidebarOpen" class="text-xs font-medium">ShaneWen</p>
      </div>
      <div v-if="props.isSidebarOpen" class="flex items-center gap-3.5">
        <GearIcon :size="12" />
        <EnterIcon :size="12" />
      </div>
    </footer>
  </aside>
</template>

<style lang="scss" scoped>
@import url("@/assets/css/icon-font.css");

.credit-badge {
  background: linear-gradient(49deg, #DCF928 0%, #EDFF7F 100%);
}
</style>