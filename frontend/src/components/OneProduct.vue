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
        <!-- <td>Edit</td> -->
      </tr>
      </tbody>
    </table>
    
    <button id="edit-button" @click="toggle=true">Edit</button>

    <div v-if="toggle">
      <div id="new-details">
        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" v-model="price">
        <p>e.g. 2.99</p>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" step="1" v-model="quantity">
      </div>

      <p>Confirm product details</p>
      <div id="confirm-details">
        <div id="old-details" class="details">
          <p>Old Details:</p>
          <div>Price: {{ products[$route.params.id].price }} </div>
          <div>Quantity {{ products[$route.params.id].quantity }} </div>
        </div>
        <div id="confirm-new" class="details">
          <p>New Details:</p>
          <div>Price: {{price}} </div>
          <div>Quantity: {{quantity}} </div>
        </div>
      </div>

      <p class="message"> {{ errorMessage }} </p>
      <button @click="toggle = false">Cancel</button>
      <button @click="updateProduct()">Save changes</button>

    </div>
    <p> {{ successMessage }} </p> 
    <button id="back-button">
      <router-link to="/control-panel/">
        Back
      </router-link>
    </button>
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
      errorMessage: null,
      price: 0,
      products: null,
      quantity: 0,
      successMessage: null,
      toggle: false
    }
  },
  methods: {
    updateProduct () {
      if (this.price==0 && this.quantity==0) {
        this.errorMessage = "Please enter valid changes to price or quantity"

      } else {

        this.errorMessage = null
        this.price = 0
        this.quantity = 0
        this.successMessage = this.products[this.$route.params.id].name + " successfully updated"
        this.toggle = false;

        setTimeout(()=>{ this.successMessage=null; }, 3000);
      }
    },
  },
  name: "OneProduct"
};
</script>

<style scoped>

#confirm-details {
  display: flex;
  flex-direction: row;
  /* font-size: 120%; */
  margin: 1em 20vw;
}

.details {
  margin: 1em;
}

#new-details {
  display: flex;
  flex-direction: row;
  margin: 1em 20vw;
  height: 1.2em;
}

#confirm-new {
  background-color: lightcyan;
}

p {
  margin: 0 2em 0 0.5em;
}

.message {
  color: red;
  margin: 2em;
}

#back-button {
  margin: 2em;
  /** needs position styling - it moves about too much */
}
</style>