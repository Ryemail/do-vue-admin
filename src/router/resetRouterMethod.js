import VueRouter from 'vue-router';

const routerPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch((error) => error);
};
