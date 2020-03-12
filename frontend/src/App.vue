<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/basket">My basket</router-link> 
    </div>
    
    <router-view />

    <div id="footer">
      <div id="control-panel">
        <p>Here you can control previous orders and view product values in stock: </p>
        <p id="link"><router-link to="/control-panel">Control Panel</router-link> 
        </p>
      </div>
      <div id="credits">
        <p>Data and images from ICA shop online and Systembolaget web shop were used to create a database with products.
          Other images were downloaded from Unsplash.com. 
          These data are only used for learning purposes in this specific course.
        </p></div>
      <div id="creators">
        <p>Creators: Vimbayinashe Mandaza and Evi Ioannou</p>
        <p>Course: Design med JavaScript</p></div>
    </div>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer{
  margin-top: 1em;
  height: 10%;
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-column-gap: 4em;
  justify-content: center;
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
