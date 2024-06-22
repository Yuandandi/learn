"use strict";
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'Jakarta';
    }
    get getAppleEmail() {
        return `your apple mail ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const danzor = new User("foo@bas.com", 'joko', 'jksjiIosijwje');
danzor.courseCount = 2;
console.log(danzor);
console.log(danzor.getAppleEmail);
