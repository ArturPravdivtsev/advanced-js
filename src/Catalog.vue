<template>
  <div>
      <div class="goods-list">
          <CatalogItem v-for="good in goods" :key="good.name" :good="good" />
      </div>
  </div>
</template>
<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  data() {
    return {
      goods: [
        { name: "Shirt", price: 150 },
        { name: "Socks", price: 15 },
        { name: "Jacket", price: 50 },
        { name: "Shoes", price: 1500 },
      ],
    };
  },
  components: {
    CatalogItem,
  },
};
</script>
<style module>
</style>