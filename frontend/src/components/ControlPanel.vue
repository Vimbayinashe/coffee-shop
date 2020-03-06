<template>
  <div>
    <h2>Stock Levels</h2>
    <Stock></Stock>
  </div>
</template>

<script>

import Stock from '@/components/Stock.vue'

export default {
  components: {
    Stock
  },
  name: "ControlPanel"
};
</script>
