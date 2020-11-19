<template>
<div class="flex flex-col items-center">
  <div class="pt-10 xl:w-1/2 w-3/4">
    <h1>Edit article</h1>
    <form class="w-full">
      <div class="flex flex-col py-2 w-full">
        <h4>Title:</h4>
        <input class="
        w-full 
        border-b 
        border-teal-500
        text-gray-800 
        mr-3
        mb-10
        mt-4
        py-1 
        px-2 
        leading-tight 
        focus:border-none" type="text" placeholder="Title" aria-label="Title" v-model="article.title">
        <h4>Content:</h4>
        <textarea class="
        w-full 
        h-64
        border-b 
        border-teal-500
        text-gray-800 
        mr-3 
        mb-10 
        
        py-1 
        px-2 
        leading-tight 
        focus:border-none" type="text" placeholder="Content" aria-label="Content" v-model="article.content">
        </textarea>
      </div>
    </form>
      <div class="flex justify-between">
        <div class="
        py-2
        px-4
        rounded  
        bg-green-200 
        hover:bg-green-300
        cursor-pointer 
        inline-block"
          @click="$router.push({path: '/articles/'+article.id})"
        >
          Cancel
        </div>
        <div class="
        py-2
        px-4
        rounded  
        bg-green-200 
        hover:bg-green-300
        cursor-pointer 
        inline-block"
          @click="editArticle"
        >
          Update
        </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
    middleware:'canEdit',
  data() {
    return {
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