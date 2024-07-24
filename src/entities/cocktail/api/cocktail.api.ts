import { ApiCore } from '@/shared/api-core';
import type {AxiosInstance} from 'axios';
import type {IDrink} from "@/entities/cocktail/model/IDrink";

export default class CocktailApi extends ApiCore {
    constructor(apiConfig: AxiosInstance) {
        super(apiConfig);
    }

    async getCocktails(cocktailCode: string): Promise<{ drinks: IDrink[] }> {
        const { data } = await this.get<string, { drinks: IDrink[] }>(`/search.php?s=${cocktailCode}`);
        return data;
    }
}