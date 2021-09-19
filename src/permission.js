import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import store from './store';

NProgress.configure({ showSpinner: false });

function getPath(route) {
	if (route.child) {
		return getPath(route.path[0]);
	} else {
		return route.path;
	}
}

function createPath(path) {
	const { menu } = store.state;

	if (menu.length) {
		return getPath(menu[0]);
	} else {
		return path;
	}
}

router.beforeEach(async (to, from, next) => {
	NProgress.start();

	if (to.matched.length === 0) {
		const curr = store.state.menu.find((val) => val.path === to.name);

		next({
			path: '/404',
			query: curr,
		});

		NProgress.done();
	}

	const Authorization = to.query['Authorization'] || null;

	if (Authorization) {
		store.commit('updateToken', Authorization);

		await store.dispatch('getInfo');

		next({
			name: createPath('home'),
			replace: true,
		});
	} else {
		const { token, menu } = store.state;
		const whiteList = ['/login'];

		if (token && menu.length > 0) {
			if (to.path === '/login') {
				next({ name: createPath('home') });
			} else {
				next();
			}

			NProgress.done();
		} else if (whiteList.includes(to.path)) {
			next();
		} else {
			next({
				replace: true,
				path: '/login',
				query: {
					redirect: to.path,
				},
			});
			//跳转登录号
			// location.href = process.env.VUE_APP_LOGIN;
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});
