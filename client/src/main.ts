import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { routerBeforeEach } from './router/route';
import '@/assets/reset.css';
// import generateRouter from './router/route';
// store.dispatch('SET_ROUTE_TREE').then(() => {
// 	const routes = generateRouter(store.state.routeTree);
// 	console.log(routes);
// });
routerBeforeEach(router, store);
createApp(App).use(store).use(router).mount('#app');
