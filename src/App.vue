<template>
  <div>
    <Cart />
    <Catalog />
  </div>
</template>
<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";
export default {
  components: {
    Catalog,
    Cart,
  },
};
</script>
<style module>
.myHeader {
  color: red;
}
</style>