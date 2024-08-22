<script setup lang="ts">
  import { MagnifyingGlassIcon } from "@radix-icons/vue";
</script>

<template>
  <nav class="bg-background-secondary w-full border-border border-b-2">
    <div class="px-6 py-[11px] flex items-center">
      <h1 class="text-sm font-bold text-text-secondary flex-1">Pet Management System / Overview</h1>

      <div class="w-full bg-border flex justify-center rounded-[5px] flex-1">
        <button class="flex items-center gap-2.5 text-[10px] text-text-secondary py-2">
          <MagnifyingGlassIcon :size="12" class="rotate-90" />
          Pet Management System
        </button>
      </div>
    </div>
  </nav>
</template>