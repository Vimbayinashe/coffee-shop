<template>
  <div class="home">
    <div class="cover">
      <p> Passion for coffee </p>
    </div>
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/views/Products.vue'

export default {
  name: 'Home',
  components: {
    Products
  }
}
</script>

<style scoped>
.cover {
  background: url(../assets/images/cover-photo.jpg); 
  height: 400px;
  background-repeat: no-repeat;
  background-position-y: 65%;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cover p{
  align-self: flex-end;
  margin-right: 7em;
  font-size: 2em;
  color:rgb(66, 32, 8);
  /* background-color: rgb(169, 169, 169, 0.7); */
  width: 20%;
  border-radius: 0.5em;
}
</style>