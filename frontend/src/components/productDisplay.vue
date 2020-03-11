<template>
  <div>
    <h1>{{ title }} products</h1>

    <section class="display">
      <div v-for="product in this.products" :key="product.id" :id="product.id" class="product">
        <p>
          <img :src="'http://localhost:3000/images/' + product.image" alt="product image" />
        </p>
        <p>{{product.name}}</p>
        <p>{{product.weight}} {{product.unit}}</p>
        <p>{{product.price}} kr</p>
        <quantityButton
          @addOne="addOne(product.id, ...arguments)"
          @removeOne="removeOne(product.id, ...arguments)"
          :myQuantity="0"
        />
      </div>
    </section>
  </div>
</template>
<script>
import quantityButton from "@/components/quantityButton.vue";

export default {
  created() {
    fetch(`http://localhost:3000/products/${this.$route.params.category}`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.products = result;
      });
  },

  data() {
    return {
      title: this.$route.params.category,
      products: null
    };
  },

  methods: {
  
    addOne(target, quantity) {

      let targetProduct = this.products.filter(
        product => product.id === target
      );
      targetProduct[0].productQuantity = quantity;
      let present = this.$store.state.myBasket.find(
        item => item.name === targetProduct[0].name
      );
      if (present === undefined) {
        this.$store.state.myBasket.push(targetProduct[0]);
      }
      console.log(this.$store.state.myBasket);
    },

    removeOne(target, quantity) {
      
      let targetProduct = this.products.filter(
        product => product.id === target
      );
      targetProduct[0].productQuantity = quantity;
      let present = this.$store.state.myBasket.find(
        item => item.name === targetProduct[0].name
      );
      if (present !== undefined && quantity==0) {
        this.$store.state.myBasket.splice(
        this.$store.state.myBasket.indexOf(targetProduct[0]),
        1
      );
      }
      console.log(this.$store.state.myBasket);
    }
  },
  name: "productDisplay",
  components: {
    quantityButton
  }
};
</script>

<style scoped>
.display {
  display: grid;
  grid-template-columns: auto auto auto;
}
.product {
  padding: 1em;
  margin: 1em;
  border: 1px solid rgb(85, 23, 14);
  border-radius: 0.5em
}

.product div, p{
margin-bottom: 0.5em
}

.display img {
  height: 80px;
}

h1{
  font-size: 2em;
}
</style>
