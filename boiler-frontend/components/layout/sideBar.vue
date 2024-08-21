<script setup>
import { ref } from 'vue'
import DefaultImage from "assets/images/default-user-icon.jpg"
import { ChevronLeft, ChevronsUpDown, Pen, Share2, OverviewIcon, GlobeIcon, CircleIcon, SettingsIcon, Logout } from '../pages/overview/icons.js'

const activeButton = ref('Overview')

const handleSidebarButton = (buttonName) => {
  activeButton.value = buttonName
}

const navItems = [
  { name: 'Overview', icon: OverviewIcon },
  { name: 'Routes', icon: Share2 },
  { name: 'Revisions', icon: CircleIcon },
  { name: 'Editor', icon: Pen },
  { name: 'Domains', icon: GlobeIcon },
]
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__upper">
      <div class="sidebar__header">
        <div class="sidebar__title">
          <h1>BLDR.</h1>
          <ChevronLeft height="18px" style="cursor: pointer;" width="18px"/>
        </div>
        <div class="credit-badge">
          <p>100 credits remaining +</p>
        </div>
        <div class="repository">
          <button>pets-management-system</button>
          <ChevronsUpDown color="#A1A1AA" height="14px" style="cursor: pointer;" width="14px"/>
        </div>
      </div>
      <div class="sidebar__navigation">
        <div v-for="item in navItems" :key="item.name" class="sidebar__nav-item">
          <button
              :class="{ 'button--active': activeButton === item.name }"
              @click="handleSidebarButton(item.name)"
          >
            <component :is="item.icon" height="14" width="14"/>
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="sidebar__lower">
      <div class="profile__picture">
        <img :src="DefaultImage" alt="profile picture"/> <!-- Temporary -->
        <p>ShaneWen</p>
      </div>
      <div class="profile__icon">
        <component :is="SettingsIcon" height="12" width="12"/>
        <Logout height="12" width="12"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 180px;
  height: 100vh;
  border-right: 2px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .sidebar__title {
    padding: 14px 14px 0;
  }

  .sidebar__lower {
    border-top: 2px solid var(--border);
    padding: 9px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profile__picture {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 24px;
        height: 24px;
      }

      p {
        font-size: 12px;
        font-weight: 500;
      }
    }

    .profile__icon {
      display: flex;
      align-items: center;
      gap: 14px;
    }
  }
}

.sidebar__upper {
  .sidebar__header {
    padding-bottom: 8px;
    border-bottom: 2px solid var(--border);
    background: var(--secondary-background);
  }

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

  .sidebar__navigation {
    padding: 4px 8px;

    .sidebar__nav-item {
      button {
        padding: 10px 10.5px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 500;
        width: 100%;
        cursor: pointer;
      }

      .button--active {
        background: var(--button);
        border-radius: 6px;
        color: var(--primary);
      }
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
  margin: 12px 8px 0;
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