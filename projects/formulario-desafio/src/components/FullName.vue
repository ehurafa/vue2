<template>
    <div>
        <label for="">Nome:</label>
        <input type="text" :value="value.name" @input="alterName" /><br>
        <label for="">Sobrenome:</label>
        <input type="text" name="surname" :value="value.surname" @input="alterSurname"  />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            vname: null,
            vsurname: null
        }
    },
    computed: {
        fullName () {
            return `${this.vname} ${this.vsurname}`
        }
    },
    methods: {
        alterName (event) {
            this.$emit('input', { name: event.target.value, surname: this.value.surname })
        },
        alterSurname (event) {
            this.$emit('input', { name: this.value.name, surname: event.target.value })
        }
    }
}
</script>

<style scoped>
    
</style>
