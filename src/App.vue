<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { visibilitychange } from './utils/visibilitychange';

export default {
	name: 'App',
	created() {
		// 监听页面隐藏
		visibilitychange((hidden) => {
			if (!hidden) {
				this.$store.dispatch('resetLoginStatus');
				this.$router.push({
					path: '/login',
				});
			}
		});
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
