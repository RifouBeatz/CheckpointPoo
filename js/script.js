// Création de produits
const product1 = new Product(1, "T-shirt", 20.00);
const product2 = new Product(2, "Pantalon", 30.00);
const product3 = new Product(3, "Chaussures", 50.00);

// Création d'un panier d'achat
const cart = new ShoppingCart();

// Ajouter des éléments au panier
cart.addItem(product1, 2); // Ajoute 2 T-shirts
cart.addItem(product2, 1); // Ajoute 1 Pantalon
cart.addItem(product3, 3); // Ajoute 3 paires de Chaussures

// Afficher le contenu du panier
cart.displayItems();

// Afficher le total des éléments dans le panier
console.log(`Total des éléments dans le panier: ${cart.getTotalItems()}`);

// Supprimer un élément du panier (par exemple, T-shirt)
cart.removeItem(1);

// Afficher à nouveau le contenu du panier après suppression
cart.displayItems();
class ShoppingCart {
    constructor() {
        this.items = []; // Tableau pour stocker les éléments du panier
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Méthode pour ajouter un élément au panier
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Augmente la quantité si l'élément existe déjà
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); // Ajoute un nouvel élément au panier
        }
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les éléments du panier
    displayItems() {
        if (this.items.length === 0) {
            console.log("Le panier est vide.");
            return;
        }
        
        console.log("Éléments dans le panier :");
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantité: ${item.quantity} - Prix total: ${item.getTotalPrice().toFixed(2)}€`);
        });
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // Instance de Product
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de cet élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
