<template>
  <div>
    <h2>Control Panel</h2>
    <h3 @click="toggle('Stock')">Stock Levels</h3>
    <Stock v-if="toggleStock"></Stock>
    <h3 @click="toggle('Orders')">Orders</h3>
    <Orders v-if="toggleOrders"></Orders>

    <!-- Doubtful: it <a> adds /stock to the address  -->
    <!-- <div>Menu</div>
    <div id="order-menu">
      <p>Control Panel</p>
      <p><a href="#stock" > Stock </a></p>
      <p><a href="#orders" > Orders </a></p>
    </div> -->
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
  data () {
    return {
      toggleStock: false,
      toggleOrders: false
    }
  },
  methods: {
    toggle(category) {
      let name = 'toggle'+category
        console.log(name);
   
   if (category == 'Stock') {
        this.toggleStock = true
        this.toggleOrders = false
      } else if (category == 'Orders') {
        this.toggleStock = false
        this.toggleOrders = true
      }  
    }
  },
  name: "ControlPanel"
};
</script>

<style scoped>

h3 {
  background-color: rgb(243, 153, 88);
  height: 2em;
  margin-left: 20vw;
  width: 20vw;
}

</style>