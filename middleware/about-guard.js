export default function ({
  store,
  redirect
}) {
  if (!store.getters.isAuth) {
    try {
      redirect('/login')
    } catch (e) {
      console.log(e)
    }

  }
}
