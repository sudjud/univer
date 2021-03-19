import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const actions = {
  async regUser({commit, dispatch}, {email, password, name}) {
    try {
      await this.$fire.auth.createUserWithEmailAndPassword(email, password)
      const uid = await dispatch('getUid')
      await firebase.database().ref(`users/${uid}/info`).set({
        name
      })
      this.$router.push('/login')
    } catch (e) {
      this.commit('throwErr', e)
    }
    
  },
  getUid(){
    const user = firebase.auth().currentUser
    return user ? user.uid : null 
  }
}
