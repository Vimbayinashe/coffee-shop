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
    case 'All':
      whereClause = ' ';
      break;
    case 'Coffee':
      whereClause = " WHERE type='coffee' OR type='instant coffee' OR type='espresso' ";
      break;
    case 'Milk':
      whereClause = " WHERE type='milk' OR type='cream' "
      break;
    case 'Spices':
      whereClause = " WHERE type='sugar' OR type='spice' "
      break;
    case 'Syrup':
      whereClause = " WHERE type='syrup' "
      break;
    case 'Alcoholic':
      whereClause = " WHERE type='alcoholic' "
      break;
  }

  allProducts.all('SELECT * FROM products' + whereClause).then((products) => {
    response.send(products)
  })
  
})


app.listen(3000)