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
  name: "CategoryDisplay",
  props: {
    products: {
      type: Array
    }
  }
}
</script>

<style scoped>

/* Table Style */

table {
  border: 0.2em solid darkblue;
  margin: 3vw 10vw;
}
th, tr{
  margin: 2em;
  padding: 1em;
}

tr {
  margin: 1em;
  text-align: left;
  padding: 1em 0.5em;
}

td {
  /* margin: 1em; */
  text-align: left;
  padding: 1em 0.5em;
}

th, td {
  border-bottom: 0.1em solid darkblue;
}

tr:hover {
  background-color: lightcyan;
}

/* td img {
  height : 50px;
  width : auto
} */
</style>