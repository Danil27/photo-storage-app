const namespaced = true


const state = () => ({
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
})

const mutations = {
  SET_TOKEN(s, payload) {
    s.token = payload
    localStorage.setItem('token', payload)
  },

  SET_USER(s, payload) {
    s.user = payload
    localStorage.setItem('user', JSON.stringify(payload))
  },

  CLEAR_ALL(s) {
    s.user = null
    s.token = null

    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}

export default {
  namespaced,
  state,
  mutations,
}

function getUserFromLocalStorage() {
  const userData = localStorage.getItem('user')

  if (userData) {
    return JSON.parse(userData)
  }

  return null
}

function getTokenFromLocalStorage() {
  const token = localStorage.getItem('token')

  if (token) {
    return token
  }

  return null
}
