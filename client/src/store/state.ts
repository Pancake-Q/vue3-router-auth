import { IRouter } from '@/typings';

export interface IState {
	uid: number;
	hasAuth: boolean;
	routeTree: IRouter[];
}

export default {
	uid: 3,
	hasAuth: false,
	routeTree: [],
};
