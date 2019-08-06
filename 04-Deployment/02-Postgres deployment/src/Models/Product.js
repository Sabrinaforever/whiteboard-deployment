const {
    db,
    Models,
    Model,
    Factory
} = require("./index.js")
class Product extends Model {

}
Models.add("Product", Product)
// console.log(product.create)


module.exports = Product