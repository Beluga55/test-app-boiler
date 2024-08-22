<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { MagnifyingGlassIcon } from '@radix-icons/vue'
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="flex items-center border-b" cmdk-input-wrapper>
    <MagnifyingGlassIcon class="mr-2 h-4 w-4 shrink-0 opacity-50" style="color: #ffffff;" />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      style="color: #ffffff;"
      :class="cn('flex h-10 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-slate-200 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>
