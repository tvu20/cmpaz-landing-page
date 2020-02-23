import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      language: 'en',

      quiz: {
        skinConcern: ''
      }
    },

    mutations: {
      quizSkinConcern(state, data) {
        state.quiz.skinConcern = data
      },
    },

    getters: {
      rWH() {
        return window.innerHeight + 'px'
      }
    }
  })
}

export default createStore
