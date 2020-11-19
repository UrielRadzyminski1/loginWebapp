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
        return this.$axios.$get(userId+'/articles'+'?perPage='+perPage)
        .then( (response)=>{
            context.commit('setArticles',response);
            context.commit('setPerPage',perPage)
        })
    },


    async getAllArticles(context, perPage = 5) {
        console.log('Getting articles');
        return this.$axios.$get('/articles'+'?perPage='+perPage)
        .then( (response)=>{
            context.commit('setArticles',response);
            context.commit('setPerPage',perPage);
            return('Ok');
        })
        .catch((error)=>{
            console.log('Todo mal');
            console.log(error);
            return error;
        })
    },


    async getNextPage(context){
        console.log(context.state.articles);
        const nextPage = context.state.articles.links[context.state.articles.links.length -1].url;
        if (nextPage!=null) {
            return this.$axios.$get(nextPage+'&perPage='+context.state.perPage)
            .then( (response)=>{
                context.commit('setArticles',response)
            })
        }
    },


    async getPreviousPage(context){
        const previousPage = context.state.articles.links[0].url;
        if (previousPage!=null) {
            return this.$axios.$get(previousPage+'&perPage='+context.state.perPage)
            .then( (response)=>{
                context.commit('setArticles',response)
            })
        }
    },

    
    async getByPage(context, page){
        const myPage = page;
        if(myPage>=0 && myPage<=context.state.articles.last_page){
            console.log("Adentro");
            console.log(page);
            const pageObject = context.state.articles.links.find( item =>
                item.label == page
            );
            const pageToGet = pageObject.url;
            return this.$axios.$get(pageToGet+'&perPage='+context.state.perPage)
            .then( (response)=>{
                context.commit('setArticles',response)
            })
        }
        
    }
}