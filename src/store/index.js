import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('respina-token') || '',
    status: '',
    user_logged_in: localStorage.getItem('user') || '',
    selected_categories: [],
    book_per_page: 8,
    User: [],
    Author: [],
    Category: [],
    Book: []
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,

    bookLists: state => {
      if (state.selected_categories.length === 0) {
        //return state.Book;
        return state.Book.filter((book, index) => {return index < 30}); // max number books 30
      }
      return state.Book.filter(book => {return state.selected_categories.includes(book.category_id)});
    }
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading'
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    AUTH_USER: (state, user) => {
      state.user_logged_in = user
    },
    AUTH_ERROR: (state) => {
      state.status = 'error'
    },
    UPDATE_SELECTED_CATEGORY: (state, payload) => {
      state.selected_categories = payload;
    }
  },
  actions: {
    AUTH_REQUEST: ({commit, state}, user) => {
      return new Promise((resolve, reject) => { 
        commit('AUTH_REQUEST');
        axios.get('/Users.json')
        .then(res=>{
          state.User = res.data;
          let rf = state.User.filter((usr) => {return (usr.email === user.email && usr.password === user.password)});
          if (rf.length > 0) {
            const token = "sample_token_respina";
            localStorage.setItem('respina-token', token);
            localStorage.setItem('user', rf[0].id);
            commit('AUTH_SUCCESS', token);
            commit('AUTH_USER', rf[0].id);
            resolve(token);
          }
          else {
            commit('AUTH_ERROR');
            localStorage.removeItem('respina-token');
            localStorage.removeItem('user');
            reject("err");
          }
        });
      })
    },

    AUTH_LOGOUT: ({commit}) => {
      return new Promise((resolve) => {
        commit('AUTH_SUCCESS', '');
        localStorage.removeItem('respina-token');
        localStorage.removeItem('user');
        resolve();
      })
    }
  },
  modules: {
  }
})
