<template>
  <div>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Size</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>

      <tbody>
      <tr :key="product.id" v-for="product in products">
        <td> {{ products.indexOf(product) + 1 }}. </td>
        <td>
            {{ product.name }}
        </td>
        <td>{{ product.brand }}</td>
        <td>{{ product.type }}</td>
        <td>{{ product.weight }} {{ product.unit }} </td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
      </tbody>

    </table>

  </div>
</template>

<script>

export default {
  created() {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(result => {
        this.products = result;
        console.log(result);
      });
  },
  data() {
    return {
      products: null
    };
  },
  name: "Stock"
};
</script>
