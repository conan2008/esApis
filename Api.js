/**
 * call, apply
 * test.call(obj, ...arg)
 * 思路： this是谁调用指向谁
 * 这里声明没有用const和let， 是因为一个知识点
 * let和const声明并不会挂在window上，而var会
 */
Function.prototype._call = function() {
    const [context = window, ...args] = arguments

    let fn = Symbol('fn')
    context[fn] = this

    let result = context[fn](...args)

    delete context.fn

    return result
}

var obj = {
    name: '123'
}
var name = '321'

function test() {
    console.log(this.name)
}
test._call(obj)
