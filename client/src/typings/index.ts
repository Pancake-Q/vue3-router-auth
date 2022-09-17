export interface IRouter {
	id: number;
	pid: number;
	name: string;
	path: string;
	link?: string; // 子路由
	title: string;
	children?: IRouter[];
}
