<template>
  <div class="user-detail">
      <h3>Usuário detalhe</h3>
      <hr />
      <p><strong>Código:</strong> {{ id }}</p>
  </div>
</template>

<script
export default {
  props: ['id']
}
</script>

<style>

</style>