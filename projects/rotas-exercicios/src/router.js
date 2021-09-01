import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import User from './components/user/User'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Start
        },
        {
            path: '/usuario/:id',
            component: User
        }
    ]
})