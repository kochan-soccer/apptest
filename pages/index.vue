
<template>
  <div class="page">
    <p>user.uid: {{ user.uid }}</p>
    <p>user.email: {{ user.email }}</p>
    <p>user.name: {{ user.name }}</p>
    <input v-model="updateName" type="text">
    <button @click="update">update</button>



    <form class="form" @submit.prevent>
      <label class="label">
        <span class="label">
          email
        </span>
        <input class="input" type="text" v-model="email">
      </label>


      <label class="label">
        <span class="label">
          password
        </span>
        <input class="input" type="password" v-model="password">
      </label>


      <button class="button" type="submit" @click="login">
        Login
      </button>
    </form>
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
  computed: {
    user () {
      return this.$store.getters['user']
    },
  },
  methods: {
    update () {
      this.$store.dispatch('update', this.updateName)
    },
    login(email, password) {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
  },
}
</script>