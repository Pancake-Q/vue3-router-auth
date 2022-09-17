import { IRouter } from '@/typings';

function formatRouteTree(data: IRouter[]) {
	const parents = data.filter(routerInfo => routerInfo.pid === 0);
	const children = data.filter(routerInfo => routerInfo.pid !== 0);
	dataToTree(parents, children);
	return parents;

	function dataToTree(parents: IRouter[], children: IRouter[]) {
		parents.map(parent => {
			children.map((child, index) => {
				if (child.pid === parent.id) {
					let _children: IRouter[] = JSON.parse(JSON.stringify(children));
					_children.splice(index, 1);
					dataToTree([child], _children);
					if (parent.children) {
						parent.children.push(child);
					} else {
						parent.children = [child];
					}
				}
			});
		});
	}
}
export { formatRouteTree };
