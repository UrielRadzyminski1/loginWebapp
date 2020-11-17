<template>
    <div v-if="loading">
      <p>Loading</p>
    </div>
    <div v-else>
      <div class="pt-20">
        <ul>
            <ul>
              <li v-for="article in articles.data" :key="article.id"><nuxt-link :to="'/articles/'+article.id">{{ article.title }}</nuxt-link></li>
            </ul>
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
  async mounted() {

    await this.$store.dispatch('articles/getUserArticles', this.$auth.user.id);
    this.loading =false;
  }
}
</script>