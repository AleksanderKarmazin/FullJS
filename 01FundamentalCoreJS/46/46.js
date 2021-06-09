// Замыкание это функция которая
//  ссылается на свободные переменные 

// Свободные переменные - это переменные 
//  которые не были переданны этой функции
//  как параметры и не были объявлены внутри этой
//  функции как локальные переменные
// ================================
// Другими словами: функция которая 
// была определена в замыкании 
//  запоменает окружение(контекст)
// в которо она была создана 
// и имеет к нему доступ 
// а так же к окружению выше 
// и может получать различные переменные
//  из окружения родительской функции и т. д. 


// Sope - ссылка на лексическое окружение выше 
//лексическое окружение 0 - Window

function geyFullName(first_name, last_name) { 
    /** лексическое окружение: 1 {
     * @param {*} first_name 
     * @param {*} last_name
     *  }
     * Sope: лексическое окружение 0 - Window 
     */
    console.log(first_name, last_name);
    return function () {
        // Sope: лексическое окружение 1
        // лексическое окружение: 2
        return `${first_name}, ${last_name}`

        // Возвращаемая функция function () может запоминать переменные 
        /** 
         * @param {*} first_name 
         * @param {*} last_name
         */
        //  и может их изменять и получать изменённое состояния 

    }
}

const getName = geyFullName('Aleksand', 'Karmazin')
console.log(getName);


function updateValue(val = 0) {
    let x = val;
    return function (nam = 0) {
        return (x += nam)
    }
}

const updVal = updateValue(2)
const updVal2 = updateValue(4)
// console.log(updVal(1));
// console.log(updVal(0));
// console.log(updVal2(2));
// console.log(updVal2(0));

function checkCred() {
    /**
     * Мы создали локальные переменные 
     * к которым нет доступа снаружи 
     */
    
    const login = 'test'
    const password = '123456'

    return {
        /**
         * Вот эти методы в замыкании получают 
         * доступ к переменным 
         * login
         * password
         * и сравнивают с переданным value
         * и возвращают true || false
         */
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        }
    }
}


const check = checkCred()
// вот здесь мы не имеем прямого доступа к переменным логин и пасворд
//  только через отдельный метод 
console.log(check);
console.log(check.checkLogin("data"));


// переменные которые  объявлены в замыкании 
// будут оставться храниться в памяти 
//  и не будут очищаться никак 
//  потому что есть связь между этими переменными 
// и методами которые они используют 



function closureExample() {
    const arrOfFanc = [];
    let value = '';

    for (let index = 0; index < 10; index++) {
         value += index
         arrOfFanc.push(function () {
             console.log(value, index);
         })
        
    }
    // console.log(arrOfFanc);
    return arrOfFanc;
}
const res = closureExample()
res[0]()
res[5]()