function greeting(name) {
    return function (last_name) {
        return function (address) {
            return function (age) {
                return function (marrige_status) {
                    return `
                    Her or his name is :${name}, 
                    And her or his  last name is ${last_name}, 
                    He or she lives in ${address}, 
                    He or she is ${age} old,
                    He or she is ${marrige_status} 
                    === THE END OF THE STORY ===
                    `
                }
            }
        }
    }
}

const testGreeting = greeting("Denis")("Ivanov")("Kiev")(30)('not married')
console.log(testGreeting);

// =========================================
const chainCallOf_name = greeting("Denis")
const chainCallOf_last_name = chainCallOf_name("Ivanov")
const chainCallOf_address = chainCallOf_last_name("Kiev")
const chainCallOf_age = chainCallOf_address(30)
const chainCallOf_status = chainCallOf_age('not married')

console.log(chainCallOf_status);