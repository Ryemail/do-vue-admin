<template>
	<d-container id="app">
		<d-header :title="$store.state.title" :logo="logo" fixed />

		<div class="d-main">
			<d-menu :default-active="defaultActive" :menus="$store.state.menu" />

			<d-content :title="title" :backs="['tabs1']" :exclude="['404']">
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
			logo: logo,
			visible: true,
		};
	},
	watch: {
		$route({ matched }) {
			this.defaultActive = matched[0] ? matched[0].name : '';
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
