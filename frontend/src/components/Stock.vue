<template>
  <div>

    <div id="stock-nav">
      <h3 class="h3-dark" @click="toggle=!toggle">
        <!--if class "h3-dark" works then :class="{ dark: toggle }" -->
        Categories
      </h3>
      <h3 @click="toggle=!toggle">
        All Products
      </h3>
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
        <div>
          Sugar and Spices
        </div>
        <div class="indiv-products" v-show='sugar'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis itaque dignissimos eaque necessitatibus molestiae consequatur quaerat expedita corrupti tempore eius, doloribus et iste ad ea, sint provident tempora deserunt.
        </div>
      </div>

      <div @click ='syrup= !syrup'>
        <div>
          Syrups
        </div>
        <div class="indiv-products" v-show='syrup'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet ab odit. Molestias vel id repellat cumque sint eum eaque, deserunt minus enim aperiam libero explicabo porro ratione, provident sed?
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
  computed: {
    setClass(toggle) {
      return this.toggle? h3-dark : nothing
    }
  },
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

<style scoped>

#stock-nav {
  background: rgba(12, 105, 192, 0.322);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3em;
  margin: 2em 20vw;
  width: 40em;
}

#stock-nav>h3-dark {
  background-color: rgb(12, 120, 192);
}

h3 {
  font-size: 150%;
  width: 15em;
}

/* Table Style */

table {
  border: 0.2em solid darkblue;
  margin: 3vw 10vw;
}
th, tr{
  margin: 2em;
  padding: 1em;
}

tr {
  margin: 1em;
  text-align: left;
  padding: 1em 0.5em;
}

td {
  /* margin: 1em; */
  text-align: left;
  padding: 1em 0.5em;
}

th, td {
  border-bottom: 0.1em solid darkblue;
}

tr:hover {
  background-color: lightcyan;
}

/* td img {
  height : 50px;
  width : auto
} */

</style>
