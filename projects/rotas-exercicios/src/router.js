import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import User from './components/user/User'
import ListUser from './components/user/ListUser'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savePopsition) {
        if (savePopsition) {
            return savePopsition
        } else if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return { x: 0, y: 0}
        }
        
    },
    routes: [
        {
            name: 'inicio',
            path: '/',
            // component: Start
            components: {
                default: Start,
                menu: Menu
            }
        },
        {
            path: '/usuario',
            // component: User,
            components: {
                default: User,
                menu: MenuAlt,
                bottomMenu: MenuAlt
            },
            props: true,
            children: [
                { path: '', component: ListUser },
                { path: ':id', component: UserDetail, props: true },
                { path: ':id/editar', component: UserEdit, props: true, name: 'userEdit' },
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})