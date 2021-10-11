import Vue from 'vue';
import VueRouter from 'vue-router';

import './resetRouterMethod';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/admin/link',
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue'),
	},
	{
		path: '/admin',
		name: 'admin',
		component: () => import('@/layout/index.vue'),
		children: [
			{
				path: 'link',
				name: 'link',
				component: () => import('@/views/link.vue'),
				meta: {
					title: 'Link',
				},
			},
			{
				path: 'modal',
				name: 'modal',
				component: () => import('@/views/modal.vue'),
				meta: {
					title: 'Modal',
				},
			},

			{
				path: 'pageTabs',
				name: 'pageTabs',
				redirect: '/admin/pageTabs/tabs1',
				component: () => import('@/views/page-tabs/index.vue'),
				children: [
					{
						path: 'tabs1',
						name: 'tabs1',
						component: () => import('@/views/page-tabs/tabs1.vue'),
						meta: {
							title: 'querry',
						},
					},
					{
						path: 'tabs2',
						name: 'tabs2',
						component: () => import('@/views/page-tabs/tabs2.vue'),
					},
				],
			},
			{
				path: 'dialog',
				name: 'dialog',
				component: () => import('@/views/dialog.vue'),
			},
			{
				path: 'upload',
				name: 'upload',
				component: () => import('@/views/upload.vue'),
				meta: {
					title: 'Upload',
				},
			},
			{
				path: 'table',
				name: 'table',
				component: () => import('@/views/table.vue'),
				meta: {
					title: 'Table',
				},
			},
			{
				path: 'form',
				name: 'form',
				component: () => import('@/views/form.vue'),
			},
			{
				path: 'steps',
				name: 'steps',
				component: () => import('@/views/steps.vue'),
			},
			{
				path: 'statistic',
				name: 'statistic',
				component: () => import('@/views/statistic.vue'),
			},
			{
				path: 'timeline',
				name: 'timeline',
				component: () => import('@/views/timeline.vue'),
			},
			{
				path: '404',
				name: '404',
				component: () => import('@/views/404.vue'),
			},
		],
	},

	{
		path: '*',
		name: '*',
		redirect: '/admin/404',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// const routerTransitionTo = router.history.transitionTo;

// router.history.transitionTo = function transitionTo(location, onComplete, onAbort) {
// 	if (typeof location === 'object') {
// 		location.query = { ...location.query, v: 1 };
// 	} else {
// 		location = location + '?v=1';
// 	}

// 	routerTransitionTo.call(this, location, onComplete, onAbort);
// };

export default router;
