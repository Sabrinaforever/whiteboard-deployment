

const Product = require("../Models/Product")




const getProducts = async function () {
    let results = await Product.all().then(r => r.toJSON())
    return results
}


const getProductbyId = async function (id) {
    let result = await Product.find(id).then(r => r.toJSON())
    return result
}



module.exports = {
    getProducts,
    getProductbyId
}
