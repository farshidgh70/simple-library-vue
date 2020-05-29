import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('respina-token') || '',
    status: '',
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading'
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    AUTH_ERROR: (state) => {
      state.status = 'error'
    },
  },
  actions: {
    AUTH_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => { 
        commit('AUTH_REQUEST')
        if (user.email === "demo@respina.com" && user.password === "@Respina1") {
          const token = "sample_token_respina";
          localStorage.setItem('respina-token', token);
          commit('AUTH_SUCCESS', token);
          resolve(token);
        }
        else {
          commit('AUTH_ERROR');
          localStorage.removeItem('respina-token');
          reject("err");
        }
      })
    },

    AUTH_LOGOUT: ({commit}) => {
      return new Promise((resolve) => {
        commit('AUTH_SUCCESS', '');
        localStorage.removeItem('respina-token');
        resolve();
      })
    }
  },
  modules: {
  }
})
