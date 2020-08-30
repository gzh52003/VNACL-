import Vue from 'vue';


import VueRouter from 'vue-router'


import Home from '../pages/Home.vue'

import User from '../pages/user/Default.vue'
import UserList from '../pages/user/List.vue'

import UserEdit from '../pages/user/Edit.vue'

import Order from '../pages/Order.vue'
import Goods from '../pages/Goods.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'


Vue.use(VueRouter);


const router = new VueRouter({

  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/user',
        component: User,
        children: [
         
            {
                path: '',
                redirect: 'list'
            }, {
                path: 'add',
                component: UserEdit
            }, {
                path: 'list',
                component: UserList
            }, {
                name:'userEdit',
                path: 'edit/:id',
                component: UserEdit
            }]
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/reg',
        component: Reg
    },
    {
        path: '/404',
        component: NotFound
    },

  
    {
        path: '*',
        redirect: '/404'
    }
]
})

export default router;          