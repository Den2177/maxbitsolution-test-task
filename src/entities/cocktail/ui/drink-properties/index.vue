<script setup lang="ts">
import type {IDrink} from "@/entities/cocktail/model/IDrink";

defineProps<{
  drink: IDrink,
}>();
</script>

<template>
  <div class="drink-common-data">
    <div class="drink-row">
      <div class="drink-key">
        Category:
      </div>
      <div class="drink-value">
        {{ drink.strCategory }}
      </div>
    </div>
    <div class="drink-row">
      <div class="drink-key">
        Alcoholic:
      </div>
      <div class="drink-value">
        {{ drink.strAlcoholic }}
      </div>
    </div>
    <div class="drink-row">
      <div class="drink-key">
        Glass:
      </div>
      <div class="drink-value">
        {{ drink.strGlass }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.drink-common-data {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .drink-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(105, 105, 105, 0.2);
    padding: 5px 0;

    .drink-key {
      color: dimgrey;
    }

    .drink-value {
      color: #000;
      font-weight: 500;
    }
  }
}
</style>