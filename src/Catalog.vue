<template>
  <div>
    <div class="goods-list">
      <CatalogItem v-for="good in getData" :key="good.name" :good="good" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import CatalogItem from "./CatalogItem.vue";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["requestData"]),
  },
  components: {
    CatalogItem,
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  created() {
    this.requestData();
  },
};
</script>
<style module>
</style>