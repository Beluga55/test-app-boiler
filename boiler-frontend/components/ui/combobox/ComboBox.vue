<script setup lang="ts">
import { ref, computed } from 'vue'
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'

interface Item {
  value: string
  label: string
}

interface Props {
  items: Item[]
  placeholder: string
  buttonClass?: string
  textClass?: string
  popoverClass?: string
  commandStyle?: object
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonClass: '',
  popoverClass: '',
  textClass: '',
  commandStyle: () => ({}),  // Return an empty object as default
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const open = ref(false)

const selectedLabel = computed(() => {
  return props.modelValue
      ? props.items.find((item) => item.value === props.modelValue)?.label
      : props.placeholder
})

const handleSelect = (event: CustomEvent) => {
  const selectedValue = typeof event === 'string' ? event : event.detail?.value
  if (selectedValue) {
    emit('update:modelValue', selectedValue)
    open.value = false
  }
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
          variant="overview"
          size="overview"
          role="combobox"
          :aria-expanded="open"
          :class="['w-[200px] justify-between', buttonClass]"
      >
        <p :class="['overflow-hidden overflow-ellipsis text-left text-[14px]', textClass]">
          {{ selectedLabel }}
        </p>
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent :class="['w-[200px] mt-3', popoverClass]" :style="commandStyle">
      <Command :style="commandStyle">
        <CommandInput class="h-9" :placeholder="placeholder" />
        <CommandEmpty class="text-white font-medium">No item found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
                v-for="item in items"
                :key="item.value"
                :value="item.value"
                @select="handleSelect"
            >
              {{ item.label }}
              <CheckIcon
                  :class="cn(
                  'ml-auto h-4 w-4',
                  modelValue === item.value ? 'opacity-100' : 'opacity-0'
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>