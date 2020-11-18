<template>
  <div class="pt-10">
    <div class="grid grid-cols-8">
      <div class="lg:col-span-2 col-span-1"></div>
      <div class="lg:col-span-4 col-span-6">
        <h1 class="my-4 ">{{articles.title}}</h1>
        <nuxt-link class="my-4" :to="'/articles/'+articles.id +'/edit/'" >
        <div class="mb-4 button" v-if="canEdit">
          Edit</div>
        </nuxt-link>
        <p>{{articles.content}}</p>
      </div>
      <div class="lg:col-span-2 col-span-1"></div>
    </div>
      

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