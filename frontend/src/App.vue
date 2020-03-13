<template>
  <div id="app">

    <!--  Creators: Vimbayinashe Mandaza and Evi Ioannou
          Course: Design med JavaScript -->
    <main>
      <div id="nav">
        <router-link id="coffee" to="/">Coffee World</router-link>
        <router-link to="/basket">
          <img id="basket-image" src="./assets/images/basket3.png" alt="">
        </router-link> 
      </div>
      <router-link to="/basket">
        <img id="basket2" src="./assets/images/basket.png" alt="">

      </router-link> 
      <router-view />
    </main>

    <div id="footer">
      <div id="control-panel">
        <!-- <p>Here you can control previous orders and view product values in stock: </p> -->
        <router-link id="personal-link" to="/control-panel">Personal</router-link>
      </div>
      <div @click="toggle=!toggle">
        <p  id="credits">Credits</p>
        <div v-if="toggle">   
          <p>Data and images from ICA shop online and Systembolaget web shop were used to create a database with products.
            Other images were downloaded from Unsplash.com. 
            These data are only used for learning purposes in this specific course.
          </p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    }
  }
}
</script>

<style>

#app {
  background-color: #E3D4CE;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  background-color: rgb(95, 58, 43);
  padding: 25px;
  margin-bottom: 2.5em;
}

main{
  flex-grow: 1;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */

#footer{
  background-color: rgb(95, 58, 43);
  color: rgb(233, 223, 223);
  text-align: justify;
  margin-top: 10em;
  height: 7em;
  display: grid;
  grid-template-columns: 25% 65%;
  grid-column-gap: 2em;
  justify-content: center;
  /* position: relative; 
  right: 0; 
  top: 100em; */
  /* bottom: 20em; */
  padding: 1em;
  width: 100vw;
}

#basket-image, #basket2 {
  width: 1.5em;
  height: auto;
}

#basket-image{
  /* color: #C4C4C4; */
  position: absolute; 
  right: 1.5em; 
  top: 2em; 
}

#basket2{
  position: absolute; 
  right: 1.5em; 
  top: 6.6em; 
}
#coffee {
  color: rgb(233, 223, 223);
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  font-size: 200%;
}

#personal-link, #credits {
  font-size: 1.3em;
}

#credits:hover, #personal-link:hover{
  text-decoration-line: underline;
}

#personal-link:hover{
  color:goldenrod;
  font-size: 1.4em;
}

#personal-link {
  color: rgb(233, 223, 223);
  padding: 1em 2em;
}


@media screen and (max-width: 425px){
  #footer{
    font-size: 0.5em;
  }

  #link{
    margin-top: 1em;
  }
}
</style>
