<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button @click="submitLogin"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;Robado con orgullo de tailwind.
      </p>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      email:'',
      password:'',
    }
  },
  methods: {
    async submitLogin (){
      const payload = {
        data: {
          email: this.email,
          password: this.password,
        }
      };
      console.log(payload);
      await this.$auth.loginWith('local',payload)
      .then(response => {
        this.$router.push({path: '/'})
      })
      .catch(function (error) {
        console.log("no entro");
        console.log(error);
      });
    }
  },
  
}
</script>