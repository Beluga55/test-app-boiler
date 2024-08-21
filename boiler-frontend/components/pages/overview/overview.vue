<script setup>
import Sidebar from '~/components/layout/sideBar.vue'
import TopNav from '~/components/layout/topNav.vue'
import MainContent from '~/components/pages/overview/mainContent.vue'
</script>

<template>
  <div class="main__container">
    <Sidebar />
    <div class="w-full">
      <TopNav />
      <MainContent />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --background: #0D0E0C;
  --secondary-background: #191919;
  --primary: #DCF928;
  --secondary: #EDFF7F;
  --text: #ffffff;
  --text-secondary: #ababab;
  --error: #ff4e4e;
  --warning: #FFAB2C;
  --success: #DCF928;
  --border: #27272A;
  --button: #27272A;
}

body {
  background: var(--background);
  color: var(--text);
}
</style>

<style scoped lang="scss">
.main__container {
  display: flex;
  align-items: flex-start;
}
</style>