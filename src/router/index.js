import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/link',
	},
	{
		path: '/link',
		name: 'link',
		component: () => import('@/views/link.vue'),
		meta: {
			title: 'Link',
		},
	},
	{
		path: '/modal',
		name: 'modal',
		component: () => import('@/views/modal.vue'),
		meta: {
			title: 'Modal',
		},
	},
	{
		path: '/pageTabs',
		name: 'pageTabs',
		redirect: '/pageTabs/tabs1',
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
		path: '/dialog',
		name: 'dialog',
		component: () => import('@/views/dialog.vue'),
	},
	{
		path: '/upload',
		name: 'upload',
		component: () => import('@/views/upload.vue'),
		meta: {
			title: 'Upload',
		},
	},
	{
		path: '/table',
		name: 'table',
		component: () => import('@/views/table.vue'),
		meta: {
			title: 'Table',
		},
	},
	{
		path: '/form',
		name: 'form',
		component: () => import('@/views/form.vue'),
	},
	{
		path: '/layout',
		name: 'layout',
		components: {
			layout: () => import('@/views/layout.vue'),
		},
	},
	{
		path: '/steps',
		name: 'steps',
		component: () => import('@/views/steps.vue'),
	},
	{
		path: '/timeline',
		name: 'timeline',
		component: () => import('@/views/timeline.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
