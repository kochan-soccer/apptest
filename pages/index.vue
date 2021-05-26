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
    <p>新規登録</p>

    <validation-observer ref="obs" v-slot="ObserverProps">
      <form class="form" @submit.prevent>
        <validation-provider rules="required|max:20">
          <label class="label">
            <input class="input" type="text" v-model="updateName" placeholder="ユーザーネーム">
          </label>
        </validation-provider>

        <validation-provider rules="required|email">
          <label class="label">
            <input class="input" type="email" v-model="email" placeholder="メールアドレス">
          </label>
        </validation-provider>

        <validation-provider rules="required|min:6">
          <label class="label">
            <input class="input" type="password" v-model="password" placeholder="パスワード">
          </label>
        </validation-provider>


        <NuxtLink to="login">
          <button @click="register" class="btn" :disabled="ObserverProps.invalid || !ObserverProps.validated">
            新規登録
          </button>
        </NuxtLink>
      </form>
    </validation-observer>
    </div>
  </div>
</template>

<script>
export default {
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
      this.email = '',
      this.password = '',
      this.updateName = '';
    }
  },
}
</script>

<style>
.register {
  background: rgb(30, 38, 77);
  height: 100vh;
  width: 100vw;
}


/* header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.header img {
  width: 12%;
  height: auto;
}

.nav {
  display: flex;
  list-style: none;
}

.nav_item {
  font-weight: bold;
  color: #fff;
  margin-right: 20px;
}

.nav_item:hover {
  opacity: 0.8;
}


/* フォーム */

.main_form {
  width: 400px;
  background: #fff;
  text-align: center;
  margin: 130px auto;
  padding: 20px;
  border-radius: 10px;
}

.main_form p {
  margin-bottom: 20px;
  font-weight: bold;
}

.label {
  display: block;
}

.input {
  padding: 10px 0 10px 10px;
  width: 300px;
  margin-bottom: 20px;
}

.btn {
  background: rgb(120, 0, 255);
  padding: 9px 20px;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
}

.btn:hover {
  opacity: 0.7;
}
</style>