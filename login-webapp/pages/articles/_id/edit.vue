<template>
  <div class="pt-10">
    <h1>Edit article</h1>
    <form class="w-full">
      <div class="flex items-center py-2 w-full">
        <input class="
        w-full 
        border-b 
        border-teal-500
        text-gray-700 
        mr-3 
        py-1 
        px-2 
        leading-tight 
        focus:outline-none" type="text" placeholder="Title" aria-label="Full name" v-model="article.title">
        
      </div>
    </form>
        <div
          text
        >
          Cancel
        </div>
        <div
          @click="editArticle"
        >
          Update
        </div>
  </div>
</template>
<script>
export default {
    middleware:'canEdit',
  data() {
    return {
      title:'',
      content:''
    }
  },
  methods: {
    async editArticle(){
      this.$axios.patch('articles/'+this.article.id,{
        title:this.article.title,
        content:this.article.content,
      })
      .then(response => {

        console.log(response);
        this.$router.push({path: '/articles/'+this.article.id})
      })
      .catch(function (error) {
        console.log("no entro");
        console.log(error.response);
      });
    }
  },
  async asyncData(context) {
    const article = await context.$axios.$get('articles/'+context.params.id);
    return {article};
  }
}
</script>