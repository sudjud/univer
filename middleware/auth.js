export default function({store, redirect}){
  if(!store.getters.isAuth){
    redirect('/login')
    setTimeout(() => {
      alert('Вы должны быть зарегистрированы')
    }, 200)
  }
}