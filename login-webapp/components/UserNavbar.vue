<template>
  <div class="justify-between fixed flex bg-green-400 w-full">
      <v-btn text to="/">Home!</v-btn>
      <div v-if="$auth.loggedIn">
        Hola {{$auth.user.name}}
        <v-btn text @click="logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Log in</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout(){
      this.$axios.post('logout')
      .then((response) => {
        console.log(response);
        this.$router.push({path: '/'})
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
}
</script>