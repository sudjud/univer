<template>
  <div>
    <div class="container">
      <h2>Скрытая страница</h2>
      <p>Вы вошли в аккаунт, поэтому можете видеть эту страницу.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia laborum dolorum, id enim delectus ab quaerat sint suscipit ipsa!</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['about-guard']
}
</script>