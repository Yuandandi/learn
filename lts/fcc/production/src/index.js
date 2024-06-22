"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jakarta";
    }
    ;
    deleteToken() {
        console.log("Token deleted");
    }
    ;
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    ;
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
    }
    ;
}
;
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
    ;
}
const danzor = new User("danzor@mail.com", "danzor");
console.log(danzor);
const rehan = new subUser('raihan@mail.com', 'raihan');
rehan.changeCourseCount();
console.log(rehan);
