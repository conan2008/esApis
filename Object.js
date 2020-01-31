/**
 * prototype一个个赋值太麻烦，可能会直接赋值一个对象
 * 但是constructor就没有了
 * 因为在创建函数function Person() {}的时候 就隐形的给Person.prototype绑定了constructor
 * 那么可以在对象内赋值constructor: Person， 但是默认用户自己的属性是可以枚举的
 * 所以最佳方案是使用Object.defineProperty(Person.prototype, 'constructor', {})
 */
function Person() {}

const person1 = new Person()

Person.prototype = {
    name: '123',
    age: 24,
    sayName: function() {
        return this.name
    }
}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

const person = new Person()
console.log(person.__proto__.constructor)
// console.log(person1.sayName()) // error

/**
 * 原型对象的问题
 * 所有实例公用原型，如果属性是引用类型会出现不必要的麻烦
 * 如果可预知还好， 但是一旦疏忽就会造成麻烦
 */

 function Book() {}
 Book.prototype.names = ['ciscy', 'qianqian']

 const book1 = new Book()
 const book2 = new Book()

 book1.names.push('hengheng')

 console.log(book2.names)
 
 /**
  * 动态构造函数
  * 算是比较完美的构造方式
  */
 function Animal(name, age) {
     this.name = name
     this.age = age

    // 判断一个即可， 因为是统一初始化
     if (typeof this.say != 'function') {
        Animal.prototype.say = function() {
            return this.name
        }

        Animal.prototype.run = function() {
            return 'run'
        }
     }
 }
