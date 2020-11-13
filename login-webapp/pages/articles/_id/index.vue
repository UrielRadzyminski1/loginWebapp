<template>
  <div class="pt-10">
      <h1 class="my-4 ">{{articles.title}}</h1>
      <v-btn v-if="canEdit">Edit</v-btn>
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
         return (this.article.user_id == this.$auth.user.id)||(this.$auth.hasScope('edit articles'));
      } else {
        return false;
      }
     
    }
  },


  async asyncData(context) {
    console.log(context.params.id);
    const articles = await context.$axios.$get('articles/'+context.params.id);
    console.log(articles);
    return {articles};
  }

}
</script>