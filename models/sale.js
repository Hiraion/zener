class Sale {
  constructor(body) {    
    this.productId = body.productId
    this.userId = body.userId
    this.created = body.created
  }
}
module.exports = Sale
/*
sales
~~~
🔑 id
📎 product-id
📎 user-id
♦ created
*/