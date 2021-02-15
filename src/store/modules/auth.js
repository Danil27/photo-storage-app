const namespaced = true

const state = () => ({
  token: getTokenFromLocalStorage(),
})

const mutations = {
  SET_TOKEN(s, playload) {
    s.token = playload
    localStorage.setItem('token', playload.token)
  },

  CLEAR_ALL(s) {
    s.token = null
    localStorage.removeItem('token')
  }
}

export default {
  namespaced,
  state,
  mutations,
}

function getTokenFromLocalStorage() {
  const token = localStorage.getItem('token')
  if (token) {
    return token
  }
  return null
}
