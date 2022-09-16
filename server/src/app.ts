import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { User, Router, IRouter } from './data';
const app: Application = express();
const PORT: number = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/user_router_list', (req: Request, res: Response) => {
	const { uid } = req.body;
	if (uid) {
		const userInfo = User.find(user => user.id == uid);
		if (userInfo) {
			const authRouteList: IRouter[] = [];
			userInfo.auth.map(rid => {
				Router.map(route => {
					if (route.id === rid) authRouteList.push(route);
				});
			});
			res.status(200).send({
				code: '0',
				msg: 'ok',
				data: authRouteList,
			});
		} else {
			res.status(200).send({
				code: '1001',
				data: null,
				msg: 'no route for this userInfo',
			});
		}
	} else {
		res.status(200).send({
			code: '1002',
			msg: 'no userInfo for this UID',
			data: null,
		});
	}
});

app.listen(PORT, () => {
	console.log('Server is running on ', PORT, '.');
});
