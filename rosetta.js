const firebase = require('firebase')

const myapp = firebase.initializeApp({databaseURL: "https://rosetta-27cca.firebaseio.com"}, 'rosetta')
const mydb = myapp.database()

_fetchProducts = function() {
    return new Promise(resolve => {
        const ref = mydb.ref('/products');
        ref.on('value', snapshot => {
            resolve(snapshot.val())
        })
    })
}

_fetchProductById = function(key) {
    return new Promise(resolve => {
        const ref = mydb.ref('/products/').orderByKey().equalTo(`${key}`);
        ref.on('value', snapshot => {
            resolve(snapshot.val()[key])
        })
    })
}

exports.fetch = function(path) {
    return new Promise((resolve, reject) => {
        const subpath = path.replace('/rosetta/', '').replace('length/', '').split('/')
        const type = subpath[0]
        const param = subpath[1]

        if (type === 'products') {
            return _fetchProducts().then(resolve)
        } else if (type === 'product') {
            return _fetchProductById(param).then(resolve)
        }
        
        reject(new Error(`Invalid type: ${type}, or params: ${param}`))
    });
}
