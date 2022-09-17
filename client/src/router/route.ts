import { SET_ROUTE_TREE } from '@/store/actionTypes';
import { IState } from '@/store/state';
import { IRouter } from '@/typings';
import { RouteRecordRaw, Router } from 'vue-router';
import { Store } from 'vuex';
function generateRouter(routerTree: IRouter[]) {
	let newRoutes = routerTree.map(route => {
		console.log(
			`/* webpackChunkName: "${route.name}" */@/views/${route.name}.vue ${route.path}`
		);
		let _route: RouteRecordRaw = {
			path: route.path,
			name: route.name,
			component: () =>
				import(
					`/* webpackChunkName: "${route.name}" */@/views/${route.name}.vue`
				),
			children: [],
		};
		if (route.children) {
			_route.children = generateRouter(route.children);
		}
		return _route;
	});

	return newRoutes;
}
export function routerBeforeEach(router: Router, store: Store<IState>) {
	router.beforeEach(async (to, from, next) => {
		if (!store.state.hasAuth) {
			await store.dispatch(SET_ROUTE_TREE);
			const newRoutes = generateRouter(store.state.routeTree);
			newRoutes.forEach(route => router.addRoute(route));
			next({ path: to.path });
		} else {
			next();
		}
	});
}

export default generateRouter;
