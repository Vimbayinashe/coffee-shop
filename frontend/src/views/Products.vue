<template>
  <div class="products">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <allProducts title="All products"/>
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