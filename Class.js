class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static sayName() {
        console.log('name is ', this.age)
    }

    get name() {
        return 'hello'
    }

    set name(newName) {
        console.log('set:', newName)
    }
}

const person = new Person('zhangsan', 25)

console.log(person.name)

// Object.prototype._create = function() {
//     const [parent] = arguments
//     function Fn() {}
//     Fn.prototype = parent
//     return new Fn()
// }

// const Cat = {
//     name: 123
// }

// const dog = Object._create(Cat)
// console.log(dog.name)