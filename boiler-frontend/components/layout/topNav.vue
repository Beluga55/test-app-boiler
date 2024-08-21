<script setup lang="ts">
  import { Search } from "lucide-vue-next";
</script>

<template>
  <nav class="bg-overview-secondary-background w-full">
    <div class="px-6 py-[11px] flex items-center">
      <h1 class="text-sm font-bold text-overview-text-secondary flex-1">Pet Management System / Overview</h1>

      <div class="w-full bg-overview-border flex justify-center rounded-[5px] flex-1">
        <button class="flex items-center gap-2.5 text-[10px] text-overview-text-secondary py-2">
          <Search :size="12" />
          Pet Management System
        </button>
      </div>
    </div>
  </nav>
</template>