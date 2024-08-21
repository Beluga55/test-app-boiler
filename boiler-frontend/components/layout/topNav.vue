<script setup lang="ts">
  import { SearchIcon } from '../pages/overview/icons.js'
</script>

<template>
  <nav class="top__nav">
    <div class="top__nav--wrapper">
      <h1>Pet Management System / Overview</h1>

      <div class="top__nav-search">
        <button>
          <SearchIcon width="12px" height="12px" />
          Pet Management System
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .top__nav {
    background: var(--secondary-background);
    width: 100%;

    .top__nav--wrapper {
      padding: 11px 24px;
      display: flex;
      align-items: center;

      > * {
        flex: 1;
      }
    }

    h1 {
      font-weight: bold;
      font-size: 14px;
    }

    .top__nav-search {
      width: 100%;
      background: var(--border);
      display: flex;
      justify-content: center;
      border-radius: 5px;

      button {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 10px;
        color: #ABABAB;
        padding: 8px 0;
      }
    }
  }
</style>