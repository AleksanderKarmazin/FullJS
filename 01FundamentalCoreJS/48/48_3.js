let obj20 = {
    name:'Ivan',
    age: 30,
    info: {
         skills:['html', 'js', 'css']
    }
}

let key = Object.keys(obj20) // возвращает массив
console.log(key);




let key2 = Object.keys(obj20).forEach((element, i, arr) => {
    console.log(element, i , arr );
}); // возвращает массив


let values = Object.values(obj20) // получаем values объекта в виде массива 
console.log(values);

let entries = Object.entries(obj20)  // возвращает массив состоящий из массивов 
// где каждая пара это ключ и значение объекта 
console.log(entries);

let fromEntries = Object.fromEntries(entries) // возвращает объект изи массива 
console.log(fromEntries);

