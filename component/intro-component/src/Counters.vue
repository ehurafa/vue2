<template>
  <div class="counters">
    <counter v-for="c in 5" :key="c"></counter>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  name: 'Counters',

  components: { counter: Counter }
}
</script>

<style>
</style>
