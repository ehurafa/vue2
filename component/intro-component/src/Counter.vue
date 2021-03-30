<template>
  <div class="counter">
    <h2>Contador</h2>
    <span>{{ counter }}</span>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',

  data() {
    return {
      counter: 0
    }
  },

  methods: {
    add() {
        this.counter++
    },
    subtract() {
        this.counter--
    },
  }
}
</script>

<style>
h2 {
  color: blue;
}
span {
  display: block;
  width: 100px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
}
button {
  display: inline-block;
  margin-right: 10px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  background: #333;
  color: #fff;
  cursor: pointer;
}
</style>
