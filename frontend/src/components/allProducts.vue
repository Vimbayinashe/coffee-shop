<template>
  <div class="all">
    <h1>{{ title }}</h1>
    <section class="display" >
      <div v-for="product in this.products" :key="product.id">
        <p>
          <img :src="require('@/assets/images/' + product.image)" alt="product image" />
        </p>
        <p>{{product.name}}</p>
        <p>{{product.weight}} {{product.unit}}</p>
        <p>{{product.price}} kr</p>
      </div>
    </section>
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
  props: {
    title: String
  },
  name: "allProducts"
};
</script>

<style scoped>
.display {
  display: grid;
  grid-template-columns: auto auto auto;
}
.display div{
  padding: 1em;
  margin: 1em;
  border: 1px solid black
}
.display img{
  height: 80px;
}
</style>
