<script setup lang="ts">
import {IDrink} from "@/entities/cocktail/model/IDrink";
import {computed} from "vue";

const props = defineProps<{
  drink: IDrink,
}>();

const measures = computed(() => Object.entries(props.drink).filter(([key, value]) => key.includes('strMeasure') && value));
const ingredients = computed(() => Object.entries(props.drink).filter(([key, value]) => key.includes('strIngredient') && value));
</script>

<template>
  <div class="ingredients-block">
    <h4 class="ingredients-title">List of ingredients</h4>
    <div class="ingredients-list">
      <div class="measures list">
        <div class="measure" v-for="[key, measure] of measures" :key="key">
          {{ measure }}
        </div>
      </div>
      <div class="ingredients list">
        <div class="ingredient" v-for="[key, ingredient] of ingredients" :key="key">
          {{ ingredient }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ingredients-block {
  margin-top: 30px;

  .ingredients-title {
    margin-bottom: 15px;
  }

  .ingredients-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>