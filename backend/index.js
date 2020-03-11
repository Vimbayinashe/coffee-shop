const express = require('express')
const sqlite = require('sqlite')

const app = express()
const cors = require('cors')
app.use(cors())
app.use('/images', express.static('images'))
app.use(express.json())

let allProducts
let orders


/** Products Database */

sqlite.open('productList.sqlite').then(database_ => {
  allProducts = database_
})


// app.get('/products', (request, response) => {
//   allProducts.all('SELECT * FROM products').then((products) => {
//     response.send(products)
//   })
// })


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

app.put('/control-panel/products/:id', (request, response) => {

  if (request.body.price == 0) {
    allProducts.run(
      'UPDATE products SET quantity=? WHERE id=?',
      [ request.body.quantity, request.params.id ]
    )
  } else if (request.body.quantity == 0) {
    allProducts.run(
      'UPDATE products SET price=? WHERE id=?',
      [ request.body.price, request.params.id ]
    )
  } else {  
    allProducts.run(
      'UPDATE products SET price=?, quantity=? WHERE id=?',
      [ request.body.price, request.body.quantity, request.params.id ]
    )
  }

  console.log("UPDATE successful");
  response.status(200)
  response.send(request.body)
  
})


/** Orders Database */

sqlite.open('orders.sqlite').then(database => {
  orders = database
})

app.get('/orders', (request, response) => {
  orders.all('SELECT * FROM orders').then((orders) => {
    response.send(orders)
    console.log("GET request succeeded")
  })
})

app.post('/orders', (request, response) => {
  // response.status(418)
  console.log(request.body);
  orders.run(
    'INSERT INTO orders VALUES (?, ?, ?, ?, ?)',
    [
      request.body.name,
      request.body.address,
      request.body.productId,
      request.body.quantity,
      "false"
    ]
  )
  console.log('POST Successful!');

  response.send(request.body)
})

app.listen(3000)