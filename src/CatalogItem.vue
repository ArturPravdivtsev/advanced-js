<template>
  <div class="good">
    Товар: {{ good.name }} = {{ good.price }}
    <button class="btn">Добавить в корзину</button>
  </div>
</template>
<script>
export default {
  props: {
    good: Object,
  },
};
</script>
<style module>
</style>