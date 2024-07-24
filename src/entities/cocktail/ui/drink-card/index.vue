<script setup lang="ts">
import type {IDrink} from "@/entities/cocktail/model/IDrink";
import {ERouteName} from "@/app/providers/router/types/ERouteName";
import {useRoute} from "vue-router";

defineProps<{
  drink: IDrink
}>();

const route = useRoute();
const code = route.params.code ?? 'margarita';
</script>

<template>
  <router-link :to="{ name: ERouteName.COCKTAIL_SHOW, params: { code, id: drink.idDrink } }" class="card drink-item">
    <h3>
      {{ drink.strDrink }}
    </h3>
  </router-link>
</template>

<style scoped lang="scss">
.drink-item {
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: box-shadow .2s ease;

  &:hover {
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.05);
  }
}
</style>