<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        login-webapp
      </h1>
      <form v-on:submit.prevent="onSubmit" method="POST" action="localhost:8000/api/test/create" accept-charset="UTF-8" id="mainForm">
        <label for="data">Data</label>
        <input v-model="postData" type="text" name="data" id="data">
        <input  type="submit" value="Submit!">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      postData:''
    }
  },
  methods: {
    onSubmit (){
      this.$axios.post('test/create', {
        data: this.postData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
