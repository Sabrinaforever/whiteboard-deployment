const express = require('express')

const app = express()


const commonRouter = require("./src/commons/routes.js")




app.use("/products", commonRouter)





const PORT = (process.env.PORT) ? process.env.PORT : 8077

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})

