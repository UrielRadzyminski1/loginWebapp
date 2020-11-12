export default function (context) {
    if (!context.$auth.hasScope('writer')) {
      return context.redirect('/');
    } else {
    }
}