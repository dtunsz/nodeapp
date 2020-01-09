const Product = require("../models/product");

exports.createProduct =  (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        userId: req.body.userId,
    });
    product.save().then(
        () =>{
            res.status(201).json({
                message: "Product Created Successfully",
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error,
            });
        }
    );
};


exports.getOneProduct = (req, res, next) => {
    Product.findOne({
        _id: req.params.id,
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error,
            });
        }
    );
};


exports.updateOneProduct = (req, res, next) => {
    const product = new Product({
        _id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        userId: req.body.userId,
    });
    Product.updateOne({_id: req.params.id}, product).then(
        () => {
            res.status(200).json({
                message: "Product Successfully Updated"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error,
            })
        }
    );
};


exports.deleteOneProduct = (req, res, next) => {
    Product.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: "Product Deleted"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error,
            })
        }
    );
};


exports.getAllProducts = (req, res, next) => {
    Product.find().then(
        (products) => {
            res.status(200).json(products);
        } 
    ).catch(
        (error) => {
            res.status(400).json({
                error: error,
            });
        }
    );
};