<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'

import {
  Button,
} from '@/components/ui/button'

interface Props {
  total: number
  value: number
  perPage: number
  buttonClass?: string
  activeButtonClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  total: 10,
  value: 1,
  perPage: 10,
  buttonClass: 'w-9 h-9 p-0',
  activeButtonClass: 'w-9 h-9 p-0',
})

const emit = defineEmits<{
  (e: 'update:value', value: number): void
}>()

const setPage = (page: number) => {
  emit('update:value', page)
}

const totalPages = computed(() => Math.ceil(props.total / props.perPage))

</script>

<template>
  <Pagination v-slot="{ page }" :total="total" :value="value" :perPage="perPage" :sibling-count="1" show-edges>
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst @click="setPage(1)" />
      <PaginationPrev @click="setPage(Math.max(1, page - 1))" />

        <template v-for="(item, index) in items" :key="index">
          <PaginationListItem v-if="item.type === 'page'" :value="item.value" as-child>
            <Button
                :class="item.value === page ? activeButtonClass : buttonClass"
                :variant="item.value === page ? 'default' : 'outline'"
                @click="setPage(item.value)"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else />
        </template>

      <PaginationNext @click="setPage(Math.min(total, page + 1))" />
      <PaginationLast @click="setPage(totalPages)" />
    </PaginationList>
  </Pagination>
</template>