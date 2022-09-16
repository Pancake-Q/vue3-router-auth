import { Commit } from 'vuex';
import { IState } from './state';
import { SET_AUTH, SET_ROUTE_TREE } from './actionTypes';
import { IRouter } from '@/typings';
import { getUserRouteList } from '@/services';

export default {
	async [SET_ROUTE_TREE]({ commit, state }: { commit: Commit; state: IState }) {
		const routeList = await getUserRouteList(state.uid);
		console.log(routeList);
		// const routeTree = formatRouteTree(routeList);
		// commit(SET_ROUTE_TREE, routeTree);
		// commit(SET_AUTH, true);
	},
};
