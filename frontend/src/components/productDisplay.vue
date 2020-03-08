<template>
  <div>
    <h1>{{ title }} products</h1>
    <!-- Title should be like how we have the links on Figma -->
    <section class="display">
      <div v-for="product in this.products" :key="product.id" :id="product.id">
        <p>
          <img :src="'http://localhost:3000/images/' + product.image" alt="product image" />
        </p>
        <p>{{product.name}}</p>
        <p>{{product.weight}} {{product.unit}}</p>
        <p>{{product.price}} kr</p>
        <quantityButton @addOne="addOne(product.id)" @removeOne="removeOne(product.id)" :myQuantity=0 />
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
        this.products = result;
      });
  },

  data() {
    return {
      title: this.$route.params.category,
      products: null,
      myBasket: []
    };
  },

  methods: {
    addOne(target) {
      let targetProduct = this.products.filter(
        product => product.id === target
      );
      this.myBasket.push(targetProduct[0]);
      console.log(this.myBasket);
    },

    removeOne(target) {
      let targetProduct = this.products.filter(
        product => product.id === target
      );
      console.log(targetProduct[0]);
      this.myBasket.splice(this.myBasket.indexOf(targetProduct[0]), 1);
      console.log(this.myBasket);
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
.display div {
  padding: 1em;
  margin: 1em;
  border: 1px solid black;
}
.display img {
  height: 80px;
}
</style>
