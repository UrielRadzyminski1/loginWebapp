<template>
  <div class="pt-10 flex flex-col items-center">
    <div class=" xl:w-1/2 w-3/4">
      <p v-if="$fetchState.pending">Fetching articles...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else>
        <h1>Latest articles</h1>
        <h2>Current page: {{articles.current_page}}</h2>
        <ul >
          <li v-for="article in articles.data" :key="article.id" class="my-4"><nuxt-link :to="'/articles/'+article.id">
          <h3>{{ article.title }}</h3>
          <span>Author: {{article.user.name}}</span>
          </nuxt-link></li>
        </ul>
        <paginate
        :container-class="'pagination'"
        :page-class="'paginationNumber'"
        :prev-class="'paginationPrev'"
        :next-class="'paginationNext'"
        :break-view-class="'paginationBreak'"
        :break-view-link-class="'paginationBreak'"
        :active-class="'paginationActive'"
        :value="page"
        :page-count="articles.last_page"
        :click-handler="clickCallback"
        ></paginate>
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
      console.log(pageNumber);
      this.$store.dispatch('articles/getByPage',pageNumber);
    }
  },
  async fetch(){
    await this.$store.dispatch('articles/getAllArticles',3);
  },
  fetchOnServer: false,

}
</script>