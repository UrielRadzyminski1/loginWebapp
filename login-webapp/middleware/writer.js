export default function (context) {
    if (!( context.$auth.$state.loggedIn && context.$auth.hasScope('create articles'))) {
      return context.redirect('/');
    } else {
    }
}