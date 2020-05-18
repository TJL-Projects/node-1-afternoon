const products = require('./../products.json');

module.exports = {
    getProducts: (req,res) => {
        const {price} = req.query

        if (price) {
            const items = products.filter(val => val.price >= +price);
            return res.status(200).send(items);
        }
        res.status(200).send(items)
    },

    getProductByID: (req, res) => {
        const {id} = req.params

        const item = products.find(element => element.id === +id)

        if (!item) {
            return res.status(500).send("Item not in list");
        }
        res.status(200).send(item)

        
    }
}
