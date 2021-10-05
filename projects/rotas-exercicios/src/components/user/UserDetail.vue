<template>
  <div class="user-detail">
      <h3>Usuário detalhe</h3>
      <hr />
      <p><strong>Código:</strong> {{ id }}</p>
      <!-- <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">Editar</router-link> -->

      <router-link tag="button" primario :to="{ name: 'userEdit', params: { id }, query: { completo: true, lingua: 'pt' }, hash: '#footer' }">Editar</router-link>
  </div>
</template>

<script
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    console.log('dentro do componente - usuário detalhe')
    /* next(vm => {
      console.log('vm ', vm)
    }) */
    const auth = true
    auth ? next() : next(false)
  }
}
</script>

<style>

</style>