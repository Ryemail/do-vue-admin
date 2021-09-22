import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { getAccountInfo } from '../api/global';

Vue.use(Vuex);

const platform = {
	product: 'demo', // 产品分类名
	subproduct: 'admin', // 产品名
};

function createMenu(menu) {
	return menu.map((val) => {
		const item = { path: val.en_name, title: val.name };

		if (val.child) item.child = createMenu(val.child);

		return item;
	});
}

export default new Vuex.Store({
	state: {
		menu: [],
		token: '',
		title: 'Admin',
	},
	mutations: {
		updateToken(state, val) {
			state.token = val;
		},
		updateTitle(state, val) {
			state.title = val;
		},
		updateMenu(state, val) {
			state.menu = val;
		},
	},
	actions: {
		async getInfo({ commit, state }) {
			const { code, data } = await getAccountInfo(state.token);

			if (code === 200) {
				const { menu_list } = data;

				const product = menu_list.find((val) => val.en_name === platform.product) || {};

				if (product.child) {
					const subproduct = product.child.find(
						(val) => val.en_name === platform.subproduct
					);

					const { list = [] } = subproduct;

					commit('updateTitle', subproduct ? subproduct.name : '');

					commit('updateMenu', createMenu(list));
				}
			}
		},
		resetLoginStatus({ commit }) {
			commit('updateMenu', []);
			commit('updateTitle', '');
			commit('updateToken', null);
		},
	},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
			reducer(state) {
				return {
					token: state.token,
					menu: state.menu,
					title: state.title,
				};
			},
		}),
	],
});
