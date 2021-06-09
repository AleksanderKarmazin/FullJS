let obj20 = {
    name:'Ivan',
    age: 30,
    info: {
         skills:['html', 'js', 'css']
    }
}
const newObj = Object.assign({},obj20 )
console.log(newObj);
console.log(newObj.info === obj20.info);
console.log(newObj === obj20);

// JSON - это строка
// При помощи метода  JSON.stringify() 
// =>  конвертаци из объекта в  JSON -  строку
console.log(JSON.stringify(obj20));
let objJSON = JSON.stringify(obj20)


let  objFromJSON = JSON.parse(objJSON)
console.log(objFromJSON);
// При помощи метода JSON.parse()
// =>  конвертаци из JSON -  строки в объекта 
console.log(newObj.info === obj20.info);
console.log(newObj.info === objFromJSON.info);

