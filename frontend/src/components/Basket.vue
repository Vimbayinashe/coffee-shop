<template>
  <div>
    <h2>My Basket</h2>
    <section id="myBasket">
      <div v-for="product in $store.state.myBasket" :key="product.id" id="item">
        <p>
          <img :src="'http://localhost:3000/images/' + product.image" alt="product image" />
        </p>
        <p>{{product.name}}</p>
        <p>{{product.weight}} {{product.unit}}</p>
        <p>{{product.price}} kr</p>
        <p> Amount in basket: {{product.productQuantity}}</p>
     </div>
    </section>
    <input type="submit" value="Checkout" id="checkout"> <!-- Here we will have an @click function to POST product id 
    and quantity to the orders database-->
  </div>
</template>

<script>
export default {
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

#checkout{
  position: absolute;
  font-size: 1em;
  padding: 0.8em;
  margin: 1em;
  right: 20px;
}
</style>