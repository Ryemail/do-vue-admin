import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import store from './store';

NProgress.configure({ showSpinner: false });

function getPath(route) {
	if (route.child) {
		return getPath(route.path[0]);
	} else {
		return route.en_name;
	}
}

function createPath(path) {
	const { menu } = store.state;

	if (menu.length) {
		const firstItem = menu.slice(0, 1);
		return getPath(firstItem);
	} else {
		return path;
	}
}

router.beforeEach(async (to, from, next) => {
	NProgress.start();

	const Authorization = to.query['Authorization'] || null;

	if (Authorization) {
		store.commit('updateToken', Authorization);

		await store.dispatch('getInfo');

		next({
			path: createPath(),
			replace: true,
		});
	} else {
		const { token, menu } = store.state;

		if (token && menu.length > 0) {
			if (to.path === '/login') {
				next({ path: createPath('/') });

				NProgress.done();
			} else {
				next();
			}
		} else {
			// 跳转真实登录页面，当前测试跳转当前页
			next();
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});
router.onError(() => {
	console.log(router.currentRoute);
});
