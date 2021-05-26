<template>
  <div class="register">
    <div class="header">
      <img src="~/assets/img/logo.png">

      <ol class="nav">
        <li><NuxtLink to="/" class="nav_item">新規登録</NuxtLink></li>
        <li><NuxtLink to="/login" class="nav_item">ログイン</NuxtLink></li>
      </ol>
    </div>


    <div class="main_form">
      <p>ログイン</p>
      <form class="form">
      <label class="label">
        <input class="input" type="email" v-model="email" placeholder="メールアドレス">
      </label>
      <label class="label">
        <input class="input" type="password" v-model="password" placeholder="パスワード">
      </label>

      <NuxtLink to="login">
        <button class="btn" @click="login">ログイン</button>
      </NuxtLink>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/main')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
</script>

<style scoped>

</style>