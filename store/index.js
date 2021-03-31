
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const actions = {
  async login({commit, dispatch}, {email, pass}){
    try {
      await this.$fire.auth.signInWithEmailAndPassword(email, pass)
      .then(() => commit('setToken', 'true'))
      this.$router.push('/')
    } catch (e) {
      commit('throwErr', e)
    }
  },
  async logout({commit}){
    await this.$fire.auth.signOut()
    commit('clearToken')
    commit('clearInfo')
  },
  async nuxtServerInit({dispatch}){
    await dispatch('users/fetchUsers')
  }
}

export const state = () => ({
  token: null,
  error : null
})

export const mutations = {
  setToken(state, token){
    state.token = token
  },
  clearToken(state){
    state.token = null 
  },
  throwErr(state, error){
    state.error = error
  },
  clearErr(state){
    state.error = null
  }
}

export const getters = {
  isAuth: state => !!state.token,
  isNotAuth: state => !state.token,
  error: s => s.error
}






