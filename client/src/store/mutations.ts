import { IState } from './state';
import { SET_AUTH, SET_ROUTE_TREE } from './actionTypes';
import { IRouter } from '@/typings';

export default {
	[SET_ROUTE_TREE](state: IState, routeTree: IRouter[]) {
		state.routeTree = routeTree;
	},
	[SET_AUTH](state: IState, auth: boolean) {
		state.hasAuth = auth;
	},
};
