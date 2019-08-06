const express = require('express')
const router = express.Router()
const handler = require("./handler.js")

router.get('/', async (req, res) => {
	try {
		console.log("here")
		let result = await handler.getProducts()
		return res.json({msg: "success", products: result})
	} catch (error) {
		return res.json({msg:"fail", result: error.message})
	}
})


router.get('/:id', async (req, res) => {
	try {
		let {id} = req.params
		let result = await handler.getProductbyId(id)
		console.log("result", result)
		return res.json({msg: "success", product: result})
	} catch (error) {
		if (error.message == 'Product not found.') {
			return res.status(404).json({msg: error.message})
		} else {
			return res.status(400).json({msg: error.message})

		}
	}
})


module.exports = router
// console.log(handler.getAllIds())
