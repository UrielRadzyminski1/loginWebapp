export const state = () => ({
    articles: {},
    test:'testData',
    perPage:null,
})

export const mutations={
    setArticles(state, articles){
        state.articles = articles;
    },
    setPerPage(state, perPage){
        state.perPage = perPage
    }
}
export const actions = {
    async getUserArticles(context, userId, perPage = 5) {
        this.$axios.$get(userId+'/articles'+'?perPage='+perPage)
        .then( (response)=>{
            context.commit('setArticles',response);
            context.commit('setPerPage',perPage)
        })
    },


    async getAllArticles(context, perPage = 5) {
    console.log('Getting articles');
    this.$axios.$get('/articles'+'?perPage='+perPage)
    .then( (response)=>{
        context.commit('setArticles',response);
        context.commit('setPerPage',perPage)
    })
    .catch((error)=>{
        console.log('Todo mal');
        console.log(error);
    })
    },


    async getNextPage(context){
        console.log(context.state.articles);
        const nextPage = context.state.articles.links[context.state.articles.links.length -1].url;
        if (nextPage!=null) {
            this.$axios.$get(nextPage+'&perPage='+context.state.perPage)
            .then( (response)=>{
                context.commit('setArticles',response)
            })
        }
    },


    async getPreviousPage(context){
        const previousPage = context.state.articles.links[0].url;
        if (previousPage!=null) {
            this.$axios.$get(previousPage+'&perPage='+context.state.perPage)
            .then( (response)=>{
                context.commit('setArticles',response)
            })
        }
    },

    
    async getByPage(context, page){
        if(page>=0 && page<=context.state.articles.last_page){
            const pageToGet = context.state.articles.links[page].url;
            this.$axios.$get(pageToGet+'&perPage='+context.state.perPage)
            .then( (response)=>{
                context.commit('setArticles',response)
            })
        }
        
    }
}