<template>
  <div class="products">
   
    <section v-if="$route.params.category===undefined">
      <p>
        <router-link to="/products/All">All products</router-link>
      </p>
      <p>
        <router-link to="/products/Coffee">Coffee brew and beans</router-link>
      </p>
      <p>
        <router-link to="/products/Milk">Milk and cream</router-link>
      </p>
      <p>
        <router-link to="/products/Sugar">Sugar and spices</router-link>
      </p>
      <p>
        <router-link to="/products/Syrup">Syrups</router-link>
      </p>
      <p>
        <router-link to="/products/Alcoholic">Alcoholic</router-link>
      </p>
        <router-view />
    </section>

    <productDisplay v-else-if="$route.params.category!==undefined" />

  </div>
</template>

<script>
// @ is an alias to /src
import productDisplay from "@/components/productDisplay.vue";


export default {
  name: "Products",
  components: {
    productDisplay
  }
};
</script>

<style scoped>
section{
  display: grid;
  grid-template-columns: 20% 20%;
  grid-auto-rows: auto;
  justify-content: center;
}
</style>
