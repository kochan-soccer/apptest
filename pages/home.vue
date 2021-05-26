<template>
<div class="main_content">
  <div class="guide">
    <img src="~/assets/img/logo.png" class="logo">

    <div class="point" @click="home">
      <img src="~/assets/img/home.png">
      <p>ホーム</p>
    </div>

    <div class="point" @ckick="logout">
      <img src="~/assets/img/logout.png">
      <p>ログアウト</p>
    </div>
  </div>
</div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/')
        })
    },

    home() {
      this.$router.replace('/home')
    }
  },
}
</script>

<style scoped>
.main_content {
  background: rgb(30, 38, 77);
  height: 100vh;
  width: 100vw;
}

.guide {
  padding-left: 20px;
}

.logo {
  width: 7%;
  margin: 10px 0;
}

.point {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.point img {
  width: 2%;
  height: auto;
}

.point p {
  color: #fff;
  margin-left: 20px;
}
</style>