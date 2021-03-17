import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        cartItems: []
    },
    mutations: {
        setData (state, payload) {
            state.data = payload.newData;
        },
        addToCart(state, payload) {
            state.cartItems.push(payload.item)
        }
    },
    getters: {
        getData: state => state.data,
        getCartItems: state => state.cartItems
    },
    actions: {
        requestData ({ commit, state }) {
          fetch(`/itemslist`)
            .then(res => {
              return res.json();
            })
            .then(res => {
              commit('setData', { newData: res.data });
            });
        },
        addToCart({ commit, state}, item) {
            commit('addToCart', { item });
        },
        addCartItem ({}, data) {
            fetch('/cartlist', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log(res)
            });
        }
    },
})