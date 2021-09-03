import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import User from './components/user/User'
import ListUser from './components/user/ListUser'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Start
        },
        {
            path: '/usuario',
            component: User,
            props: true,
            children: [
                { path: '', component: ListUser },
                { path: ':id', component: UserDetail, props: true },
                { path: ':id/editar', component: UserEdit, props: true },
            ]
        }
    ]
})