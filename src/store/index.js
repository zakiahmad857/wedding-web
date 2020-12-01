import { createStore } from 'vuex';

export default createStore({
  state: {
    isPlay: false
  },
  mutations: {
    PLAY_MUSIC(state, _) {
      state.isPlay = true;
    },
    STOP_MUSIC(state, _) {
      state.isPlay = false;
    }
  },
  actions: {
    playMusic({ commit }) {
      commit('PLAY_MUSIC');
    },
    stopMusic({ commit }) {
      commit('STOP_MUSIC');
    }
  },
  modules: {}
});
