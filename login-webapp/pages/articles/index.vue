<template>
  <div class="pt-10">
    <div >
      <h1>Latest articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id"><nuxt-link :to="'/articles/'+article.id">{{ article.title }}</nuxt-link></li>
      </ul>
      <button>Refresh</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  async asyncData(context) {
    const articles = await  context.$axios.$get('articles');
    return {articles}; // Same as return  { facts: facts }
/* 
      app.$axios.get('articles').then( (response)=>{
        console.log(response.data);
        {articles : response.data}
      }) */
  },
  mounted(){
    
  }
}
</script>