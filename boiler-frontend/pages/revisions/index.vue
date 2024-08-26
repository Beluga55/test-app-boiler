<script setup lang="ts">
import {ref, computed} from "vue";
import { PlusIcon, ShadowInnerIcon, CheckIcon } from '@radix-icons/vue'
import Pagination from "~/components/ui/pagination/Pagination.vue";

definePageMeta({
  layout: 'dashboard-layout',
})

const featureData = ref([
  {
    title: "Assignment",
    description: "The Assignment feature allows lecturers to create, distribute, and grade assignments while enabling students to submit work and receive feedback."
  },
  {
    title: "Quiz and Test",
    description: "This allows instructors to create, administer, and grade quizzes and tests directly within the LMS."
  },
  {
    title: "Progress Tracking",
    description: "This feature that allows both students and instructors to track academic progress throughout the course"
  },
  {
    title: "Notifications and Alerts",
    description: "Automatically updates users about important course activities and deadlines."
  },
  {
    title: "Progress Tracking",
    description: "This feature that allows both students and instructors to track academic progress throughout the course"
  },
])

/* ====== OPEN REVISIONS DATA ====== */
const openRevisionsData = ref([
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Ready",
    "bg-color": "bg-primary-system",
    "text-color": "text-primary-system"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Ready",
    "bg-color": "bg-primary-system",
    "text-color": "text-primary-system"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Ready",
    "bg-color": "bg-primary-system",
    "text-color": "text-primary-system"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Developing",
    "bg-color": "bg-text-developing",
    "text-color": "text-text-developing"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Testing",
    "bg-color": "bg-text-testing",
    "text-color": "text-text-testing"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Error",
    "bg-color": "bg-text-error",
    "text-color": "text-text-error"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Queue",
    "bg-color": "bg-text-queued",
    "text-color": "text-text-queued"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Draft",
    "bg-color": "bg-text-draft",
    "text-color": "text-text-draft"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Testing",
    "bg-color": "bg-text-testing",
    "text-color": "text-text-testing"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Testing",
    "bg-color": "bg-text-testing",
    "text-color": "text-text-testing"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Draft",
    "bg-color": "bg-text-draft",
    "text-color": "text-text-draft"
  },
  {
    "name": "Assignment Module",
    "id": 2010,
    "status": "Draft",
    "bg-color": "bg-text-draft",
    "text-color": "text-text-draft"
  },
])

/* ====== LIMIT OPEN REVISIONS DATA (10 Only using computed method) ====== */
const itemsPerPage = ref(10)
const currentPage = ref(1)

const totalItems = computed(() => {
  return openRevisionsData.value.length;
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return openRevisionsData.value.slice(start, end);
});

const setPage = (page: number) => {
  currentPage.value = page
}

// DUPLICATE MORE
openRevisionsData.value = [...openRevisionsData.value, ...openRevisionsData.value]

// UNCOMMENT TO TEST EMPTY STATE
// openRevisionsData.value = [];

</script>

<template>
  <div class="py-[18px] px-6 h-[calc(100vh-3.75rem)] overflow-auto">
    <div class="mb-[18px]">
      <h1 class="text-[14px] font-medium">Feature Suggestions</h1>
      <div class="mt-2.5">
        <div class="overflow-x-auto flex gap-4">
          <div v-for="(feature, index) in featureData" :key="index" class="flex-1 mt-2.5 min-w-[200px] bg-background-secondary px-[18px] pt-4 pb-6 rounded-[8px] border-border border-2">
            <h2 class="text-[14px] font-bold mb-2">{{ feature.title }}</h2>
            <p class="text-xs font-medium text-text-secondary">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="first bg-background-secondary py-2 px-5 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="flex items-center gap-2.5">
            <ShadowInnerIcon />
            <p class="text-[14px] font-medium"><span>7</span> Open</p>
          </div>
          <div class="flex items-center gap-2.5">
            <CheckIcon />
            <p class="text-[14px] font-medium"><span>80</span> Closed</p>
          </div>
        </div>
        <Button variant="overview" class="bg-primary-system text-black py-1.5 px-3 h-auto flex items-center gap-1">
          New Revision
          <PlusIcon />
        </Button>
      </div>
      <div v-if="openRevisionsData.length === 0" class="second border-2 border-dashed border-border h-[calc(100vh-325px)] flex items-center justify-center flex-col">
        <p class="text-[14px] text-center">There aren’t any feature being developed.</p>
        <p class="text-[14px] text-center mt-2.5">
          Click the <span class="text-primary-system">New Revision</span> button to create a new one.
        </p>
      </div>
      <div v-else class="bg-black">
        <div v-for="(revision, index) in paginatedData" :key="index" class="flex items-center justify-between px-[20px] py-[13px] border-solid border-[1px] border-button-secondary">
          <div class="relative">
            <div :class="revision['bg-color']" class="w-[5px] h-full absolute rounded-[50px] left-0"></div>
            <div class="ml-4">
              <h4 class="font-medium text-xs">{{ revision.name }}</h4>
              <p class="text-[10px] text-text-secondary mt-2">#{{ revision.id }} opened 1 day ago by ShaneWen.</p>
            </div>
          </div>
          <div class="second">
            <p :class="revision['text-color']" class="text-xs font-medium">{{ revision.status }}</p>
          </div>
        </div>
      </div>

      <div class="pagination mt-[18px] flex items-center justify-center">
        <Pagination
            :total="totalItems"
            :value="currentPage"
            :perPage="itemsPerPage"
            button-class="px-3 py-1 text-sm font-medium hover:bg-text"
            active-button-class="px-3 py-1 text-sm font-bold bg-white text-black"
            @update:value="setPage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    padding-top: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ababab;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: dimgrey;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
</style>