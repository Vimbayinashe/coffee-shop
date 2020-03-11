<template>
  <div>

    <div id="stock-nav">
      <h3 class="h3-dark" @click="viewAll=!viewAll">
        <!--if class "h3-dark" works then :class="{ dark: viewAll }" -->
        Categories
      </h3>
      <h3 @click="viewAll=!viewAll">
        All Products
      </h3>
    </div>

    <div id="stock-item" v-show="viewAll">
        
      <div>
        <div 
          @click ='toggle(alcoholOn)
          setProduct("alcoholic"); 
          alcoholOn = !alcoholOn'
        >
          Alchoholic Products
        </div>
        <div class="indiv-products" v-if="products" v-show='alcoholOn'>
          <CategoryDisplay :products="viewProducts"></CategoryDisplay>
        </div>
      </div>

      <div>
        <div @click ='toggle(coffeeOn); coffeeOn= true'>
          Coffee Brew and Beans
        </div>
        <div class="indiv-products" v-if="allCoffee" v-show='coffeeOn'>
          <CategoryDisplay :products="allCoffee"></CategoryDisplay>
        </div>
      </div>

      <div>
        <div @click ='toggle(milkOn); setProduct("milk"); milkOn=true'>
          Milk and Creams
        </div>
        <div class="indiv-products" v-show='milkOn'>
          <CategoryDisplay :products="viewProducts"></CategoryDisplay>
        </div>
      </div>

      <div @click ='toggle(sugarOn); setProduct("spices"); sugarOn=true'>
        <div>
          Sugar and Spices
        </div>
        <div class="indiv-products" v-show='sugarOn'>
          <CategoryDisplay :products="viewProducts"></CategoryDisplay>
        </div>
      </div>

      <div @click ='toggle(syrupOn) ; setProduct("syrup"); syrupOn = true'>
        <!-- find solution to compute syrupOn = true in 'toggle()' -->
        <div>
          Syrups
        </div>
        <div class="indiv-products" v-show='syrupOn'>
          <CategoryDisplay :products="viewProducts"></CategoryDisplay>
        </div>
      </div>

    </div>

    <div id="stock-all" v-show="!viewAll">
      <CategoryDisplay :products="products"></CategoryDisplay>
    </div>

  </div>
</template>

<script>
import CategoryDisplay from '@/components/CategoryDisplay.vue'

export default {
  components: {
    CategoryDisplay
  },
  computed: {
    setClass(viewAll) {
      return this.viewAll? h3-dark : nothing
    }
  },
  created() {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(result => {
        this.products = result;
        console.log(result);
        this.setCoffee()
      });
  },
  data() {
    return {
      clicked: null,
      products: null,
      alcoholOn: false,
      coffeeOn: false,
      milkOn: false,
      sugarOn: false,
      syrupOn: false,
      viewAll: true,
      allCoffee:null,
      viewProducts: null,
      alcoholic: null
    };
  },
  methods: {
    setCoffee () {
      this.allCoffee = this.products.filter(
        product => product.type ==='coffee' || product.type === 'espresso' || product.type === 'instant coffee'
      )
    },
    setProduct (type) {
      // type = this.products.filter(
      //   product => product.type ===type
      // )
      this.viewProducts = this.products.filter(
        product => product.type ===type
      )
    },
    toggle(type) {

      // This works 
      this.alcoholOn = false;
      this.coffeeOn = false;
      this.milkOn = false;
      this.syrupOn = false;
      this.sugarOn = false;

      // This is NOT working
      
      let statuses = [
        this.alcoholOn,
        this.coffeeOn,
        this.milkOn,
        this.syrupOn,
        this.sugarOn
      ]
      
      statuses.forEach( status => {
          if (status = type) status = true
        else status = false
      })

      //console.log(type);
      
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
  /* Undo below later: */
  /* font-size: 150%; */
  width: 15em;
}

</style>
