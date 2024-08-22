<script setup>
import { ref } from 'vue'

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
</script>

<template>
  <div class="py-[18px] px-6">
    <div class="py-5 px-[18px] bg-background-secondary rounded-[10px] mb-[18px] border-border border-2">
      <h1 class="text-[14px] font-semibold">About the system</h1>
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

  /* END SCROLLBAR */
</style>

