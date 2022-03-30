const Product = require("../models/Product")

const creatProduct = async (req, res) => {

    console.log('request',req.body);

    try {
      const name = req.body.name
      const description = req.body.description
      const price = req.body.price

      const newProduct = new Product({
        name: name,
        description: description,
        price: price,
        // user_id:user_id
      })

        if (req.file) {
        newProduct.image_cover = req.file.originalname
      }
      const saveProduct = await newProduct.save()
      res.status(201).json({ success: true, data: saveProduct })

    } catch (error) {
          console.log(error)
          res.status(404).json({ success: false, data: [], error: error })
    }
  }

  module.exports = {
    creatProduct
  }