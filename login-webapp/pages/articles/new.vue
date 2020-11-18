<template>
  <div class="pt-10">
    <h1>New article</h1>
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
        focus:outline-none" type="text" placeholder="Title" aria-label="Full name" v-model="title">
        
      </div>
    </form>
        <div
          text
        >
          Cancel
        </div>
        <div
          @click="submitArticle"
        >
          Submit
        </div>
  </div>
</template>
<script>
export default {
    middleware:'writer',
  data() {
    return {
      title:'',
      content:''
    }
  },
  methods: {
    async submitArticle(){
      this.$axios.post('articles',{
        title:this.title,
        content:this.content,
      })
      .then(response => {
        this.$router.push({path: '/'})
      })
      .catch(function (error) {
        console.log("no entro");
        console.log(error.response);
      });
    }
  },
  async fetch() {
  }
}
</script>