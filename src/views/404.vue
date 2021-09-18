<template>
	<div class="dom-page-404">
		<img class="dom-bullshit-image" src="~@/assets/images/404.png" />
		<div class="dom-bullshit">
			<div class="bullshit-oops">OOPS!</div>
			<div class="bullshit-headline">
				The webmaster said that you can not enter this page...
			</div>
			<div class="bullshit-info">
				Please check that the URL you entered is correct, or click the button below to
				return to the homepage.
			</div>
			<el-button
				type="primary"
				round
				size="small"
				@click="$router.back()"
				class="dom-bullshit-return"
			>
				Back
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Error404',
};
</script>

<style lang="less" scoped>
.dom-page-404 {
	display: flex;
	align-items: center;
	padding: 100px 100px;
	.dom-bullshit-image {
		width: 600px;
	}
	.bullshit-oops {
		font-size: 32px;
		line-height: 40px;
		color: #1482f0;
		margin-bottom: 20px;
		animation-fill-mode: forwards;
	}

	.bullshit-headline {
		font-size: 20px;
		line-height: 24px;
		color: #222;
		margin-bottom: 10px;
		animation-delay: 0.1s;
		animation-fill-mode: forwards;
	}
	.bullshit-info {
		font-size: 13px;
		line-height: 21px;
		color: grey;
		margin-bottom: 30px;
		animation-delay: 0.2s;
		animation-fill-mode: forwards;
	}
}
</style>
