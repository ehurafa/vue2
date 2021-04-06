<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome é <strong>{{ name }}</strong></p>
        <p>A idade é {{ age }}</p>
        <button @click="alterName">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info
                :name="name"
                :restartFn="restartName"
                :age="age"
                @alterNamer="name = $event"
            />
            <app-usuario-editar :age="age" @newAge="age = $event" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    
    data() {
        return {
            name: 'Pedro',
            age: 25
        }
    },

    methods: {
        alterName() {
            this.name = 'Ana'
        },
        restartName() {
            this.name = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
