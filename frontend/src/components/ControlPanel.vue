<template>
  <div>
    <h2>Stock Levels</h2>
    <Stock></Stock>
    <h2>Orders</h2>
    <Orders></Orders>
  </div>
</template>

<script>

import Stock from '@/components/Stock.vue'
import Orders from '@/components/Orders.vue'

export default {
  components: {
    Orders,
    Stock
  },
  name: "ControlPanel"
};
</script>
