<template>
  <div class="pt-10">
    <div v-if="loading">
      <p>Loading</p>
    </div>
    <div v-else>
      <h1>Latest articles</h1>
      <h2>Current page: {{articles.current_page}}</h2>
      <ul >
        <li v-for="article in articles.data" :key="article.id" class="my-4"><nuxt-link :to="'/articles/'+article.id">
        <h3>{{ article.title }}</h3>
        <!-- <span>Author: {{article.user.name}}</span> -->
        </nuxt-link></li>
      </ul>
      <v-pagination
      :value="page"
      :length="articles.last_page"
      :total-visible="9"
      v-on:input="clickCallback($event)"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading:true
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles
    },
    page(){
      return this.$store.state.articles.articles.current_page
    }
  },
  methods: {
    nextPage(){
      this.$store.dispatch('articles/getNextPage');
    },
    previousPage(){
      this.$store.dispatch('articles/getPreviousPage');
    },
    clickCallback(pageNumber){
      this.$store.dispatch('articles/getByPage',pageNumber);
    }
  },
  async mounted(){
    await this.$store.dispatch('articles/getAllArticles',3);
    this.loading=false
  }
}
</script>