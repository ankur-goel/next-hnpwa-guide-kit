const firebase = require('firebase')

const myapp = firebase.initializeApp({databaseURL: "https://rosetta-126210.firebaseio.com"}, 'rosetta')
const mydb = myapp.database()

exports.watch = function() {
    return new Promise(resolve => {
        const ref = mydb.ref('/products')
        ref.on('value', snapshot => {
            console.log(snapshot.val())
            resolve(snapshot.val())
        })
    })
}
