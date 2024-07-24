import {defineStore} from "pinia";
import cocktailApi from "@/entities/cocktail/api";
import type {IDrink} from "@/entities/cocktail/model/IDrink";

interface ICocktails {
    [key: string]: IDrink[],
}

interface ICocktailsListStoreState {
    cocktails: ICocktails,
}

export const useCocktailsListStore = defineStore('cocktailsListStore', {
    state: (): ICocktailsListStoreState => ({
        cocktails: {
            margarita: [],
            mojito: [],
            a1: [],
            kir: [],
        },
    }),
    actions: {
        async getCocktailsByCode(code: string) {
            if (!this.cocktails[code].length) {
                const { drinks } = await cocktailApi.getCocktails(code);
                this.cocktails[code] = drinks;
            }
        },
    },
})