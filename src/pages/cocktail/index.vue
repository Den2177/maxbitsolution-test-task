<script setup lang="ts">
import {MENU_ITEMS} from "@/entities/cocktail/const/menuItems";
import {ERouteName} from "@/app/providers/router/types/ERouteName";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="cocktails-wrapper">
    <div class="container">
      <main class="cocktails-body">
        <nav class="sidebar-menu">
          <router-link v-for="menuItem in MENU_ITEMS" :to="{ name: ERouteName.COCKTAIL_INDEX, params: { code: menuItem.code } }" class="menu-link" active-class="active" :key="menuItem.code">{{menuItem.title}}</router-link>
        </nav>

        <router-view :key="route.fullPath" />
      </main>

    </div>
  </div>


</template>

<style scoped lang="scss">
.cocktails-wrapper {
  .cocktails-body {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;

    @media(max-width: 450px) {
      grid-template-columns: 1fr;
    }

    .sidebar-menu {
      display: flex;
      flex-direction: column;
      height: fit-content;
      border-radius: 12px;
      background: #fff;


      .menu-link {
        padding: 10px 30px;
        color: dimgrey;
        text-decoration: none;
        font-weight: 500;

        &.active {
          background-color: #e4e7ff;
          border-radius: 12px;
          color: #4149e1;
        }

        &:hover:not(.active) {
          background-color: #fafaff;
        }
      }
    }
  }
}

</style>