<template>
    <div class="pt-20">
        <ul>
            <ul>
              <li v-for="article in articles" :key="article.id"><nuxt-link :to="'/articles/'+article.id">{{ article.title }}</nuxt-link></li>
            </ul>
        </ul>

    </div>
  
</template>

<script>

export default {
  computed: {
    articles () {
      return this.$store.state.articles.articles
    }
  },
  async fetch() {
    this.$store.dispatch('articles/getUserArticles', this.$auth.user.id);
  }
}
</script>