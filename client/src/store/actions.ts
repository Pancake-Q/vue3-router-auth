import { Commit } from 'vuex';
import { IState } from './state';
import { SET_AUTH, SET_ROUTE_TREE } from './actionTypes';
import { IRouter } from '@/typings';
import { getUserRouteList } from '@/services';
import { formatRouteTree } from '@/libs/utils';

export default {
	async [SET_ROUTE_TREE]({ commit, state }: { commit: Commit; state: IState }) {
		const routeList = <IRouter[]>(<unknown>await getUserRouteList(state.uid));
		const routeTree = formatRouteTree(routeList);
		console.log(routeTree);
		commit(SET_ROUTE_TREE, routeTree);
		commit(SET_AUTH, true);
	},
};
