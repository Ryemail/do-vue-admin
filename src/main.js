import Vue from 'vue';
import 'do-element/lib/element/index.css';
import 'do-element/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import DoElement from 'do-element';

Vue.use(ElementUI);
Vue.use(DoElement);

import App from './App.vue';
import router from './router';
import store from './store';
import './styles/normalize.less';
import './styles/fonts/iconfont.css';

import './permission';

if (process.env.NODE_ENV === 'development') {
	require('../mock');
}

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
