// CRUD operations are used for creating, reading, updating, and deleting data in a database.
// Create --> Post       This is actually used for creating operations
// Read --> Get          This is actually used for read operations
// Update --> Put        This is actually used for update operations
// Delete --> Delete     This is actually used for delete operations


// GET:
// Request:
    // Method: GET
    // URL: /api/products

// Response:
    // Status Code: 200 OK
    // Body:[
    //     {id: 1, name: "Product 1", price: 100},
    //     {id: 2, name: "Product 2", price: 200},
    //     {id: 3, name: "Product 3", price: 300}
    // ]



// POST:
// Request:
    // Method: POST
    // URL: /api/products
    // Body:{name: "Product 4", price: 400}

// Response:
    // Status Code: 201 Created
    // Body:{id: 4, name: "Product 4", price: 400}



//PUT:
// Request:
    // Method: PUT
    // URL: /api/products/1
    // Body:{name: "Updated Product 1", price: 150}

// Response:
    // Status Code: 200 OK
    // Body:{id: 1, name: "Updated Product 1", price: 150}



// DELETE:
// Request:
    // Method: DELETE
    // URL: /api/products/1
// Response:
    // Status Code: 200 OK
    // Body: {}
