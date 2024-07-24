import {ERouteName} from '@/app/providers/router/types/ERouteName';
import {COCKTAIL_CODE_BY_DEFAULT} from "@/entities/cocktail/const/defaultCocktailCode";

export const routes = [
    {
        path: '/',
        component: () => import('@/pages/cocktail/index.vue'),
        redirect: { name: ERouteName.COCKTAIL_INDEX, params: { code: COCKTAIL_CODE_BY_DEFAULT } },
        children: [
            {
                path: ':code',
                component: () => import('@/pages/cocktail/list/index.vue'),
                name: ERouteName.COCKTAIL_INDEX,
            },
            {
                path:  ':code/show/:id',
                component: () => import('@/pages/cocktail/show/index.vue'),
                name: ERouteName.COCKTAIL_SHOW,
            }
        ],
    },
    {
        path: '/not-found',
        component: () => import('@/pages/NotFound.vue'),
        name: ERouteName.NOT_FOUND
    }
];