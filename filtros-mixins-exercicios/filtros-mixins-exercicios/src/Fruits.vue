<template>
	<div id="app">
		<p>{{ global }}</p>
		<ul>
			<li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
		</ul>
		<input type="text" v-model="fruit" @keydown.enter="add" />
	</div>
</template>

<script>
import fruitsMixin from './fruitsMixin'
import userMixin from './userMixin'

export default {
	mixins: [fruitsMixin, userMixin],
	created() {
		console.log('Created mixin - Fuits.vue')
	}
}
</script>

<style>
</style>
