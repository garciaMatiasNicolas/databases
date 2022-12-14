const mongoose = require('mongoose');
const { ProductsSchema } = require('./DAOsMongo/ProductsSchema.js');
const { stockProducts } = require('./DAOsMongo/Products.js');

// CONEXION A MONGO ATLAS
const connectDb = async () => {
    await mongoose.connect('mongodb+srv://matigarcia:1708@test.0vglzka.mongodb.net/?retryWrites=true&w=majority')
}

connectDb() 
.then(()=> console.log('Base de datos conectada'))
.catch((err)=> console.error(err))

// CLASE CON TODAS LAS PETICIONES CRUD
class mongoCRUD {
    
    // RECIBE POR PARAMETRO EL MODEL QUE CREAMOS PARA HACER LAS PETICIONES
    constructor(schema){
        this.schema = schema
    }

    // RECIBE POR PARAMETRO EL STOCK DE PRODUCTOS PARA CREAR UNO POR UNO LOS DOCUMENTOS EN MI BASE DE DATOS
    // EJEMPLO: database.createData(stockProducts)
    createData(data){
        let schema = this.schema;
        data.forEach(element => {
            schema.create(element)
        });
    }

    // RECIBE POR PARAMETRO UN ID DE UN OBJETO DE LA COLECCION Y LO DEVUELVE POR CONSOLA
    // EJEMPLO: database.readById("0151545133055")
    async readById(id){
        let schema = this.schema;
        let product = await schema.find( {_id: id} ) 
        console.log(product)
    }

    // DEVUELVE POR CONSOLA TODOS LOS OBJETOS DE LA COLECCION
    async readAll(){
        let schema = this.schema;
        let data = await schema.find({})
        console.log(data)
    }

    // RECIBE POR PARAMETRO EL ID, Y UN OBJETO CON LOS CAMPOS A MODIFICAR COMO KEY, Y LOS DATOS ACTUALIZADOS COMO VALUE DE ESA KEY
    // EJEMPLO: database.updateById("0151545133055", {price: 2500, stock: 6})
    async updateById(id, fields){
        let schema = this.schema;
        let data = await schema.updateOne( {_id: id}, {$set: fields} )
        console.log(data)
    }

    // RECIBE POR PARAMETRO EL ID DE UN DOCUMENTO Y LO ELIMINA
    // EJEMPLO: database.deleteById("0151545133055")
    async deleteById(id){
        let schema = this.schema;
        let product = await schema.deleteOne({_id: id}) 
        console.log(product)
    }

    // BORRA TODOS LOS DOCUMENTOS DE UNA COLECCION
    async deleteAll(){
        let schema = this.schema;
        let data = await schema.deleteMany({})
        console.log(data)
    }
}

// CREAMOS UN NUEVO OBJETO CON EL MODEL PARA HACER LAS PETICIONES
const database = new mongoCRUD (ProductsSchema)

// AQUI ES PARA PROBAR LAS FUNCIONES DE LA CLASE MONGO-CRUD
database.createData(stockProducts);