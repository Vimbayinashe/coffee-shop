<template>
  <div class="products">
    <!-- <section v-if="$route.params.category===undefined"> -->
    <section v-if="$route.params.category===undefined">
      <p>
        <router-link to="/products/all">All products</router-link>
      </p>
      <p>
        <router-link to="/products/coffee">Coffee products</router-link>
      </p>
        <router-view />
    </section>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <productDisplay v-else-if="$route.params.category!==undefined" title="Products"/>
    <!-- v-if="$route.params.category==='all'" -->
    <!-- <coffeeProducts v-else-if="$route.params.category==='coffee'" title="Coffee products" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import productDisplay from "@/components/productDisplay.vue";
// import coffeeProducts from "@/components/coffeeProducts.vue";

export default {
  name: "Products",
  components: {
    productDisplay
    // coffeeProducts
  }
};
</script>
