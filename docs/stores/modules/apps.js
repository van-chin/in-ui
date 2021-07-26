const state = {
  test: "test"
};
// 外部可以通过提交mutation来修改state中的值
// this.$store.commit("SET_LANGUAGE")
const mutations = {
  SET_LANGUAGE: (state, language) => {
    // 修改state并将其保存在Cookies中，这样用户下次打开仍然是上次选择的国际化状态
    state.language = language;
    // Cookies.set('language', language)
  }
};

const getters = {
  test: state => state.test
};

const actions = {
  setLanguage({ commit }, language) {
    // debugger
    commit("SET_LANGUAGE", language);
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
