export const state = () => ({
    articles: [],
    test:'testData'
})

export const mutations={
    setArticles(state, articles){
        state.articles = articles
    }
}
export const actions = {
    async getUserArticles(context, userId) {
        this.$axios.$get(userId+'/articles/')
        .then( (response)=>{
            context.commit('setArticles',response)
        })
      },
}