const {
    db
} = require("./index.js")
const Profile = require("./Profile.js")
const Product = require("./Product.js")
data = [{
    "id": 32,
    "name": "SOFA BED",
    "category": "furniture",
    "colors": "red",

    "price": 100.00,
    "seller": "myshop.com",
    "description": "3 person sofa bed",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 33,
    "name": "DOUBLE BED",
    "category": "furniture",
    "colors": "green",

    "price": 1321.00,
    "seller": "myshop.com",
    "description": "3 person sofa bed",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 34,
    "name": "Lucky Star Furniture - Shoe cabinet/ Storage with 2 drawers",
    "category": "furniture",
    "colors": "white",

    "price": 1899.00,
    "seller": "Lucky Star Furniture",
    "description": "You can adjust the height of layer according to needs.",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 35,
    "name": "4 SEATED SOFA",
    "category": "furniture",
    "colors": "green",
    "price": 1999.00,
    "seller": "myshop.com",
    "description": "4 seated sofa",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 36,
    "name": "3 SEATED SOFA",
    "category": "furniture",
    "colors": "green",

    "price": 1999.00,
    "seller": "myshop.com",
    "description": "3 seated sofa",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 37,
    "name": "Lucky Star Furniture - 2-doored wardrobe",
    "category": "furniture",
    "colors": "black",

    "price": 1999.00,
    "seller": "Lucky Star Furniture",
    "description": "Large wardrobe",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 38,
    "name": "WOODEN TABLE",
    "category": "furniture",
    "colors": "black",

    "price": 599.00,
    "seller": "myshop.com",
    "description": "wooden table",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 39,
    "name": "SHOES RACK",
    "category": "furniture",
    "colors": "black",
    "price": 199.00,
    "seller": "myshop.com",
    "description": "minimalistic shoes rack",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 39,
    "name": "Outdoor chair",
    "category": "furniture",
    "colors": "black",
    "price": 199.00,
    "seller": "myshop.com",
    "description": "minimalistic outdoor chair",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 39,
    "name": "Indoor chair",
    "category": "furniture",
    "colors": "black",
    "price": 199.00,
    "seller": "myshop.com",
    "description": "minimalistic indoor chair",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 40,
    "name": "Lucky Star Furniture - outdoor chairs x 4",
    "category": "furniture",
    "colors": "black",
    "price": 799.00,
    "seller": "Lucky Star Furniture",
    "description": "4 waterproof plastic chairs",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 41,
    "name": "Hallow - Air Purifier 2X",
    "category": "home appliance",
    "colors": "white",

    "price": "599.00",
    "seller": "Hallow",
    "description": "Breath clean and odour-free air.",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 42,
    "name": "GEMI - Electric Oven",
    "category": "home appliance",
    "colors": "purple",

    "price": 350.00,
    "seller": "GEMI",
    "description": "portable electric oven",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 43,
    "name": "Canan - WE2331 Printer",
    "category": "Computer Equipment",
    "colors": "red",
    "price": 899.00,
    "seller": "Canon",
    "description": "Available in 3 stylish body colors offering more color choices to match with different styles and tastes.",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 44,
    "name": "Cgate - 1TB USB 3.0 2.5\" hard drive",
    "category": "Computer Equipment",
    "colors": "silver",
    "price": 389.00,
    "seller": "Cgate",
    "description": "hard drive USB 3.0",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 45,
    "name": "Gugo - Mesh Wifi System",
    "category": "Computer Equipment",
    "colors": "white",
    "price": 1321.5,
    "seller": "Gugo",
    "description": "Mesh Wi-Fi System (Parallel Import)",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
},
{
    "id": 45,
    "name": "Gugo Krome",
    "category": "Computer Equipment",
    "colors": "white",
    "price": 999,
    "seller": "Gugo",
    "description": "Amazing browser",
    "stocks": 100,
    "created_at": null,
    "updated_at": null
}
]
const projectSetup = async function () {
    await Promise.all([
        db.schema.dropTableIfExists('profiles'),
        db.schema.dropTableIfExists('users'),
        db.schema.dropTableIfExists('accounts'),
        db.schema.dropTableIfExists('products')
    ])

    await Promise.all([
        // Create Movie Table    
        db.schema.createTable('products', function (table) {
            table.increments()
            table.string('name').unique()
            table.string('category')
            table.string('colors')
            table.float('price')
            table.string('seller')
            table.string('description')
            table.integer('stocks')
            table.timestamps()
            // table.string('genre')
            // table.timestamp('release_date')
            // table.boolean('showing')
            // table.timestamps()
        }),
        // Create Cinema Table
        db.schema.createTable('profiles', function (table) {
            table.increments()
            table.string('username').unique()
            table.specificType('basket', 'INT[]').default('{}')
            table.specificType('purchases', 'jsonb[]').default('{}')
            table.timestamps()
        }),
        // Create accounts Table
        db.schema.createTable('accounts', function (table) {
            table.increments()
            table.string('username').unique()
            table.string('hash')
            table.string('role')
            table.timestamps()
        }),
    ])
}


async function addData(data) {
    // console.log(data)
    for (let prod of data) {
        const product = new Product()
        product.name = prod.name
        product.category = prod.category
        product.colors = prod.colors
        product.price = prod.price
        product.seller = prod.seller
        product.description = prod.description
        product.stocks = prod.stocks
        await product.save()
    }

    const result = await Product.all()
    console.log(result.toJSON())
}

// Models.add("Profile", Profile)
// console.log(Profile.create)
async function init(data) {
    await projectSetup()
    console.log("done")
    const profile = new Profile()
    profile.username = "Jimmy"
    await profile.save()
    await addData(data)
    const result = await Product.query().fetch()
    console.log(result.toJSON())
    // console.log("done")
    return "done"
}

init(data)

// test(data)


// test()