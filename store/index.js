
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const actions = {
  async login({commit, dispatch}, {email, pass}){
    try {
      await this.$fire.auth().signInWithEmailAndPassword(email, pass)
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  logout({commit}){
    commit('clearToken')
    window.location.href = "/";
  },
  async nuxtServerInit({dispatch}){
    await dispatch('users/fetchUsers')
  }
}

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token){
    state.token = token
  },
  clearToken(state){
    state.token = null 
  }
}

export const getters = {
  isAuth: state => !!state.token,
  isNotAuth: state => !state.token
}





