export default class User { // user class
    constructor(email, name){ // constructor that accept 'email', and 'name'
        this._id = email;
        this.name = name;
    }
    greetings() { // has 1 method
        return `Hi, my name is ${this._name}`
    };
}
