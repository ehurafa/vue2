import Vue from 'vue'

export default new Vue({
    methods: {
        alterAge(age) {
            this.$emit('newAge', age)
        },
        onAlterAge(callback) {
            this.$on('newAge', callback)
        }
    }
})