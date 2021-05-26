<template>
  <div class="register">
    <header class=head>
      <img src="~/assets/img/logo.png">

      <ol class="main_nav">
        <li><NuxtLink to="/" class="nav_item">新規登録</NuxtLink></li>
        <li><NuxtLink to="/login" class="nav_item">ログイン</NuxtLink></li>
      </ol>
    </header>

    <div class="main_form">
      <p>新規登録</p>

      <form class="form">
      <validation-observer ref="obs" v-slot="ObserverProps">
        <validation-provider v-slot="{ errors }" rules="required|min:4|alpha">
        <label class="label">
          <input class="input" type="text" v-model="updateName" placeholder="ユーザーネーム" required/>
        </label><br>
        <div class="error">{{ errors[0] }}</div>
        </validation-provider>


        <label class="label">
          <input class="input" type="password" v-model="email" placeholder="メールアドレス" required/>
        </label><br>

        <label class="label">
          <input class="input" type="text" v-model="password" placeholder="パスワード" required/>
        </label><br>

        <NuxtLink to="/login" class="button" type="submit" @click="register">
          新規登録
        </NuxtLink>
      </form>
      </validation-observer>


    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters['user']
    },
  },
  data () {
    return {
      email: '',
      password: '',
      updateName: '',
    }
  },
  methods: {
      register() {
      this.$store.dispatch('register', {email: this.email, password: this.password, name: this.updateName})
      this.email = '';
      this.password = '';
      this.updateName = '';
    }
  },
}
</script>
<style scoped>
.register {
  height: 100vh;
  width: 100vw;
  background: rgb(23, 30, 55);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.head > img {
  width: 12%;
  height: auto;
}

.main_nav {
  display: flex;
  list-style:none;
  margin-right: 30px;
}

.nav_item {
  color: #fff;
  margin-left: 20px;
  font-weight: bold;
}

.main_form {
  text-align: center;
  background: #fff;
  width: 400px;
  border-radius: 10px;
  margin: 150px auto 0;
}

.main_form p {
  font-weight: bold;
  padding: 15px 0;
}


</style>