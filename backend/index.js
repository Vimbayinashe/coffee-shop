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
  if (request.params.category == 'all') {
    allProducts.all('SELECT * FROM products').then((products) => {
      response.send(products)
    })
  }
})


app.listen(3000)