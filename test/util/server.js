var express = require('express'),
    _ = require('underscore');

var app = express(),
    db = {
    products: [
        {
            "_id": "54808653178180ce598d228f",
            "kind": "Canvas",
            "description": "aliqua in sit qui amet aliqua cillum laborum ut voluptate incididunt tempor",
            "price": 50.9,
            "x_inches": 40,
            "y_inches": 12,
            "x_pixels": 6000,
            "y_pixels": 3000,
            "format": "4:3"
        },
        {
            "_id": "54808653dc37a3297c99a880",
            "kind": "Photo Paper",
            "description": "nulla ipsum voluptate aliquip laborum officia sint occaecat ipsum ut labore fugiat",
            "price": 33.43,
            "x_inches": 48,
            "y_inches": 36,
            "x_pixels": 1800,
            "y_pixels": 2400,
            "format": "1:1"
        },
        {
            "_id": "548086537998179aab5b609d",
            "kind": "Canvas",
            "description": "nostrud sit laboris pariatur pariatur eiusmod voluptate proident tempor in eiusmod tempor",
            "price": 46.38,
            "x_inches": 40,
            "y_inches": 28,
            "x_pixels": 4800,
            "y_pixels": 4800,
            "format": "16:9"
        },
        {
            "_id": "54808653db8b05a773a30bc5",
            "kind": "Photo Paper",
            "description": "aliquip consectetur sit ullamco anim excepteur labore eiusmod commodo occaecat dolor sit",
            "price": 142.48,
            "x_inches": 20,
            "y_inches": 48,
            "x_pixels": 600,
            "y_pixels": 9000,
            "format": "3:2"
        },
        {
            "_id": "54808653b7017c7f795a6ac6",
            "kind": "Photo Paper",
            "description": "consectetur voluptate veniam sunt labore irure esse anim duis nostrud amet consequat",
            "price": 49.82,
            "x_inches": 16,
            "y_inches": 4,
            "x_pixels": 6000,
            "y_pixels": 2400,
            "format": "1:1"
        }
    ],
    printFiles: [
        {
          "product": "5480b1163faa6522eeac6b55",
          "file_url": "http://cdn.printhouse.io/file/5480b116c9c428b9314e2a15.jpg",
          "_id": "5480b116d7c183538f78056a"
        },
        {
          "product": "5480b1160e6db9eb9b229e55",
          "file_url": "http://cdn.printhouse.io/file/5480b116645a767bb3693366.jpg",
          "_id": "5480b116fb505fb184fe7229"
        },
        {
          "product": "5480b1167aaf76a27858b625",
          "file_url": "http://cdn.printhouse.io/file/5480b11605c49cf7ceaa9e8f.jpg",
          "_id": "5480b1169aa5ee207cf0d451"
        },
        {
          "product": "5480b11653887ff7b3b07069",
          "file_url": "http://cdn.printhouse.io/file/5480b1168a9c48ebed39414d.jpg",
          "_id": "5480b1167bbb9b0936abe2fd"
        },
        {
         "product": "5480b11656dc2b6d763914d4",
          "file_url": "http://cdn.printhouse.io/file/5480b1160d3267405ef33a31.jpg",
          "_id": "5480b1161f9627f9fe29d1ac"
        },
        {
          "product": "5480b116b4eea1eeaa5528fb",
          "file_url": "http://cdn.printhouse.io/file/5480b11675cfca6c538067ef.jpg",
          "_id": "5480b116be67664fef948b3f"
        }
    ],
    orders: [
        {
            "order_items": [
                {
                    "quantity": 1,
                    "print_file": "5480b116d7c183538f78056a"
                }
            ],
            "_id": "1"
        },
        {
            "order_items": [
                {
                    "quantity": 5,
                    "print_file": "5480b116fb505fb184fe7229"
                }
            ],
            "_id": "2"
        },
        {
            "order_items": [
                {
                    "quantity": 3,
                    "print_file": "5480b116fb505fb184fe7229"
                }
            ],
            "_id": "3"
        }
    ]
};

var products = createEndpoint(db.products),
    printFiles = createEndpoint(db.printFiles),
    orders = createEndpoint(db.orders);

app.use(function (req, res, next) {
    var apiToken = req.get('X-API-Token');

    if (!apiToken || apiToken !== 'some api token') {
        return next(new Error('Invalid API token.'));
    }

    next();
});

app.get('/1/products',              products.find);
app.get('/1/products/:id',          products.findById);

app.get('/1/print_files',           printFiles.find);
app.get('/1/print_files/:id',       printFiles.findById);
app.post('/1/print_files',          printFiles.create);

app.get('/1/orders',                orders.find);
app.get('/1/orders/:id',            orders.findById);
app.put('/1/orders/:id',            orders.update);
app.post('/1/orders',               orders.create);

app.post('/1/orders/:id/confirm', function (req, res) {
    var _id = req.params.id;

    var order = findById(db.orders, _id);

    res.json(update(order, _id, {status: 'confirmed'}));
});

app.all('*', function (req, res, next) {
    next(new Error('Cannot ' + req.method + ' ' + req.url));
});

app.use(function (err, req, res, next) {
    res.status(500).json({
        err: err.message
    });
});

module.exports.app = app;

// Helpers
function createEndpoint(arr) {
    return {
        find: function _find(req, res) {
            if (hasQueryParams(req)) {
                return res.json(filter(arr, req.query));
            }

            res.json(arr);
        },
        findById: function _findById(req, res) {
            var _id = req.params.id;

            if (!existsById(arr, _id)) {
                return res.status(404).json({
                    msg: 'Item with id "' + _id + '" not found.'
                });
            }

            var item = findById(arr, _id);

            res.json(item);
        },
        create: function _create(req, res) {
            var newItem = create(arr, req.params);

            res.status(201).json(newItem);
        },
        update: function _update(req, res) {
            var _id = req.params.id;

            if (!existsById(arr, _id)) {
                return res.status(404).json({
                    msg: 'Item with id "' + _id + '" not found.'
                });
            }

            var item = findById(arr, _id);

            // NOTE: Only needed for orders.
            if (item.status && item.status === 'confirmed') {
                return res.status(400).json({
                    msg: 'Item has already being confirmed.'
                });
            }

            res.json(update(arr, _id, req.params));
        }
    };
}

function hasQueryParams(request) {
    return !!request.query;
}

function filter(collection, filters) {
    return _.where(collection, filters);
}

function existsById(collection, id) {
    return !!findById(collection, id);
}

function findById(collection, id) {
    return _.findWhere(collection, {_id: id});
}

function create(collection, params) {
    var item = {
        _id: _.uniqueId()
    };

    var idx = collection.push(_.mixin(item, params)) - 1;

    return collection[idx];
}

function update(collection, id, params) {
    var idx = _.indexOf(collection, item),
        oldItem = _.findWhere(collection, {_id: id});

    collection[idx] = _.extend(oldItem, params);
    collection[idx]._id = id;

    return collection[idx];
}
