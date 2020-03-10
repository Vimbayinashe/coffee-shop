<template>
  <div>
    <h2>My Basket</h2>
    <section id="myBasket">
      <div v-for="product in $store.state.myBasket" :key="product.id" id="item">
        <p>
          <img :src="'http://localhost:3000/images/' + product.image" alt="product image" />
        </p>
        <p>{{product.id}}</p>
        <p>{{product.name}}</p>
        <p>{{product.weight}} {{product.unit}}</p>
        <p>{{product.price}} kr</p>
        <p> Amount in basket: {{product.productQuantity}}</p>
     </div>
    </section>

    <div v-if="!buttonText">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required v-model="name">
      <label for="address">Shipping Address:</label>
      <textarea 
        type="text" 
        id="address" 
        name="address" 
        required rows="4" 
        cols="30"
        v-model="address"
      >
      </textarea>
    <!-- input attributes: required ?  
        <textarea> could be upgraded to separate input for UX-->


      <div>
        Confirm Your Personal Details
        <div>Name: {{ name }} </div>
        <div>
          <div>Address:</div>
          <div id="confirm-address"> {{ address }} </div>
        </div>
      </div>
    </div>
    
    <input 
      class="checkout" 
      type="button" 
      value="Confirm" 
      @click="buttonText=!buttonText"
      v-if="basket.length > 0 && buttonText"
    > 
    <button 
      class="checkout"
      type="submit" 
      @click=" submitOrder()" 
      v-if="!buttonText"
    >
      Submit
    </button>
    <!-- Here we will have an @click function to POST product id 
    and quantity to the orders database-->

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      address: null,
      basket: this.$store.state.myBasket,
      buttonText: true
    }
  },
  methods: {
    submitOrder() {

      this.basket.forEach(product => {
        fetch('http://localhost:3000/orders', {
          body: JSON.stringify({
            name: this.name,
            address: this.address,
            productId: product.id,
            quantity: product.productQuantity
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        .then(response => response.json())
        .then(result => {
          console.log("Sent!")
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      });
      
      this.buttonText = true
    }
  },
  name: 'Basket'
}
</script>

<style scoped>
#myBasket {
  display: grid;
  grid-template-columns: 20% 20% 20%;
  justify-content: center;
}
#myBasket div {
  padding: 1em;
  margin: 1em;
  border: 1px solid black;
}
#myBasket img {
  height: 110px;
}

.checkout{
  position: absolute;
  font-size: 1em;
  padding: 0.8em;
  margin: 1em;
  right: 20px;
}

#confirm-address {
  white-space: pre;
}

</style>