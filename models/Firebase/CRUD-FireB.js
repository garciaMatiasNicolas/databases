const admin = require('firebase-admin');
const serviceAccount = require('./key/database-coder-firebase-adminsdk-p61qs-28a4884cd9.json');
const { ProductF } = require('./DAOs/ProductsF.js')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p61qs%40database-coder.iam.gserviceaccount.com"
})

const db = admin.firestore();
const query = db.collection('products');

async function Connect(){
    doc.create({ name: 'Matias Garcia' })
}

// CLASE CON TODAS LAS PETICIONES CRUD
class fireCRUD {
    
    // RECIBE POR PARAMETRO EL DOC QUE CREAMOS PARA HACER LAS PETICIONES
    constructor(collection){
        this.collection = collection
    }
    
    // RECIBE POR PARAMETRO EL OBJETO PARA CREAR EL DOCUMENTO EN MI BASE DE DATOS
    create(data){
        const doc = this.collection.doc(data.id)
        doc.create(data)
    }

    read(){
        let quetySnapshot = this.collection.get()
        let docs = quetySnapshot.docs()
        console.log(docs)
    }
    
    update(id, object){
        const doc = this.collection.doc(id)
        doc.update(object)
    }

    
    delete(id){
        const doc = this.collection.doc(id)
        doc.delete()
    }
}

const database = new fireCRUD(query);
const producto1 = new ProductF('Celular', 'x', 250, 5, "1")

database.create(JSON.parse(JSON.stringify(producto1)))
