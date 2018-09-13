class Profile {
  constructor(body) {    
    this.userId = body.userId
    this.status = body.status
    this.level = body.level
    this.created = body.created
    this.updated = body.updated
  }
}
module.exports = Profile
/*
profile
~~~
📎user-id
♦ status
♦ level
♦ created
♦ updated
*/