const Mock = require('mockjs');

const { parseQuery } = require('do-element/lib/utils');
const Random = Mock.Random;

function createMoble() {
	const prefixArray = ['130', '131', '132', '133', '135', '137', '138', '170', '187', '189'],
		random = Math.floor(10 * Math.random());
	let prefix = prefixArray[random];

	for (let j = 0; j < 8; j++) {
		prefix = prefix + Math.floor(Math.random() * 10);
	}
	return prefix;
}

export function createTable(config) {
	console.log(config);
	const message = {
		code: 200,
		message: '请求成功',
		data: {
			data: [],
			total: 50,
		},
	};

	const param = config.body || parseQuery(config.url);

	for (let i = 0; i < param.limit * 1; i++) {
		const item = Mock.mock({
			id: Random.increment(1),
			name: `${Random.clast()}${Random.cname()}`,
			time: Random.now('yyyy-MM-dd HH:mm:ss SS'),
			mobile: createMoble(),
			status: Random.d4(),
			address: Mock.mock('@county(true)'),
		});

		message.data.data.push(item);
	}
	return message;
}
