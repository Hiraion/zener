class Status {
  constructor(body) {    
    this.cost = body.cost
    this.price = body.price
    this.paid = body.paid
    this.retired = body.retired
    this.solved = body.solved
    this.created = body.created
    this.updated = body.updated
  }
}
module.exports = Status
/*
status
~~~
🔑 id
♦ cost
♦ price
♦ paid
♦ retired
♦ solved
♦ created
♦ updated
*/