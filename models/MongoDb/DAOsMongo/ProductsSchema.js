const mongoose = require('mongoose');
const { model, Schema } = mongoose;

// CREO SCHEMA
const productsSchema = new Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    stock: {type:Number, required: true}
});

// CREO EL MODEL
const ProductsSchema = model('Products', productsSchema);


// EXPORTO EL MODEL PARA UTILIZARLO EN LAS PETICIONES
module.exports = { ProductsSchema }