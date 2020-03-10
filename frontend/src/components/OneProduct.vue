<template>
  <div>
    {{ $route.params.id}}
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
  data () {
    return {
      products: null
    }
  },
  name: "OneProduct"
};
</script>