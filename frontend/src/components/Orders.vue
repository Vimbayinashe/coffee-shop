<template>
  <div v-if="orders">
  <!-- <div v-if="orders"> -->
       <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Product</th>
                <th>Size</th>
                <th>Quantity</th>
                <!-- <th>Price</th> -->
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
            <tr :key="order.id" v-for="order in orders">
              <td>
                  {{ order.name }}
              </td>
              <td>{{ order.address }}</td>
              <td>{{ products[order.productId].name }}</td>
              <!-- <td> {{products.length}}</td> -->
              <td>{{ products[order.productId].weight }} {{ products[order.productId].unit }} </td>
              <!-- <td>{{ product.price }}</td> -->
              <td>{{ order.quantity }}</td>
              <td>
                <div v-if="order.shipped">pending</div>
                <div v-else>sent</div>
              </td>
            </tr>
            </tbody>
          </table>
  </div>
</template>

<script>

// import Stock from '@/components/Stock.vue'

export default {
  created() {
    fetch("http://localhost:3000/orders")
      .then(response => response.json())
      .then(result => {
        this.orders = result;
        console.log(result);
      });
     fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(result => {
        this.products = result;
        console.log(result);
      });
  },
  data () {
    return {
      orders: null,
      products: null
    }
  },
  name: "Orders"
};
</script>
