
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyApbm-u73qgWEG5QptDsaTzCFDIFRjNBkw",
  authDomain: "toolshop-14931.firebaseapp.com",
  databaseURL: "https://toolshop-14931-default-rtdb.firebaseio.com",
  projectId: "toolshop-14931",
  storageBucket: "toolshop-14931.appspot.com",
  messagingSenderId: "44419510964",
  appId: "1:44419510964:web:b8800270fa1f5003995de1",
  measurementId: "G-B8NE7VREY3"
})

export const actions = {
  async login({commit, dispatch}, {login, pass}){
    try {
      await this.$fire.auth().signInWithEmailAndPassword(login, pass)
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





