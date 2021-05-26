import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const state = () => ({
  reqInfo: {}
})

export const actions = {

  async sendData({commit, dispatch}, {text, question}){
    const fbdb = firebase.database()
    const uid = await dispatch('getUid')
    fbdb.ref(`users/${uid}/requests`).set({
      request: text,
      answer: question
    })
    alert('Заявка отправлена')
    setTimeout(()=>{
      this.$router.push('/')
    }, 3000)
  },

  getUid(){
    const user = firebase.auth().currentUser
    return user ? user.uid : null 
  },

  async getInfo(){
    const uid = await dispatch('getUid')
    const fbdb = firebase.database()
    // const name = (await fbdb.ref(`/users/${uid}/info/name`).once('value')).val()
    // const answer = (await fbdb.ref(`/users/${uid}/requests/asnwer`).once('value')).val()
    // const request = (await fbdb.ref(`/users/${uid}/requests/request`).once('value')).val()
    // const fullReq = [name, answer, request]
    // commit('setReq', fullReq)
    const reqInfo = (await fbdb.ref(`/users`).once('value')).val()
    commit('setReq', reqInfo)
  }
}

export const mutations = {
  setReq(state, reqInfo) {
    state.reqInfo = reqInfo
  }
}

export const getters = {
  reqInfo: s => s.reqInfo
}