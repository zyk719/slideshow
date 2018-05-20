const log = console.log.bind(console)

// 根据选择器，选择元素
const e = function(selector) {
    let element = document.querySelector(selector)
    if (element == null) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return element
    }
}
// 根据选择器，选择所有元素
const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length == 0) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return elements
    }
}
// 为一个元素绑定事件
const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}
// 为一组元素绑定事件
const bindAll = function(selector, eventName, callback) {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}
// 所有拥有class元素移除class
const removeClassAll = function(className) {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        // log('classname', className, e)
        e.classList.remove(className)
    }
}


// 添加/移除效果
const changeCss = (element, className) => {
    // 移除效果
    removeClassAll(className)
    // 给目标元素添加效果
    element.classList.add(className)
}

export {log, e, es, bindEvent, bindAll, removeClassAll, changeCss}
