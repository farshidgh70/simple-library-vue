import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('respina-token') || '',
    status: '',
    selected_categories: [],
    book_per_page: 8,

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
        translator: 'ارسلان فصیحی',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 2,
        author_id: 2,
        category_id: 2,
        title: 'کتاب 2',
        translator: 'ارسلان فصیحی 2',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 3,
        author_id: 3,
        category_id: 3,
        title: 'کتاب 3',
        translator: 'ارسلان فصیحی 3',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 4,
        author_id: 4,
        category_id: 4,
        title: 'کتاب 4',
        translator: 'ارسلان فصیحی 4',
        summary: '',
        image: 'book4.png'
      },
      {
        id: 5,
        author_id: 1,
        category_id: 5,
        title: 'کتاب 5',
        translator: 'ارسلان فصیحی 5',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 6,
        author_id: 2,
        category_id: 6,
        title: 'کتاب 6',
        translator: 'ارسلان فصیحی 6',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 7,
        author_id: 3,
        category_id: 7,
        title: 'کتاب 7',
        translator: 'ارسلان فصیحی 7',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 8,
        author_id: 4,
        category_id: 8,
        title: 'کتاب 8',
        translator: 'ارسلان فصیحی 8',
        summary: '',
        image: 'book4.png'
      },

      {
        id: 9,
        author_id: 1,
        category_id: 9,
        title: 'کتاب 9',
        translator: 'ارسلان فصیحی',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 10,
        author_id: 2,
        category_id: 10,
        title: 'کتاب 10',
        translator: 'ارسلان فصیحی 2',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 11,
        author_id: 3,
        category_id: 11,
        title: 'کتاب 11',
        translator: 'ارسلان فصیحی 3',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 12,
        author_id: 4,
        category_id: 12,
        title: 'کتاب 12',
        translator: 'ارسلان فصیحی 4',
        summary: '',
        image: 'book4.png'
      },
      {
        id: 13,
        author_id: 1,
        category_id: 13,
        title: 'کتاب 13',
        translator: 'ارسلان فصیحی 5',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 14,
        author_id: 2,
        category_id: 14,
        title: 'کتاب 14',
        translator: 'ارسلان فصیحی 6',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 15,
        author_id: 3,
        category_id: 15,
        title: 'کتاب 15',
        translator: 'ارسلان فصیحی 7',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 16,
        author_id: 4,
        category_id: 16,
        title: 'کتاب 16',
        translator: 'ارسلان فصیحی 8',
        summary: '',
        image: 'book4.png'
      },

      {
        id: 17,
        author_id: 1,
        category_id: 1,
        title: 'کتاب 17',
        translator: 'ارسلان فصیحی',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 18,
        author_id: 2,
        category_id: 2,
        title: 'کتاب 18',
        translator: 'ارسلان فصیحی 2',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 19,
        author_id: 3,
        category_id: 3,
        title: 'کتاب 19',
        translator: 'ارسلان فصیحی 3',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 20,
        author_id: 4,
        category_id: 4,
        title: 'کتاب 20',
        translator: 'ارسلان فصیحی 4',
        summary: '',
        image: 'book4.png'
      },
      {
        id: 21,
        author_id: 1,
        category_id: 5,
        title: 'کتاب 21',
        translator: 'ارسلان فصیحی 5',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 22,
        author_id: 2,
        category_id: 6,
        title: 'کتاب 22',
        translator: 'ارسلان فصیحی 6',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 23,
        author_id: 3,
        category_id: 7,
        title: 'کتاب 23',
        translator: 'ارسلان فصیحی 7',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 24,
        author_id: 4,
        category_id: 8,
        title: 'کتاب 24',
        translator: 'ارسلان فصیحی 8',
        summary: '',
        image: 'book4.png'
      },

      {
        id: 25,
        author_id: 1,
        category_id: 1,
        title: 'کتاب 25',
        translator: 'ارسلان فصیحی',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 26,
        author_id: 2,
        category_id: 3,
        title: 'کتاب 26',
        translator: 'ارسلان فصیحی 2',
        summary: '',
        image: 'book2.png'
      },
      {
        id: 27,
        author_id: 3,
        category_id: 5,
        title: 'کتاب 27',
        translator: 'ارسلان فصیحی 3',
        summary: '',
        image: 'book3.png'
      },
      {
        id: 28,
        author_id: 4,
        category_id: 7,
        title: 'کتاب 28',
        translator: 'ارسلان فصیحی 4',
        summary: '',
        image: 'book4.png'
      },
      {
        id: 29,
        author_id: 1,
        category_id: 9,
        title: 'کتاب 29',
        translator: 'ارسلان فصیحی 5',
        summary: '',
        image: 'book1.png'
      },
      {
        id: 30,
        author_id: 2,
        category_id: 11,
        title: 'کتاب 30',
        translator: 'ارسلان فصیحی 6',
        summary: '',
        image: 'book2.png'
      },
    ],
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
