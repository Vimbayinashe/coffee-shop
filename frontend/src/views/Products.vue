<template>
  <div class="products">
   
    <section v-if="$route.params.category===undefined">
      <p>
        <router-link to="/products/all">All products</router-link>
      </p>
      <p>
        <router-link to="/products/coffee">Coffee products</router-link>
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
