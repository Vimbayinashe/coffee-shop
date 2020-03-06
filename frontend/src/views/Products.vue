<template>
  <div class="products">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     
      <p v-if="$route.params.category===undefined">Here we will display our meny.</p> 
    
    <allProducts v-else-if="$route.params.category==='all'" title="All products" />
  </div>
</template>

<script>
// @ is an alias to /src
import allProducts from '@/components/allProducts.vue'

export default {
  name: 'Products',
  components: {
    allProducts
  }
}
</script>