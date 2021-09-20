<template>
	<div class="d-login-layout">
		<div class="d-logo">
			<img class="d-logo-image" src="~@/assets/images/logo.svg" />
			<span>后台管理系统</span>
		</div>
		<div class="d-login-content">
			<div class="d-login-title">DO Element</div>
			<el-form
				class="d-login-body"
				:model="form"
				:rules="rules"
				ref="login"
				label-width="0"
				label-position="top"
				:hide-required-asterisk="true"
			>
				<el-form-item label="账号" prop="user">
					<el-input v-model="form.user" placeholder="请输入账号" />
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input
						placeholder="请输入密码"
						v-model="form.password"
						autocomplete="new-autocomplete"
						show-password
					/>
				</el-form-item>

				<el-form-item>
					<el-button class="width-100" type="primary" @click="onSubmit"> 登录 </el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',

	data() {
		return {
			form: { user: '', password: '' },
			rules: {
				user: [{ required: true, message: '请输入账号' }],
				password: [{ required: true, message: '请输入密码' }],
			},
		};
	},
	methods: {
		onSubmit() {
			const login = this.$refs.login;

			login.validate((valid) => {
				if (valid) {
					this.$router.push({
						path: this.redirect,
						query: {
							Authorization: new Date().getTime(),
						},
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
	},
	computed: {
		redirect() {
			const { redirect = '/' } = this.$route.query;

			return redirect;
		},
	},
};
</script>

<style lang="less" scoped>
.d-login-layout {
	height: 100%;
	position: relative;
	background: #f7f7f7;
	.d-logo {
		position: absolute;
		top: 40px;
		left: 60px;
		font-size: 30px;
		line-height: 40px;
		display: flex;
		align-items: center;
		color: #666;
	}
	.d-logo-image {
		height: 40px;
		margin-right: 8px;
	}
	.d-login-content {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
		width: 400px;
		border-radius: 3px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #ffff;
	}
	.d-login-title {
		height: 60px;
		font-weight: 500;
		font-size: 16px;
		line-height: 60px;
		text-align: center;
		border-bottom: 1px solid #e9e9e9;
	}
	::v-deep .el-form-item__error {
		position: static;
		padding: 6px 0 0;
	}
	::v-deep .d-login-body {
		padding: 30px 40px 25px;
		.el-form-item {
			margin-bottom: 16px;
			.el-form-item__label {
				height: 1;
				line-height: 1;
			}
		}
	}
	.width-100 {
		width: 100%;
		padding: 12px 20px;
		margin-top: 40px;
	}
}
</style>
