<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'

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

const repository = [
  { value: 'pets-management-system', label: 'pets-management-system' },
  { value: 'e-commerce-system', label: 'e-commerce-system' },
  { value: 'nuxt-tutorial', label: 'Nuxt-tutorial' },
  { value: 'remix-tutorial', label: 'Remix-tutorial' },
  { value: 'astro-tutorial', label: 'Astro-tutorial' },
]

const open = ref(false)
const value = ref('')

</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
          variant="overview"
          size="overview"
          role="combobox"
          :aria-expanded="open"
          class="w-[200px] justify-between"
      >
        <p class='w-[100px] overflow-hidden overflow-ellipsis text-left'>
        {{ value
          ? repository.find((framework) => framework.value === value)?.label
          : "Select Repository..." }}
        </p>
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] ml-2.5 mt-3" style="background: #353535">
      <Command style="background: #353535">
        <CommandInput class="h-9" placeholder="Select Repository..." />
        <CommandEmpty class="text-white font-medium">No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem 
                v-for="repository in repository"
                :key="repository.value"
                :value="repository.value"
                @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }"
            >
              {{ repository.label }}
              <Check
                  :class="cn(
                  'ml-auto h-4 w-4',
                  value === repository.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>