<template>
	<div>
		<el-button @click="$reload">Refresh</el-button>
	</div>
</template>

<script>
export default {
	inject: ['$reload'],
	data() {
		return {};
	},
};
</script>
