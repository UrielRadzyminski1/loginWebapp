<template>
  <div class="justify-between fixed flex bg-green-400 w-full">
      <v-btn text to="/">Home!</v-btn>
      <div v-if="$auth.loggedIn" class="inline-flex w-auto">
        <user-tooltip text />
        <v-btn text @click="$router.push({path: '/articles/new'})" v-if="$auth.hasScope('writer')">New article</v-btn>
        <v-btn text @click="logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Log in</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
  </div>
</template>
<script>
import UserTooltip from './UserTooltip.vue'
export default {
  components: {
    UserTooltip,
  },
  methods: {
    logout(){
      this.$axios.post('logout')
      .then((response) => {
        console.log(response);
        this.$router.go({path: '/login'})
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
}
</script>