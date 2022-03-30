const router = require("express").Router();



const {

    userAuth,
  
    checkRole
  } = require("../controllers/Auth");
  const {
    creatProduct,

  } = require("../controllers/productController");

// const {
//     creatProduct
//   } = require("../controllers/productController");

  const upload = require('../middlewares/upload')


  router.post("/add" , upload.single('image_cover'),  creatProduct);

  module.exports = router;