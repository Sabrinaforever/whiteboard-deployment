const Lucid = require('@adonisjs/lucid')
const STAGE = process.env.STAGE || "dev"
const config = require(`../../configs/${STAGE}/db-config.json`)
const {
    db,
    Models,
    Model,
    Factory
} = Lucid(config)



module.exports = {
    db,
    Models,
    Model,
    Factory
} 

// projectSetup()
