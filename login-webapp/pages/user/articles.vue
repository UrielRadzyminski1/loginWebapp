<template>
    <div class="pt-20">
        <ul>
            <ul>
              <li v-for="article in articles.data" :key="article.id"><nuxt-link :to="'/articles/'+article.id">{{ article.title }}</nuxt-link></li>
            </ul>
        </ul>
    <div class="flex">
      <v-btn @click="previousPage">Previous Page</v-btn>
      <v-btn @click="nextPage">Next Page</v-btn>
    </div>
    </div>
  
</template>

<script>

export default {
  data() {
    return {
      loading:true,
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
  mounted() {

    this.$store.dispatch('articles/getUserArticles', this.$auth.user.id);
  }
}
</script>