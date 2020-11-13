export const state = () => ({
    allArticles: [],
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
    async getAllArticles(context) {
    this.$axios.$get('/articles/')
    .then( (response)=>{
        context.commit('setArticles',response)
    })
    },
}