<template>
  <div class="pt-10">
    <p v-if="$fetchState.pending">Fetching articles...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Latest articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id"><nuxt-link :to="'/articles/'+article.id">{{ article.title }}</nuxt-link></li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles:[]
    }
  },
  async fetch() {
      this.$axios.get('articles',{
        data: {page:1},
      }).then( (response)=>{
        this.articles = response.data.data;
      })
  }
}
</script>