class User {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    getAgeAfterTenYears() {
        return this.age + 10;
    }

    getAgeAfterTwentyYears() {
        return this.age + 20;
    }
}

module.exports = User;