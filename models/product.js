class Product {
  constructor(body) {
    this.id = body.id
    this.name = body.name
    this.barcode = body.barcode
    this.price = body.price
    this.cost = body.cost
    this.stock = body.stock
    this.min = body.min
    this.max = body.max
    this.created = body.created
    this.updated = body.updated
  }
}
module.exports = Product
/*
products
~~~
🔑id
♦ name
♦ barcode
♦ price
♦ cost
♦ stock
♦ min
♦ max
♦ created
♦ updated
*/