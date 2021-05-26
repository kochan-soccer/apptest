ter.vueJavaScript
<template>
  <div class="register">

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
    register () {
      this.$store.dispatch('register', {email: this.email, password: this.password, name: this.updateName})
      this.email = '',
      this.password = '',
      this.updateName = '';
    }
  },
}
</script>
