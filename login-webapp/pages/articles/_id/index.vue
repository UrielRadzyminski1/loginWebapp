<template>
  <div class="pt-10">
      <h1 class="my-4 ">{{articles.title}}</h1>
      <nuxt-link :to="'/articles/'+articles.id +'/edit/'" ><v-btn v-if="canEdit">Edit</v-btn></nuxt-link>
      <p>{{articles.content}}</p>
      <button >Refresh</button>

  </div>
</template>
<script>
export default {
  watchQuery: true,
  data() {
    return {
      article:{}
    }
  },
  computed: {
    canEdit(){
      if(this.$auth.loggedIn){
        console.log(this.article.user_id);
        console.log(this.$auth.user.id);
         return (this.articles.user_id == this.$auth.user.id)||(this.$auth.hasScope('edit articles'));
      } else {
        return false;
      }
     
    }
  },


  async asyncData(context) {
    const articles = await context.$axios.$get('articles/'+context.params.id);
    return {articles};
  }

}
</script>