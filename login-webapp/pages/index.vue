<template>
  <div class="flex flex-col items-center min-h-screen"> 
    <div class=" xl:w-1/2 w-3/4 flex flex-grow ">
        <div v-if="$fetchState.pending" class="flex flex-grow items-center justify-center">          
          <svg 
          class="animate-spin h-5 w-5" 
          viewBox="0 0 24 24">
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else class="">
          <h1>
            Latest articles
          </h1>
          <ul>
            <li v-for="article in articles.data" :key="article.id" 
            class="
            frontpageArticle"><nuxt-link class="" :to="'/articles/'+article.id">
            
              <h2 class="mb-2">{{ article.title }}</h2>
              <p class="text-black">{{article.content.slice(0,200) + '...'}}</p>

            </nuxt-link></li>
          </ul>
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
  },

  async fetch(){
    await this.$store.dispatch('articles/getAllArticles',4);
  },
  fetchOnServer: false,
}
</script>

<style>

</style>
