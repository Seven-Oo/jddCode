const state = {
  count: 0,
};
const actions = {
  // 匹配路由
  addAction({ commit }, data) {
    commit('setCount', data);
  },
};
const mutations = {
  setCount(state, data) {
    state.count = data;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  localStorage: [],
};
