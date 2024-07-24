import axiosConfig from '@/shared/config/axios.instance';
import CocktailApi from "@/entities/cocktail/api/cocktail.api";

const cocktailApi: CocktailApi = new CocktailApi(axiosConfig);

export default cocktailApi;