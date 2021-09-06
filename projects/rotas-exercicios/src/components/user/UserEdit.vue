<template>
  <div class="user-edit">
      <h3>Usuário editar</h3>
      <hr>
      <p><strong>Código:</strong> {{ id }}</p>
      <p><strong>Código:</strong> {{ $route.params.id  }}</p>
  </div>
</template>

<script
export default {
  props: ['id']
}
</script>

<style>

</style>