<template>
  <div>
    <h1>
      Latest articles
    </h1>
    <ul>
     <li v-for="article in articles.data" :key="article.id" 
     class="
     frontpageArticle"><nuxt-link class="" :to="'/articles/'+article.id">
     
      <h2>{{ article.title }}</h2>
      <p class="text-black">{{article.content.slice(0,200) + '...'}}</p>

     </nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware:'logged',
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

  mounted(){
    this.$store.dispatch('articles/getAllArticles',4);
  }
}
</script>

<style>

</style>
