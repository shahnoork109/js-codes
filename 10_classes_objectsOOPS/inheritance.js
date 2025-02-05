class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username),
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chaiiii", "chai.code@com", "1234")
chai.addCourse()
chai.logMe()

const masalachai = new User("masalaChai")
masalachai.logMe()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
