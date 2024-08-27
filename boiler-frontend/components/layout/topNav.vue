<script lang="ts" setup>
import {MagnifyingGlassIcon} from "@radix-icons/vue";
import {ref} from "vue";

const staging = [
  {value: "Staging v0.1", label: "Staging v0.1"},
  {value: "Staging v0.2", label: "Staging v0.2"},
  {value: "Staging v0.3", label: "Staging v0.3"},
  {value: "Staging v0.4", label: "Staging v0.4"},
  {value: "Staging v0.5", label: "Staging v0.5"},
]

const selectedStaging = ref('');
const route = useRoute();
</script>

<template>
  <nav class="bg-background-secondary w-full border-border border-b-2">
    <div class="px-6 py-[10px] flex items-center gap-6">
      <h1 class="text-[14px] font-bold text-text-secondary flex-1">Pet Management System / Overview</h1>

      <div
          class="max-w-[450px] bg-button-secondary flex justify-center rounded-[5px] flex-1 border-2 border-solid border-border">
        <button class="flex items-center gap-2.5 text-[14px] text-text-secondary py-2">
          <MagnifyingGlassIcon :size="14" class="rotate-90"/>
          Pet Management System
        </button>
      </div>

      <ComboBox
          v-if="route.path === '/revisions'"
          v-model="selectedStaging"
          :command-style="{ background: '#353535' }"
          :items="staging"
          button-class="w-[180px] border-2 border-solid border-border rounded-[4px] px-3 py-2 font-medium"
          placeholder="Select Staging..."
      />
    </div>
  </nav>
</template>