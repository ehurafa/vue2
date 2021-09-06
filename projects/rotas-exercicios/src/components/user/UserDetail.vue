<template>
  <div class="user-detail">
      <h3>Usuário detalhe</h3>
      <hr />
      <p><strong>Código:</strong> {{ id }}</p>
      <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">Editar</router-link>
  </div>
</template>

<script
export default {
  props: ['id']
}
</script>

<style>

</style>