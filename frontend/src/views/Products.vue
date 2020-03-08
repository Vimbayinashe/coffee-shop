<template>
  <div class="products">
   
    <section v-if="$route.params.category===undefined" id="categories">
      <p>
        <router-link to="/products/All" class="link">
        <img src="../assets/images/all products.jpg" alt="all products" class="photo">
        All products
        </router-link>
      </p>
      <p>
        <router-link to="/products/Coffee" class="link">
        <img src="../assets/images/coffee.jpg" alt="coffee products" class="photo">
        Coffee brew and beans
        </router-link>
      </p>
      <p>
        <router-link to="/products/Milk" class="link">
        <img src="../assets/images/milk and cream.jpg" alt="milk and cream" class="photo">
        Milk and cream
        </router-link>
      </p>
      <p>
        <router-link to="/products/Spices" class="link">
        <img src="../assets/images/spices.jpg" alt="spices" class="photo">
        Sugar and spices
        </router-link>
      </p>
      <p>
        <router-link to="/products/Syrup" class="link">
        <img src="../assets/images/syrups.jpg" alt="syrups" class="photo">
        Syrups
        </router-link>
      </p>
      <p>
        <router-link to="/products/Alcoholic" class="link">
        <img src="../assets/images/alcoholic products.jpg" alt="alcoholic products" class="photo">
        Alcoholic products
        </router-link>
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
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo {
  height: 130px;
  width: auto;
}

section{
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-auto-rows: auto;
  justify-content: center;
}

</style>
