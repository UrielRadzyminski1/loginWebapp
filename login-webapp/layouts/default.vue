<template>
  <div>
      <UserNavbar />
      <Nuxt class="pt-12" />
  </div>
</template>
<script>
import UserNavbar from '../components/UserNavbar.vue'
export default {
  components: {
    UserNavbar,
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}
</style>
