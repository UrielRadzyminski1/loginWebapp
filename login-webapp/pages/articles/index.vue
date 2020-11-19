<template>
  <div class="pt-20 pb-10 flex flex-col items-center min-h-screen">
    <div class=" xl:w-1/2 w-3/4 flex flex-grow">


      <div v-if="$fetchState.pending" class="flex flex-grow items-center justify-center">          
          <svg 
          class="animate-spin h-5 w-5" 
          viewBox="0 0 24 24">
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
      </div>
      <p v-else-if="$fetchState.error">An error occurred :(</p>


      <div v-else class="flex flex-col flex-grow">
        <h1>All articles</h1>


        <div v-if="articleLoading"  class="flex items-center justify-center flex-grow">
          <svg 
        class="animate-spin h-5 w-5" 
        viewBox="0 0 24 24">
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        </div>


        <div v-else  class="flex-grow">
          <h2>Current page: {{articles.current_page}}</h2>
          <ul class="divide-y">
            <li v-for="article in articles.data" :key="article.id" class="py-8"><nuxt-link :to="'/articles/'+article.id">
            <h3>{{ article.title }}</h3>
            <span>Author: {{article.user.name}}</span>
            </nuxt-link></li>
          </ul>
        </div>
        
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
      articleLoading:false,
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
    async clickCallback(pageNumber){
      this.articleLoading=true;
      await this.$store.dispatch('articles/getByPage',pageNumber);
      this.articleLoading=false;
    }
  },
  async fetch(){
    await this.$store.dispatch('articles/getAllArticles',6);
  },

}
</script>