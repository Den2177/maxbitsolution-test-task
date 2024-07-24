<script setup lang="ts">
import {shallowRef} from "vue";
import {useCurrentCocktail} from "@/entities/cocktail/lib/useCurrentCocktailCode";
import {storeToRefs} from "pinia";
import {useCocktailsListStore} from "@/entities/cocktail/stores/cocktailsListStore";
import type {IDrink} from "@/entities/cocktail/model/IDrink";
import DrinkProperties from '@/entities/cocktail/ui/drink-properties/index.vue';
import DrinkInstructions from '@/entities/cocktail/ui/drink-instructions/index.vue';
import DrinkIngredients from '@/entities/cocktail/ui/drink-ingredients/index.vue';
import {useRouter} from "vue-router";
import {ERouteName} from "@/app/providers/router/types/ERouteName";

const { cocktailCode, cocktailId } = useCurrentCocktail();
const cocktailsListStore = useCocktailsListStore();
const { cocktails } = storeToRefs(cocktailsListStore);
const { getCocktailsByCode } = cocktailsListStore;
const drink = shallowRef<IDrink>();
const router = useRouter();

async function init() {
  await getCocktailsByCode(cocktailCode);
  const findedDrink = cocktails.value[cocktailCode].find(item => item.idDrink === cocktailId);

  if (!findedDrink) {
    router.replace({name: ERouteName.NOT_FOUND})
    return;
  }

  drink.value = findedDrink as IDrink;
}

init();
</script>

<template>
<section class="card drink-show" v-if="drink">
  <div class="drink-info">
    <h3>{{ drink?.strDrink }}</h3>
    <DrinkProperties :drink="drink" />
    <DrinkInstructions :drink="drink" />
    <DrinkIngredients :drink="drink" />
  </div>
  <div class="drink-image">
    <img loading="lazy" :src="drink?.strDrinkThumb" alt="cocktail">
  </div>
</section>
</template>

<style scoped lang="scss">
.drink-show {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.drink-image {
  height: fit-content;
}

</style>