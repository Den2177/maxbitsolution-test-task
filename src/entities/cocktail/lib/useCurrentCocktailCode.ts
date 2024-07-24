import {useRoute} from "vue-router";
import {COCKTAIL_CODE_BY_DEFAULT} from "@/entities/cocktail/const/defaultCocktailCode";

export const useCurrentCocktail = () => {
    const route = useRoute();
    const cocktailCode = (route.params.code ?? COCKTAIL_CODE_BY_DEFAULT) as string;
    const cocktailId = route.params.id as string;

    return {
        cocktailCode,
        cocktailId,
    }
}