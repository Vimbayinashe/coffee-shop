<template>
  <div class="home">
    <div class="cover">
      <p> Passion for coffee </p>
    </div>
    <h1>Products</h1>
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/views/Products.vue'

export default {
  created (){
    document.title = 'Coffee World'
  },
  name: 'Home',
  components: {
    Products
  }
}
</script>

<style scoped>

h1{
  color: rgb(95, 58, 43);
  font-size: 2em;
  margin: 1.5em 1em 1em;
}

.cover {
  background: url(../assets/images/cover-photo.jpg); 
  height: 400px;
  background-repeat: no-repeat;
  background-position-y: 65%;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5em;
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

@media screen and (max-width: 768px){
  .cover{
    margin-bottom: 0.8em;
    height: 200px;
  }
  
}

@media screen and (max-width: 425px){
  .cover p{
  font-size: 1.3em;
  margin-right: 3em;
  }

  h1{
    font-size: 1em;
  }
}
</style>