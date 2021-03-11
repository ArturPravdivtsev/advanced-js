<template>
  <div>Товар: {{ cartGood.name }} - {{ cartGood.price }}</div>
</template>
<script>
export default {
  props: {
    cartGood: Object,
  },
};
</script>
<style module>
</style>