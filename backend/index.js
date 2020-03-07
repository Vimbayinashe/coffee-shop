const express = require('express')
const sqlite = require('sqlite')

const app = express()
const cors = require('cors')
app.use(cors())
app.use('/images', express.static('images'))
// app.use(express.json())

let allProducts

sqlite.open('productList.sqlite').then(database_ => {
  allProducts = database_
})


app.get('/products', (request, response) => {
  allProducts.all('SELECT * FROM products').then((products) => {
    response.send(products)
  })
})


app.get('/products/:category', (request, response) => {

  let whereClause;
  
  switch (request.params.category) {
    case 'all':
      whereClause = ' ';
      break;
    case 'coffee':
      whereClause = " WHERE type='coffee' OR type='instant coffee' OR type='espresso' ";
      break;
  }

  allProducts.all('SELECT * FROM products' + whereClause).then((products) => {
    response.send(products)
  })
  // if (request.params.category == 'all') {
  //   allProducts.all('SELECT * FROM products').then((products) => {
  //     response.send(products)
  //   })
  // }
  // else if(request.params.category == 'coffee'){
  //   allProducts.all('SELECT * FROM products WHERE type="coffee" OR type="instant coffee" OR type="espresso"')
  //   .then((products) => {
  //     response.send(products)
  //   })
  // }
})


app.listen(3000)