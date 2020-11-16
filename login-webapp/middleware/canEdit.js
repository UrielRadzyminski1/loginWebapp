export default async function (context) {
  if (context.$auth.$state.loggedIn) {

    const $userArticles = await context.app.$axios.$get("/user/articles/id");

    console.log($userArticles);
    const belongsToUser = $userArticles.includes(parseInt(context.params.id));
    console.log(context.params.id);
    console.log(belongsToUser);
    if (!(context.$auth.hasScope('edit articles')|| belongsToUser) ) {
      return context.redirect('/');
    } else {
      //Do nothing - the user is correctly authenticated
    } 
  }else{
    return context.redirect('/');
  }


}