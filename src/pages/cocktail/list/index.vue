<script setup lang="ts">
import {useCocktailsListStore} from "@/entities/cocktail/stores/cocktailsListStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {computed} from "vue";
import type {IDrink} from "@/entities/cocktail/model/IDrink";
import DrinkCard from "@/entities/cocktail/ui/drink-card/index.vue";
import {useCurrentCocktail} from "@/entities/cocktail/lib/useCurrentCocktailCode";

const route = useRoute();
const cocktailsListStore = useCocktailsListStore();
const { cocktails } = storeToRefs(cocktailsListStore);
const { getCocktailsByCode } = cocktailsListStore;
const { cocktailCode } = useCurrentCocktail();

const cocktailsList = computed<IDrink[]>(() => cocktails.value[cocktailCode])

async function init() {
  if (!cocktailsList.value.length) {
    await getCocktailsByCode(route.params.code as string);
  }
}

init();
</script>

<template>
  <section class="drink-list">
    <DrinkCard v-for="drink in cocktailsList" :key="drink.idDrink" :drink="drink" />
  </section>
</template>

<style scoped>
.drink-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media(max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 670px) {
    grid-template-columns: 1fr;
  }
}
</style>