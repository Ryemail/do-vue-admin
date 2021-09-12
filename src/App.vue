<template>
	<d-container id="app">
		<d-header title="工作中心" :logo="logo" fixed />

		<div class="d-main">
			<d-menu :default-active="defaultActive" :menus="menus" />

			<d-content :title="title" :backs="['tabs1']">
				<router-view v-if="visible" class="d-router-view" />
			</d-content>
		</div>

		<d-footer />
	</d-container>
</template>

<script>
import logo from './assets/images/workbench.png';

export default {
	name: 'App',
	data() {
		return {
			defaultActive: '',
			menus: [
				{ en_name: 'link', name: 'Link' },
				{ en_name: 'dialog', name: 'Dialog' },
				{ en_name: 'modal', name: 'Modal' },
				{ en_name: 'table', name: 'Table' },
				{ en_name: 'form', name: 'Form' },
				{ en_name: 'upload', name: 'Upload' },
				{ en_name: 'pageTabs', name: 'Tabs' },
			],
			logo: logo,
			visible: true,
		};
	},
	watch: {
		$route({ matched }) {
			this.defaultActive = matched[0].name;
		},
	},
	computed: {
		title() {
			const { query, meta } = this.$route;

			if (query.title) return query.title;

			return meta.title;
		},
	},
	provide() {
		return {
			$reload: () => {
				this.visible = false;

				this.$nextTick(() => {
					this.visible = true;
				});
			},
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
}
</style>
