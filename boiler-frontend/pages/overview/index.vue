<script setup>
import { ChevronLeft, ChevronsUpDown } from 'lucide-vue-next'

</script>

<template>
  <div class="sidebar">
    <div class="sidebar__upper">
      <div class="sidebar__header">
        <div class="sidebar__title">
          <h1>BLDR.</h1>
          <ChevronLeft width="18px" height="18px" />
        </div>
        <div class="credit-badge">
          <p>100 credits remaining +</p>
        </div>
        <div class="repository">
          <button>pets-management-system</button>
          <ChevronsUpDown width="14px" height="14px" color="#A1A1AA" />
        </div>
      </div>
      <div class="sidebar__navigation">

      </div>
    </div>
    <div class="sidebar__lower">

    </div>
  </div>
</template>

<style lang="scss">
  :root {
    --background: #000000;
    --secondary-background: #191919;
    --primary: #DCF928;
    --secondary: #EDFF7F;
    --text: #ffffff;
    --text-secondary: #ababab;
    --error: #ff4e4e;
    --warning: #FFAB2C;
    --success: #DCF928;
    --border: #27272A;
  }

  body {
    background: var(--background);
    color: var(--text);
  }
</style>

<style lang="scss" scoped>
  .sidebar {
    width: 180px;
    height: 100vh;
    border-right: 2px solid var(--border);

    .sidebar__title {
      padding: 14px 14px 0;
    }
  }

  .sidebar__upper {
    .credit-badge {
      background: linear-gradient(49deg, var(--primary) 0%, var(--secondary) 100%);
      color: black;
      margin-top: 7px;
      border-radius: 2rem;
      text-align: center;
      width: fit-content;
      padding: 3px 6px;
      margin-left: 14px;


      p {
        font-size: 10px;
        font-weight: 500;
      }
    }
  }

  .sidebar__title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: bolder;
      font-size: 1rem;
    }
  }

  .repository {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 12px 8px 8px;
    padding: 9px 13px;
    background: #353535;
    border: 2px solid var(--border);
    border-radius: 6px;

    button {
      width: 110px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      font-weight: 400;
    }


  }
</style>