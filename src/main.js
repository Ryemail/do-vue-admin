import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
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

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
