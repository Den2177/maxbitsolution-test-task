import '@/shared/assets/css/base.scss';

import { createApp } from 'vue';
import { store, router } from './providers';
import App from './App.vue';

const app = createApp(App)
  .use(router)
  .use(store)

export default app;