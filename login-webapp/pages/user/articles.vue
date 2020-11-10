<template>
    <div class="pt-20">
        <ul>
            <li v-for="article in articles" :key="article.id">
                {{article.title}}
            </li>
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