<template>
  <div class="justify-between fixed flex bg-green-400 w-full">
      
      <div class="flex">
        <div class="button" @click="$router.push({path: '/'})">Home!</div>
        <div class="button" @click="$router.push({path: '/articles'})">All articles</div>
      </div>
      <div v-if="$auth.loggedIn" class="inline-flex w-auto">
        <user-tooltip />
        <div class="button" @click="$router.push({path: '/articles/new'})" v-if="$auth.hasScope('create articles')">New article</div>
        <div class="button" @click="logout()">Logout</div>
      </div>
      <div v-else>
        <div class="button" @click="$router.push({path: '/login'})">Log in</div>
        <div class="button" @click="$router.push({path: '/register'})">Register</div>
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