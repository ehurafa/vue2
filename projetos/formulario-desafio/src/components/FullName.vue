<template>
    <div>
        <label for="">Nome:</label>
        <input type="text" v-model="vname" @input="getFullName" /><br>
        <label for="">Sobrenome:</label>
        <input type="text" name="surname" v-model="vsurname" @input="getFullName"  />
    </div>
</template>

<script>
export default {
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
        getFullName () {
            this.$emit('fullname', this.fullName)
        }
    }
}
</script>

<style scoped>
    
</style>
