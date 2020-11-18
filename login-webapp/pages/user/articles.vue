<template>
<div class="flex flex-col items-center">
  <div class="xl:w-1/2 w-3/4">
    <p v-if="$fetchState.pending">Fetching articles...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <div class="pt-20">
        <ul>
          <li v-for="article in articles.data" :key="article.id"><nuxt-link class="userArticleLink" :to="'/articles/'+article.id">
          <h3>{{ article.title }}</h3></nuxt-link></li>
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
</div>
    
  
</template>

<script>

export default {
  middleware:'logged',
  data() {
    return {
      loading:true,
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
  async fetch() {

    await this.$store.dispatch('articles/getUserArticles', this.$auth.user.id);
    this.loading =false;
  },
  fetchOnServer: false,
}
</script>