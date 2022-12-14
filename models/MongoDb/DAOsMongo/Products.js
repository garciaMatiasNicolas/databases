// CREO CLASE DE PRODUCTOS
class Product {
    constructor (name, description, price, stock){
        this.name = name,
        this.description = description, 
        this.price = price,
        this.stock = stock
    }
}

// APARTIR DE LA CLASE, CREO UN ARRAY CON MI STOCK DE PRODUCTOS
const stockProducts = [
    new Product("Iphone 12", "Celular Iphone 12 124gb ultima generacion", 800, 15),
    new Product("Iphone 13 pro Max", "Celular Iphone 13 pro Max 224gb triple camara trasera", 1200, 8),
    new Product("Samsung S22", "Celular Samsung S22 64gb", 950, 5),
    new Product("Motorola G54", "Ceular Motrola G54 16gb 3ram", 300, 24),
]

// EXPORTO MI STOCK DE PRODUCTOS
module.exports = { stockProducts }
