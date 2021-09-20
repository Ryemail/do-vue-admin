<template>
	<div class="module">
		<d-page-tabs :default-active="$route.name" router :tabs="tabs" />

		<transition name="fade-transform" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabs: [
				{ title: 'Link', to: { name: 'tabs1', meta: { title: 'TABS' } } },
				{ title: 'Modal', to: { name: 'tabs2', meta: { title: 'TABS2' } } },
			],
			active: 0,
		};
	},
	methods: {
		onClick() {
			alert('点击事件');
		},
	},
};
</script>
