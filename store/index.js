import firebase from '@/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    name: '',
  },
})


export const actions = {
  register ({ dispatch }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
      console.log(user)
      dispatch('update', payload.name)
    }).catch(function (error) {
      console.log({'code':error.code, 'message':error.message})
    })
  },
  update ({ context }, name) {
    firebase.auth().currentUser.updateProfile({
      displayName: name
    })
      .then(()=> {
        console.log('Update successful')
      })
      .catch((error)=> {
        console.log(error)
      })
  },
}

export const mutations = {
  getData (state, user) {
    state.user = user
  },
}