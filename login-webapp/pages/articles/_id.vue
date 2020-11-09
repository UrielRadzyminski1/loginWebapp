<template>
  <div class="pt-10">
    <p v-if="$fetchState.pending">Fetching article...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 class="my-4 ">{{article.title}}</h1>
      <p>{{article.content}}</p>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article:{}
    }
  },
  async fetch() {
      this.$axios.get('articles/'+this.$route.params.id,{
      }).then( (response)=>{
        this.article = response.data;
      })
  }
}
</script>