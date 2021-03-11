<template>
  <div class="cart">
    Cart
	<div class="cart-list">
        <CartItem v-for="cartGood in cartGoods" :key="cartGood.name" :cartGood="cartGood" />
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";
export default {
    data () {
        return {
            cartGoods: [
                { name: "Shirt", price: 150 },
                { name: "Socks", price: 15 },
            ]
        }
    },
    components: {
        CartItem
    }
};
</script>
<style>
</style>