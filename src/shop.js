'use strict'

import Vue from 'vue'
import App from './App.vue'

import store from './store/index'

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App
    },
    store
})

// import Cart from './cart'
// import List from './list'

// const CartInstance = new Cart();
// const ListInstance = new List(CartInstance);