<template>
  <div class="main_content">
    <div class="guide">
      <img src="~/assets/img/logo.png" class="logo">

      <div class="point" @click="home">
        <img src="~/assets/img/home.png" @click="home">
        <p>ホーム</p>
      </div>

      <div class="point" @click="logout">
        <img src="~/assets/img/logout.png">
        <p>ログアウト</p>
      </div>
    </div>

    <div class="share">
      <p>シェア</p>
      <form>
        <textarea cols="30" rows="6" class="textarea" maxlength="120"></textarea>
      </form>
      <button class="btn" @click="share">シェアする</button>
    </div>
</div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  computed: {
    async insertContact() {
      const sendData = {
        
      };
      await this.$axios.post("http://127.0.0.1:8000/api/post/", sendData);
      this.getContact();
    },
  },
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
      this.$router.replace('/home', () => {})
    },

    share() {
      this.$store.dispatch('share')
    },
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
  margin-left: 20px;
  margin-bottom: 30px;
}

.logo {
  width: 15%;
  margin: 10px 0;
}

.point {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  width: 150px;
  cursor: pointer;
}

.point img {
  width: 25px;
  height: auto;
}

.point p {
  color: #fff;
  margin-left: 20px;
}


/* share */
.share {
  margin-left: 20px;
}

.share p {
  color: #fff;
  margin-bottom: 20px;
}

.textarea {
  background: rgb(30, 38, 77);
  border: solid 1px #fff;
  border-radius: 10px;
}

.share .btn {
  background: rgb(120, 0, 255);
  padding: 5px 15px;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  margin: 20px 0 0  140px;
}
</style>