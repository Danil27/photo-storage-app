import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'dev'

export default new Vuex.Store({
  modules: {
    auth,
    login,
  },
  strict: debug,
})