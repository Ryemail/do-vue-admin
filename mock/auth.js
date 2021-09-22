// import { mock } from 'mockjs';

import { parseQuery } from 'do-element/lib/utils';

export function createAccountInfo(config) {
	const param = parseQuery(config.url);

	if (!param.token) {
		return {
			code: 401,
			message: 'Token 不存在',
			data: null,
		};
	}

	return {
		code: 200,
		data: {
			menu_list: [
				{
					en_name: 'demo',
					name: 'DEMO',
					child: [
						{
							en_name: 'admin',
							name: 'Do Vue Admin',
							list: [
								{ en_name: 'link', name: 'Link 文字链接' },
								{
									en_name: 'dialog',
									name: 'Dialog 弹窗',
									child: [
										{ en_name: 'modaeeee', name: 'Modal 提示框' },
										{ en_name: 'table', name: 'Table 表格' },
										{ en_name: 'form', name: 'Form 表单' },
									],
								},
								{ en_name: 'upload', name: 'Upload 文件上传' },
								{ en_name: 'pageTabs', name: 'Tabs 标签页' },
								{ en_name: 'steps', name: 'Steps 步骤条' },
								{ en_name: 'timeline', name: 'TimeLine 时间轴' },
								{ en_name: 'statistic', name: 'Satistic 数值统计' },
							],
						},
					],
				},
			],
			token: '',
		},
	};
}
