function Person() {}

Person.prototype = {
    name: '123',
    age: 24,
    sayName: function() {
        return this.name
    }
}


const person = new Person()
console.log(person.__proto__.constructor)