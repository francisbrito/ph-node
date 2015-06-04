# PrintHouse API Client ![build status](https://travis-ci.org/francisbrito/ph-node.svg?branch=master)

> A Node.js client for PrintHouse's RESTful API.

## Installation

```sh
$ npm install ph-node
```

## Usage

```js
var printhouse = require('printhouse'),
    client = new printhouse.Client('api key');

client.getProducts(function (err, products) {
    console.log('list of products', products);
});
```
## Reference

### printhouse.Client(apiKey, [options])

Provides methods to access PrintHouse's API.

#### apiKey

Type: `String`

API key identifying account owner.

#### options

Type: `Object`

A JavaScript object containing options to be passed to the client.

##### options.endpoint

Type: `String`
Default: `http://printhouse.io/api`

URL where API listens for requests.

##### options.version

Type: `Number`
Default: Latest.

API version the client should consume.

### Client#getProducts([filter], fn)

Retrieves list of print products (e.g: canvases, photo paper, posters, etc.)

#### filter

Type: `Object`
Default: `{}`

Filters products by key/value pairs.

```js
client.getProducts({kind: 'canvas', format: '4x3'}, function (err, canvas) {
    // Magic goes here.
});
```

#### fn

Type: `Function`

Node.js style callback.

### Client#getProductById(id, fn)

Retrieves a single product by its ID.

#### id

Type: `String`

Id of a product.

#### fn

Type: `Function`

Node.js style callback.

### Client#getPrintFiles(fn)

Retrieves list of print files.

#### fn

Type: `Function`

Node.js style callback.

### Client#getPrintFileById(id, fn)

Retrieves a single print file by its ID.

#### id

Type: `String`

Id of a print file.

#### fn

Type: `Function`

Node.js style callback.

### Client#createPrintFile(fields, fn)

Creates a new print file.

#### fields

Type: `Object`

A JavaScript object containing print file properties.

##### fields.file

Type: `String`

URL to print.

##### fields.product

Type: `String`

Id of a product.

#### fn

Type: `Function`

A Node.js style callback.

### Client#getOrders(fn)

Retrieves a list or orders.

#### fn

Type: `Function`

A Node.js style callback.

### Client#getOrderById(id, fn)

Retrieves a single order by its ID.

#### id

Type: `String`

Id of an order.

#### fn

Type: `Function`

A Node.js style callback.

### Client#createOrder(fields, fn)

Creates a new order.

#### fields

Type: `Object`

A JavaScript objects containing order properties.

##### fields.items

Type: `Array`

A JavaScript array containing order items.

```js
[
    { // order item object
        quantity: 3,
        product: 'some product id.'
    },
    {
        quantity: 5,
        product: 'some other product id.'
    },
    // ...
]
```

#### fn

Type: `Function`

A Node.js style callback.

### Client#updateOrder(id, fields, fn)

Updates an order if it hasn't been confirmed yet.

#### id

Type: `String`

Id of an order.

#### fields

Type: `Object`

A JavaScript object containing new properties for order. 

##### fields.items

Type: `Array`

A JavaScript array containing order items.

#### fn

Type: `Function`

A Node.js style callback.

### Client#confirmOrder(id, fn)

Confirms an order. Once confirmed a order is charged to the developer's account and cannot be updated.

#### id

Type: `String`

ID of the order to be confirmed.

#### fn

Type: `Function`

A Node.js style callback.

## Tests

```sh
$ npm test
```

