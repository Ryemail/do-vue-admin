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
								{ en_name: 'link', name: 'Link' },
								{ en_name: 'dialog', name: 'Dialog' },
								{ en_name: 'moddssal', name: 'Modal' },
								{ en_name: 'table', name: 'Table' },
								{ en_name: 'form', name: 'Form' },
								{ en_name: 'upload', name: 'Upload' },
								{ en_name: 'pageTabs', name: 'Tabs' },
								{ en_name: 'steps', name: 'Steps' },
								{ en_name: 'timeline', name: 'TimeLine' },
							],
						},
					],
				},
			],
			token: '',
		},
	};
}
