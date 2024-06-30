document.addEventListener('DOMContentLoaded', function() {
    // Array to hold the inventory of store items
    let inventory = [];

    // Product objects with properties: name, model, cost, and quantity
    const product1 = {
        name: 'Tablet',
        model: 'A123',
        cost: 500.00,
        quantity: 10
    };

    const product2 = {
        name: 'Wireless Mouse',
        model: 'B456',
        cost: 75.00,
        quantity: 15
    };

    const product3 = {
        name: 'Nikon',
        model: 'C789',
        cost: 1100.00,
        quantity: 8
    };

    // Add products to the inventory array
    inventory.push(product1, product2, product3);

    // Function to display the inventory data in the HTML table
    function displayInventory() {
        const tableBody = document.querySelector('#productTable tbody');
        tableBody.innerHTML = ''; // Clear existing rows

        inventory.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.model}</td>
                <td>$${product.cost.toFixed(2)}</td>
                <td>${product.quantity}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initial display of inventory
    displayInventory();

    // Form submission event handler to add a new product dynamically
    const addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const productName = document.getElementById('productName').value.trim();
        const productModel = document.getElementById('productModel').value.trim();
        const productCost = parseFloat(document.getElementById('productCost').value);
        const productQuantity = parseInt(document.getElementById('productQuantity').value);

        // Validate inputs
        if (productName === '' || productModel === '' || isNaN(productCost) || isNaN(productQuantity)) {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Create new product object
        const newProduct = {
            name: productName,
            model: productModel,
            cost: productCost,
            quantity: productQuantity
        };

        // Add new product to inventory array
        inventory.push(newProduct);

        // Update the table display
        displayInventory();

        // Clear form fields
        addProductForm.reset();
    });
});
