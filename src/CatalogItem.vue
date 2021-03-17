<template>
  <div class="good">
    Товар: {{ good.name }} = {{ good.price }}
    <button class="btn" @click="cartAdd(good)">Добавить в корзину</button>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {
    good: Object,
  },
  methods: {
    ...mapActions(["addToCart", "addCartItem"]),
    cartAdd(good) {
      console.log(good);
      this.addToCart(good);
      this.addCartItem(good);
    },
  },
};
</script>
<style module>
</style>