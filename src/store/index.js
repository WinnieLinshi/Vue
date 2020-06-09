import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//定義資料
    articles: [],
    searchKey: "",
    account: "Winnie",
  },
  mutations: {//既定寫法
    featchArticles: (state, payload) => {
      state.articles = payload
    },
    changeSearchKey: (state, payload) => {
      state.searchKey = payload
    }
  },

  actions: {
    //既定寫法  
    fetchArticles: async ({ commit }) => {
      const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
      const result = await axios.get(api)
      const payload = result.data.data
      commit('featchArticles', payload)
    },
    changeSearchKey: ({ commit }, payload) => {//寫payload原因為資料隨時都可能變動
      commit('changeSearchKey', payload)
    }
  },
  modules: { //模組化
  },
  getters: {
    filterBySearchKey: state => {
      if (!state.searchKey)
        return state.articles
      else
        return state.articles.filter(art => art.title.match(state.searchKey) || art.content.match(state.searchKey))
    }

  }
})
