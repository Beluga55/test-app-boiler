<script setup>
import { ref } from 'vue'
import { ArrowRightIcon } from '@radix-icons/vue'

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
  {
    title: "Progress Tracking",
    description: "This feature that allows both students and instructors to track academic progress throughout the course"
  },
  {
    title: "Progress Tracking",
    description: "This feature that allows both students and instructors to track academic progress throughout the course"
  },
  {
    title: "Progress Tracking",
    description: "This feature that allows both students and instructors to track academic progress throughout the course"
  },
  {
    title: "Progress Tracking",
    description: "This feature that allows both students and instructors to track academic progress throughout the course"
  },
])

/* ====== OPEN REVISIONS DATA ====== */
const openRevisionsData = ref([
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
  {
    name: "Assignment Module",
    status: "Ready"
  },
]);

/* ====== TO TEST EMPTY STATE (Uncomment) ====== */
// openRevisionsData.value = [];

</script>

<template>
  <div class="py-[18px] px-6 h-[calc(100vh-3.7rem)] overflow-auto">
    <div class="py-5 px-[18px] bg-background-secondary rounded-[10px] mb-[18px] border-border border-2">
      <h1 class="text-[14px] font-bold">About the system</h1>
      <p class="text-xs font-medium mt-3">This system helps pet care businesses like veterinary clinics and grooming services run more smoothly. It
        includes tools for scheduling appointments, managing medical records, tracking service history, and
        communicating with customers. These features enhance operational efficiency and improve client service.</p>
    </div>
    <div class="mb-[18px]">
      <h1 class="text-[14px] font-medium">Feature Suggestions</h1>
      <div class="mt-2.5">
        <div class="overflow-x-auto flex gap-4">
          <div v-for="(feature, index) in featureData" :key="index" class="mt-2.5 min-w-[200px] bg-background-secondary px-[18px] pt-4 pb-6 rounded-[8px] border-border border-2">
            <h2 class="text-[14px] font-bold mb-2">{{ feature.title }}</h2>
            <p class="text-xs font-medium text-text-secondary">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1 class="font-medium text-[14px]">Open Revisions</h1>
      <div class="mt-2.5 flex gap-4">
        <div v-if="openRevisionsData.length === 0" class="flex-1 h-[225px] flex flex-col items-center justify-center border-dashed border-2 border-border-secondary rounded-[10px]">
          <p class="text-[14px] text-center">There aren't any new features being developed.</p>
          <p class="text-[14px] text-center mt-2.5">
            Go to <NuxtLink :to="'/revisions'" class="text-primary-system">Revisions</NuxtLink> to create a new one.
          </p>
        </div>
        <div v-else class="max-h-[225px] overflow-y-scroll w-full flex flex-col gap-2.5">
            <div v-for="(revision, index) in openRevisionsData" :key="index" class="bg-background-secondary rounded-[10px] px-[9px] py-2.5">
              <div class="flex items-center">
                <div class="w-[20px] h-[20px] rounded-full bg-primary-system border-border-status border-2 border-solid mr-2.5"></div>
                <span class="text-xs font-medium">{{ revision.name }}</span>
                <span class="ml-auto px-2.5 text-xs font-medium text-primary-system">{{ revision.status }}</span>
              </div>
            </div>
        </div>
        <div class="rounded-[10px] bg-secondary-system min-w-[225px] h-[225px] px-5 py-5 relative overflow-hidden z-[1]">
          <img src="~/assets/images/hash.svg" alt="hash" class="hash absolute inset-0 w-[190px] h-[190px] object-cover z-0 opacity-10 rotate-[28deg] left-[-50px] top-[75px]"/>
          <div class="relative z-10">
            <h1 class="font-black text-[21px] text-background-secondary">Ready to <br/>launch?</h1>
          </div>
          <div class="flex items-center gap-1 absolute bottom-5 left-5 z-10">
            <p class="text-[14px] text-background-secondary font-bold">Upgrade your plan</p>
            <ArrowRightIcon class="text-background-secondary w-[14px] h-[14px] mt-[1px] font-bold" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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

