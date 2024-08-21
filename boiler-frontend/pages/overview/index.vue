<script setup>
definePageMeta({
  layout: 'overview',
})
</script>

<template>
  <div class="content__container">
    <div class="about">
      <h1>About the system</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content__container {
  padding: 18px 24px;

  .about {
    padding: 20px 18px;
    background: var(--overview-secondary-background);
    border-radius: 10px;

    h1 {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>