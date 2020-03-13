<template>
  <div id="head" v-if="products">
    
    <h3> {{ products[index].name}} </h3>
  
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
        <td>{{ products[index].name }}</td>
        <td>{{ products[index].brand }}</td>
        <td>{{ products[index].type }}</td>
        <td>
          {{ products[index].weight }} 
          {{ products[index].unit }} 
        </td>
        <td>{{ products[index].price }}</td>
        <td>{{ products[index].quantity }}</td>
        <!-- <td>Edit</td> -->
      </tr>
      </tbody>
    </table>
    
    <button id="edit-button" @click="toggle=true">Edit</button>

    <div v-if="toggle">
      <div id="new-details">
        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" v-model="price">
        <p><i>e.g. 2.99</i></p>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" step="1" v-model="quantity">
      </div>

      <!-- <div id="all-details"> -->
        <p>Confirm product details</p>
        <div id="confirm-details">
          <div id="old-details" class="details">
            <p>Old Details:</p> 
            <div>Price: {{ products[index].price }} </div>
            <div>Quantity {{ products[index].quantity }} </div>
          </div>
          <div id="confirm-new" class="details">
            <p>New Details:</p>
            <div>Price: {{price}} </div>
            <div>Quantity: {{quantity}} </div>
          </div>
        </div>
      <!-- </div> -->

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
        this.setIndex();
      });
  },
  data () {
    return {
      errorMessage: null,
      index: null,
      price: 0,
      products: null,
      quantity: 0,
      successMessage: null,
      toggle: false
    }
  },
  methods: {
    setIndex () {
      this.index = this.$route.params.id - 1
    },
    updateProduct () {
      if (this.price<=0 && this.quantity<=0) {
        this.errorMessage = "Please enter valid changes to price or quantity"

      } else {
        /** ACTUAL DATA SET */
        console.log(JSON.stringify({
          price: parseInt(this.price),
          quantity: parseInt(this.quantity)
        }));

        fetch(
          'http://localhost:3000/control-panel/products/' 
          + this.$route.params.id, {
           body: JSON.stringify({                
                  price: parseFloat(this.price),
                  quantity: parseInt(this.quantity)
                }),
          
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT'
        })
        .then(response => response.json())
        .then(result => {
          console.log("UPDATE successful!")
        })
        .then(
          this.errorMessage = null,
          this.price = 0,
          this.quantity = 0,
          this.successMessage = this.products[this.index].name + " successfully updated",
          this.toggle = false
        )
        .catch((error) => {
          console.error('Error:', error);
        });       

        setTimeout(()=>{ this.successMessage=null; }, 3000);
      }
    }
  },
  name: "OneProduct"
};
</script>

<style scoped>

h3{
  color: #000;
  font-size: 1.5em;
  font-weight: bold;
}

#head{
  height: 90vh;

}

#confirm-details {
  display: flex;
  flex-direction: row;
  /* font-size: 120%; */
  margin: 1em 20vw;
}

.details {
  color: #000;
  margin: 1em;
}

#new-details {
  display: flex;
  flex-direction: row;
  margin: 1em 20vw;
  height: 1.2em;
}

/* #confirm-new {
  background-color: lightcyan;
} */

p {
  color: black;
  font-weight: bold;
  margin: 0 2em 0 0.5em;
}

p > i {
  font-weight: normal;
}

.message {
  color: red;
  margin: 2em;
}

button{
  background-color:  rgb(233, 223, 223);
  border: 0.18em solid rgb(85, 23, 14);
  border-radius: 10px;
  color:rgba(95, 58, 43, 0.849);
  margin: 1em;
  padding: 0.5em 1.5em;
}

button:hover{
  background-color: rgba(95, 58, 43, 0.849);
  color:  rgb(233, 223, 223);
}

a {
  color: rgba(95, 58, 43, 0.849);
}

#back-button {
  margin: 2em;
}

label {
  margin-right: 0.5em;
}

/* Styling Table */

table {
  border: 0.18em solid rgb(85, 23, 14);
  margin: 3vw 25vw;
}
th, tr{
  margin: 2em;
  padding: 1em 1em 1em 0.4em;
}

tr {
  /* margin: 1em; */
  text-align: left;
  padding: 1em 0.5em;
}

td {
  margin: 1em;
  text-align: left;
  padding: 1em 0.8em;
}

th, td {
  border-bottom: 0.1em solid rgb(85, 23, 14);
}

tbody>tr:hover {
  background-color: rgba(85, 23, 14, 0.4);
}

</style>