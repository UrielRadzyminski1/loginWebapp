<template>
  <div class="pt-10">
    <h1>New article</h1>
    <v-form
      ref="form"
    >
        <v-text-field
            v-model="title"
            label="Title"
            required></v-text-field>
        <v-textarea
            v-model="content"
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
          @click="submitArticle"
          text
          color="primary"
        >
          Submit
        </v-btn>
      </v-card-actions>
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