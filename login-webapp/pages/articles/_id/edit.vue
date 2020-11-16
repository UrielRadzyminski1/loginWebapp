<template>
  <div class="pt-10">
    <h1>Edit article</h1>
    <v-form
      ref="form"
    >
        <v-text-field
            v-model="article.title"
            label="Title"
            required></v-text-field>
        <v-textarea
            v-model="article.content"
            label="Content"
            required></v-textarea>
    </v-form>
    <v-card-actions>
        <v-btn
          text
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="editArticle"
          text
          color="primary"
        >
          Update
        </v-btn>
      </v-card-actions>
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
      this.$axios.$patch('articles/'+this.article.id,{
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