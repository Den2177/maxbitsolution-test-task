<script setup lang="ts">
import {useRouter} from "vue-router";
import {ERouteName} from "@/app/providers/router/types/ERouteName";
import {COCKTAIL_CODE_BY_DEFAULT} from "@/entities/cocktail/const/defaultCocktailCode";
import UiButton from "@/shared/ui/UiButton.vue";

const router = useRouter();
function toMainPage() {
  router.replace({ name: ERouteName.COCKTAIL_INDEX, params: { code: COCKTAIL_CODE_BY_DEFAULT } })
}
</script>

<template>
  <div class="not-found-wrapper">
    <div class="not-found-card">
      <img loading="lazy" class="not-found-gif" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif" alt="not found">
      <div class="text">К сожалению не нашел страницу для вас.<br> Однако могу предложить внезапный анекдот: <br>Поймал старик золотую рыбку. — Отпусти меня, старче, три желания исполню! — Зашибись! — сказал старик. И зашиблась бедная рыбка, так и не исполнив два другие желания.</div>
      <ui-button @click="toMainPage">На главную</ui-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-wrapper {
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  .not-found-card {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>