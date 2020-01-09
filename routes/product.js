const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

productsController = require("../controllers/product");


router.get("/", auth, productsController.getAllProducts);

router.post("/", auth, productsController.createProduct);

router.get("/:id", auth, productsController.getOneProduct);

router.put("/:id", auth, productsController.updateOneProduct);

router.delete("/:id", auth, productsController.deleteOneProduct);

module.exports = router;