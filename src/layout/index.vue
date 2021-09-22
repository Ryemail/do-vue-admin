<template>
	<d-container>
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
import logo from '@/assets/images/workbench.png';

export default {
	name: 'Layout',
	data() {
		return {
			defaultActive: '',
			logo: logo,
			visible: true,
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler({ matched }) {
				this.defaultActive = matched[1] ? matched[1].name : '';
			},
		},
	},
	computed: {
		title() {
			const { query, meta } = this.$route;

			if (query.title) return query.title;

			return meta.title;
		},
		allExclude() {
			return this.$router.getRoutes().map((val) => val.name);
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
