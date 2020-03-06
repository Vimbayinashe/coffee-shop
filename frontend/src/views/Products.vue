<template>
  <div class="products">
    <!-- <section v-if="$route.params.category===undefined"> -->
    <section>
      Here we will display our meny.
      <p>
        <router-link to="/products/all">All products</router-link>
        <router-view />
      </p>
    </section>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <allProducts v-if="$route.params.category==='all'" title="All products" />
  </div>
</template>

<script>
// @ is an alias to /src
import allProducts from "@/components/allProducts.vue";

export default {
  name: "Products",
  components: {
    allProducts
  }
};
</script>
