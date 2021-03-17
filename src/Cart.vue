<template>
  <div class="cart">
    Cart
    <div class="cart-list">
      <CartItem
        v-for="cartGood in getCartItems"
        :key="cartGood.name"
        :cartGood="cartGood"
      />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import CartItem from "./CartItem.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCartItems"]),
  },
  components: {
    CartItem,
  },
};
</script>
<style>
</style>