<script setup lang="ts">
import {type IDrink} from "@/entities/cocktail/model/IDrink";

defineProps<{
  drink: IDrink,
}>();
</script>

<template>
<div class="instructions-block">
  <h4 class="instruction-title">Instructions:</h4>
  <div class="instruction-text text">{{ drink.strInstructions }}</div>
</div>
</template>

<style scoped lang="scss">
.instructions-block {
  .instruction-title, .ingredients-title {
    margin-top: 30px;
  }

  .instruction-text {
    margin-top: 10px;
  }
}
</style>