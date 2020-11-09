<template>
  <div class="justify-between fixed flex bg-green-400 w-full">
      <div v-if="$auth.loggedIn">
        Hola {{$auth.user.name}}
      </div>
      <div v-else>
        Log in!
        Register!
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>