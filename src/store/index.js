import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('respina-token') || '',
    status: '',
    selected_categories: [],

    User: [
      {
        id: 1,
        email: "demo@respina.com",
        password: "@Respina1",
        full_name: {
          fa: "شرکت رسبینا",
          en: "Respina.Co"
        }
      }
    ],

    Author: [
      {id: 1, full_name: "عرفان ملکی"},
      {id: 2, full_name: "استیو تولنز"},
      {id: 3, full_name: "خاویر کرمنت"},
      {id: 4, full_name: "الیف شافاک"}
    ],

    Category: [
      {id: 1, title: "کتاب های انگلیسی"},
      {id: 2, title: "کتاب های رایگان"},
      {id: 3, title: "مجلات"},
      {id: 4, title: "میکروبوک"},
      {id: 5, title: "بسته های شگفت انگیز کتاب"},
      {id: 6, title: "داستان و رمان"},
      {id: 7, title: "شعر"},
      {id: 8, title: "تبلیغات و بازاریابی"},
      {id: 9, title: "روانشناسی"},
      {id: 10, title: "مدیریت"},
      {id: 11, title: "دین و عرفان"},
      {id: 12, title: "کتاب صوتی"},
      {id: 13, title: "سبک زندگی"},
      {id: 14, title: "زنان و فمینیسم"},
      {id: 15, title: "تاریخ"},
      {id: 16, title: "فلسفه"},
      {id: 17, title: "اقتصاد"},
      {id: 18, title: "حقوق"},
      {id: 19, title: "کودک"},
      {id: 20, title: "نوجوان"},
      {id: 21, title: "هنر"},
      {id: 22, title: "دانشنامه جهان اسلام"},
      {id: 23, title: "درسی و کمک درسی"},
      {id: 24, title: "دانشگاهی"},
    ],
    
    Book: [
      {
        id: 1,
        author_id: 1,
        category_id: 1,
        title: 'کتاب 1',
        translator: 'مترجم',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 2,
        author_id: 2,
        category_id: 2,
        title: 'کتاب 2',
        translator: 'مترجم',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 3,
        author_id: 3,
        category_id: 3,
        title: 'کتاب 3',
        translator: 'مترجم',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 4,
        author_id: 4,
        category_id: 4,
        title: 'کتاب 4',
        translator: 'مترجم',
        summary: '',
        image: 'book4.png'
      },
      {
        id: 5,
        author_id: 1,
        category_id: 5,
        title: 'کتاب 5',
        translator: 'مترجم',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 6,
        author_id: 2,
        category_id: 6,
        title: 'کتاب 6',
        translator: 'مترجم',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 7,
        author_id: 3,
        category_id: 7,
        title: 'کتاب 7',
        translator: 'مترجم',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 8,
        author_id: 4,
        category_id: 8,
        title: 'کتاب 8',
        translator: 'مترجم',
        summary: '',
        image: 'book4.png'
      }
    ],
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,

    bookLists: state => {
      if (state.selected_categories.length === 0) {
        return state.Book;
      }
      return state.Book.filter(book => {return state.selected_categories.includes(book.id)});
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
        commit('AUTH_REQUEST')
        if (state.User.filter((usr) => {return (usr.email === user.email && usr.password === user.password)}).length > 0) {
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
