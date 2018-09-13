class Work {
  constructor(body) {    
    this.device = body.device
    this.issue = body.issue
    this.customerId = body.customerId
    this.statusId = body.statusId
    this.detailId = body.detailId
    this.created = body.created
    this.updated = body.updated
  }
}
module.exports = Work
/*
works
~~~
🔑id
♦ device
♦ issue
📎customer-id
📎status-id
📎detail-id
♦ created
♦ updated
*/