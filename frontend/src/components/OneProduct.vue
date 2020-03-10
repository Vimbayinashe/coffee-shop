<template>
  <div v-if="products">
    {{ $route.params.id}}
    <h3> {{ products[$route.params.id].name}} </h3>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Size</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>

      <tbody>
      <tr>
        <td>{{ products[$route.params.id].name }}</td>
        <td>{{ products[$route.params.id].brand }}</td>
        <td>{{ products[$route.params.id].type }}</td>
        <td>
          {{ products[$route.params.id].weight }} 
          {{ products[$route.params.id].unit }} 
        </td>
        <td>{{ products[$route.params.id].price }}</td>
        <td>{{ products[$route.params.id].quantity }}</td>
        <td>Edit</td>
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
  data () {
    return {
      // index: $route.params.id,
      products: null
    }
  },
  methods: {
    getIndex () {
      this.index = this.products.findIndex(product => product.id === this.$route.params.id)
    },
  },
  name: "OneProduct"
};
</script>