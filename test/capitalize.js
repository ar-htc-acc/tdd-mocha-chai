// the function you're going to test:
var capitalize = require('../capitalize');

// the class you're going to test:
var User = require('../models/user');

var chai = require('chai');
var expect = chai.expect;

describe('Capitalize Suite', function () {

    it('capitalizes single words', function () {
        expect(capitalize('express')).to.equal('Express');
        expect(capitalize('cats')).to.equal('Cats');
    });

    it('makes the rest of the string lowercase', function () {
        expect(capitalize('javascript')).to.equal('Javascript');
    });

    it('leaves empty strings alone', function () {
        expect(capitalize('')).to.equal('');
    });

    it('leaves strings with no words alone', function () {
        expect(capitalize('  ')).to.equal('  ');
        expect(capitalize('123')).to.equal('123');
    });

    it('capitalizes multiple-word strings', function () {
        expect(capitalize('what is Express?')).to.equal('What is express?');
        expect(capitalize('i love lamp')).to.equal('I love lamp');
    });

    it('leaves already-capitalized words alone', function () {
        expect(capitalize('Express')).to.equal('Express');
        expect(capitalize('Evan')).to.equal('Evan');
        expect(capitalize('Catman')).to.equal('Catman');
    });

    it('capitalizes String objects without changing their values', function () {
        var str = new String('who is JavaScript?');
        expect(capitalize(str)).to.equal('Who is javascript?');
        expect(str.valueOf()).to.equal('who is JavaScript?');
    });

    it('throws an error if passed a number', function () {
        expect(function () {
            capitalize(123);
        }).to.throw(Error);
    });

    it('no to equal', function () {
        expect(capitalize('foo')).not.to.equal('foo');
    });
});

describe('User model test', function () {
    var user;

    // this 're-defines' the user before each test
    beforeEach(function () {
        user = new User('Alice', 'McGee', 6);
    });

    it('can extract its name', function () {
        expect(user.getName()).to.equal('Alice McGee');
    });

    it('age after 10 years', function () {
        expect(user.getAgeAfterTenYears()).to.equal(16);
    });

    it('age after 20 years', function () {
        expect(user.getAgeAfterTwentyYears()).to.equal(26);
    });

});