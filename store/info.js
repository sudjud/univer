import firebase from 'firebase/app'


export const state = () => ({
    info: {}
})

export const mutations = {
  setInfo(state, info) {
    state.info = info
  },
  clearInfo(state){
    state.info = {}
  }
}

export const actions = {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {
      }
    },
    getUid(){
      const user = firebase.auth().currentUser
      return user ? user.uid : null 
    }
  }

export const getters = {
    info: s => s.info
}

