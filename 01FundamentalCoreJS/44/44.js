const users = [
    {
    _id:"423k6j2j645743k45734734k734k473654k3",
    index:0,
    isActive:false,
    balance: 2397.788,
    age: 20,
    name:'Aleksandr Karmazin',
    gender: 'male',
    company:'Bobday',
    email: 'test@mail.com',
    phone: "+7 (953)35 43 434",
    cratedAt: Date() 
    },
    {
        _id:"423k6j2j645743k45734734k734k473654k3",
        index:0,
        isActive:false,
        balance: 2397.788,
        age: 20,
        name:'Aleksandr Karmazin',
        gender: 'male',
        company:'Bobday',
        email: 'test@mail.com',
        phone: "+7 (953)35 43 434",
        cratedAt: Date() 
    },
    {
        _id:"423k6j2j645743k45734734k734k473654k3",
        index:0,
        isActive:false,
        balance: 2397.788,
        age: 30,
        name:'Aleksandr Karmazin',
        gender: 'male',
        company:'Bobday',
        email: 'test@mail.com',
        phone: "+7 (953)35 43 434",
        cratedAt: Date() 
    },
    {
        _id:"423k6j2j645743k45734734k734k473654k3",
        index:0,
        isActive:false,
        balance: 2397.788,
        age: 30,
        name:'Aleksandr Karmazin',
        gender: 'male',
        company:'Bobday',
        email: 'test@mail.com',
        phone: "+7 (953)35 43 434",
        cratedAt: Date() 
    },
    {
    _id:"423k6j2j645743k45734734k734k473654k3",
    index:0,
    isActive:false,
    balance: 2397.788,
    age: 60,
    name:'Aleksandr Karmazin',
    gender: 'male',
    company:'Bobday',
    email: 'test@mail.com',
    phone: "+7 (953)35 43 434",
    cratedAt: Date() 
    },
    {
        _id:"423k6j2j645743k45734734k734k473654k3",
        index:0,
        isActive:false,
        balance: 2397.788,
        age: 70,
        name:'Aleksandr Karmazin',
        gender: 'male',
        company:'Bobday',
        email: 'test@mail.com',
        phone: "+7 (953)35 43 434",
        cratedAt: Date() 
    },
    {
        _id:"423k6j2j645743k45734734k734k473654k3",
        index:0,
        isActive:false,
        balance: 2397.788,
        age: 40,
        name:'Aleksandr Karmazin',
        gender: 'male',
        company:'Bobday',
        email: 'test@mail.com',
        phone: "+7 (953)35 43 434",
        cratedAt: Date() 
    },
    {
        _id:"423k6j2j645743k45734734k734k473654k3",
        index:0,
        isActive:false,
        balance: 2397.788,
        age: 27,
        name:'Aleksandr Karmazin',
        gender: 'male',
        company:'Bobday',
        email: 'test@mail.com',
        phone: "+7 (953)35 43 434",
        cratedAt: Date() 
    },
]
 
// forEach
// users.forEach((user, i, arr) => {
//     console.log(user, i, arr);
// })
// filter
// const userLess30 = users.filter((user, i, arr) => 
//     user.age < 40
// )
// console.log(userLess30);

//?????????????? ?????????? ????????????
// Map
const userName = users.map((user) => {
 return  { 
     user: user.name, 
     notUser: user.age 
    }
 }
)
// console.log(userName);

// reduce
// accumulator - '1) ?????????????????? ???????????????? 
// 2) ?????????????????????? ?? ?????????????? ?????????? ?????????????????? ?????????????????? 
// ???????????????????????? ???????????????????? ???????????????? ?? ?? ???????? ???? ?????????? ????????????
//     
const totalBalance = users.reduce((
    acc, 
    user,
    // i,
    // array
    ) => {
     console.log(acc);
    return acc += user.balance
// ???????? ?????????????????? ???????????????? ???? ?????????????????? ???? ?????? ?????????? 0
}, 0)
console.log(totalBalance);

// Sort 
 