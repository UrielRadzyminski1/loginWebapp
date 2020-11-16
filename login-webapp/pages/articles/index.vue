<template>
  <div class="pt-10">
    <div>
      <h1>Latest articless</h1>
      <h2>Current page: {{articles.current_page}}</h2>
      <ul >
        <li v-for="article in articles.data" :key="article.id"><nuxt-link :to="'/articles/'+article.id">{{ article.title }}</nuxt-link></li>
      </ul>
      <div class="flex">
      <v-btn @click="previousPage">Previous Page</v-btn>
      <v-btn @click="nextPage">Next Page</v-btn>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles
    }
  },
  methods: {
    nextPage(){
      this.$store.dispatch('articles/getNextPage');
    },
    previousPage(){
      this.$store.dispatch('articles/getPreviousPage');
    }
  },

  mounted(){
    this.$store.dispatch('articles/getAllArticles',3);
  }
}
</script>