<template>
  <div class="user-edit">
      <h3>Usuário editar</h3>
      <hr>
      <p><strong>Código:</strong> {{ id }}</p>
      <p><strong>Código:</strong> {{ $route.params.id  }}</p>
      <p><strong>Completo:</strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
      <p><strong>Lingua:</strong>{{ $route.query.lingua }}</p>
  </div>
</template>

<script
export default {
  props: ['id']
}
</script>

<style>

</style>