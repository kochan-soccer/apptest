<template>
  <div class="register">
    <form class="form" @submit.prevent>
      <label class="label">
        <input class="input" type="text" v-model="updateName" placeholder="ユーザーネーム">
      </label>


      <label class="label">
        <input class="input" type="password" v-model="email" placeholder="メールアドレス">
      </label>


      <label class="label">
        <input class="input" type="text" v-model="password" placeholder="パスワード">
      </label>


      <NuxtLink to="/login" class="button" type="submit" @click="register">
        新規登録
      </NuxtLink>
    </form>
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
      this.email = '';
      this.password = '';
      this.updateName = '';
    }
  },
}
</script>
<style scoped>

</style>