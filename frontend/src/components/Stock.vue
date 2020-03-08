<template>
  <div>

    <div id="stock-nav">
      <h3 @click="toggle=!toggle">Categories</h3>
      <h3 @click="toggle=!toggle">All Products</h3>
    </div>
    {{toggle}}
    <div id="stock-item" v-show="toggle">
      <!-- <div @click="showProduct($event)"> -->
        
      <div>
        <div @click ='alcohol = !alcohol'>
          Alchoholic Products
        </div>
        <div class="indiv-products" v-show='alcohol'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, optio iusto? Ex accusantium beatae rem ad nemo iusto inventore ea esse adipisci suscipit, dolorum officia perspiciatis, totam aliquam ab ipsum?
        </div>
      </div>

      <div>
        <div @click ='coffee = !coffee'>
          Coffee Brew and Beans
        </div>
        <div class="indiv-products" v-show='coffee'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, optio iusto? Ex accusantium beatae rem ad nemo iusto inventore ea esse adipisci suscipit, dolorum officia perspiciatis, totam aliquam ab ipsum?
        </div>
      </div>

      <div>
        <div @click ='milk= !milk'>
          Milk and Creams
        </div>
        <div class="indiv-products" v-show='milk'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa placeat consequuntur, dicta quisquam animi perspiciatis optio dolore nisi corrupti rerum numquam quidem. A quam blanditiis similique suscipit voluptatem illum.
        </div>
      </div>

      <div @click ='sugar= !sugar'>
        <div v-show='sugar'>
          Sugar and Spices
        </div>
        <div class="indiv-products">
          {{ $route.params.product }}
        </div>
      </div>

      <div @click ='syrup= !syrup'>
        <div v-show='syrup'>
          Syrups
        </div>
        <div class="indiv-products">
          {{ $route.params.product }}
        </div>
      </div>

    </div>

    <div id="stock-all" v-show="!toggle">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
        <tr :key="product.id" v-for="product in products">
          <td> {{ products.indexOf(product) + 1 }}. </td>
          <td>
              {{ product.name }}
          </td>
          <td>{{ product.brand }}</td>
          <td>{{ product.type }}</td>
          <td>{{ product.weight }} {{ product.unit }} </td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
        </tbody>
        
      </table>
    </div>

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
  data() {
    return {
      clicked: null,
      products: null,
      alcohol: false,
      coffee: false,
      milk: false,
      sugar: false,
      syrup: false,
      toggle: true
    };
  },
  methods: {
    showProduct (e) {
      //this.$emit('country-selected', e)
      console.log(e.target);
      this.clicked = e.target.nextSibling.nodeName;
      
    }
  },
  name: "Stock"
};
</script>
