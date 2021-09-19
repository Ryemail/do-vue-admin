<template>
	<div class="g-page-404">
		<img class="g-bullshit-image" src="~@/assets/images/404.svg" />
		<div class="g-bullshit">
			<div class="g-bullshit-oops">哎呀!</div>
			<div class="g-bullshit-headline">您访问的页面{{ title }}不存在</div>
			<div class="g-bullshit-info">
				请检查您输入的URL是否正确，或单击下面的按钮返回上一页.
			</div>
			<el-button type="primary" size="small" @click="$router.back()"> 返回上一页 </el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Error404',

	computed: {
		title() {
			const path = this.$route.query.path;

			if (path) return `"${path}"`;

			return '';
		},
	},
};
</script>

<style lang="less" scoped>
.g-page-404 {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 160px;
	.g-bullshit-image {
		width: 400px;
		margin-right: 50px;
	}
	.g-bullshit-oops {
		font-size: 32px;
		line-height: 40px;
		color: #1482f0;
		margin-bottom: 20px;
		animation-fill-mode: forwards;
	}

	.g-bullshit-headline {
		font-size: 20px;
		line-height: 24px;
		color: #222;
		margin-bottom: 10px;
		animation-delay: 0.1s;
		animation-fill-mode: forwards;
	}
	.g-bullshit-info {
		font-size: 13px;
		line-height: 21px;
		color: grey;
		margin-bottom: 30px;
		animation-delay: 0.2s;
		animation-fill-mode: forwards;
	}
}
</style>
