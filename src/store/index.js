import { createStore } from "vuex";

const store = createStore({
  state: {
    lang: null,
  },
  mutations: {
    setI18nLang(state, value) {
      state.lang = value;
      localStorage.setItem("i18nLang", value);
    },
  },
  actions: {},
  modules: {},
});

export default store;