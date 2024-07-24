import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/app/providers/router/routes';
import {MENU_ITEMS} from "@/entities/cocktail/const/menuItems";
import {ERouteName} from "@/app/providers/router/types/ERouteName";
import {COCKTAIL_CODE_BY_DEFAULT} from "@/entities/cocktail/const/defaultCocktailCode";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _) => {
  const availableCodes = MENU_ITEMS.map(menuItem => menuItem.code);
  const toCode = (to.params.code ?? COCKTAIL_CODE_BY_DEFAULT) as string;

  if (!availableCodes.includes(toCode)) {
    return { name: ERouteName.NOT_FOUND };
  }
});

export {
  router,
};
