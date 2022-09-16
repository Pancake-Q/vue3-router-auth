import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
store.dispatch('SET_ROUTE_TREE');
createApp(App).use(store).mount('#app');
