const namespaced = true


const state = () => ({
  token: getTokenFromLocalStorage(),
})

const mutations = {
  SET_TOKEN(s, payload) {
    s.token = payload
    localStorage.setItem('token', payload)
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
  console.log(token)

  if (token) {
    return token
  }

  return null
}
