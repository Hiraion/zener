class User {
  constructor(body) {    
    this.name = body.name
    this.dni = body.dni
    this.phone = body.phone
    this.address = body.address
    this.created = body.created
    this.updated = body.updated
  }
}
module.exports = User
/*
users
~~~
🔑id
♦ name
♦ dni
♦ phone
♦ address
♦ created
♦ updated
*/