// 监听页面 显示 隐藏
export function visibilitychange(callback) {
	const hiddenProperty =
		'hidden' in document
			? 'hidden'
			: 'webkitHidden' in document
			? 'webkitHidden'
			: 'mozHidden' in document
			? 'mozHidden'
			: 'msHidden' in document
			? 'msHidden'
			: null;
	const eventType = hiddenProperty.replace(/hidden/i, 'visibilitychange');

	const onVisibilityChange = function () {
		callback && callback(document[hiddenProperty]);
	};

	if (typeof document[hiddenProperty] !== 'undefined') {
		document.addEventListener(eventType, onVisibilityChange);
	}
}
