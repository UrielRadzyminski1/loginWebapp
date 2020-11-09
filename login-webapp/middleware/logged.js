export default function (context) {
  if (!context.$auth.$state.loggedIn) {
    return context.redirect('/login');
  } else {
  }
}