let obj1 = {
    name: 'Denis'
}
let obj2 = {
    age: 30
}

// Создастся ссылка на  obj1
let newObj = obj1
console.log(newObj === obj1);


let newObj2 = Object.assign({}, obj1, obj2 )
console.log(newObj2);
console.log(obj1);

// изменение в newObj2 не приведёт к изменениям в obj1
console.log(newObj2 === obj1);

let newObj3 = Object.assign( obj1, obj2 )
console.log(newObj3);
console.log(obj1);


let obj10 = {
    name: 'Denis'
}
let obj20 = {
    name:'Ivan',
    age: 30
}

let newObj20 = Object.assign(obj10, obj20 )
console.log(newObj20);
console.log(obj10);



