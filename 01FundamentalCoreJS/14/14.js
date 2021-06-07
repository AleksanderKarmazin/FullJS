 const user = {
     First_name: "Denis",
     age:30,
     isAdmin: true,
     email: 'user@test.com',
    // каквычки используются для тех 
    // ключек которые имеют символы 
    // которые разрывают привычные 
    // слова - * % & 
     'user-address': { 
         city: 'Kharkiv'
     },
     skills: ['html', 'css', 'js'] 
 }

a = user.First_name 
a
a = user['isAdmin']
a
a = user['user-address']
a
a = user['user-address'].city
a
a = user['user-address']['city']  
a
let skills = 'skills'
a = user[skills][0]
a
a = user[skills][0] = 'Vue'
a = user[skills][0]
a
a = user[skills]
a
a = user['user-address']['country'] = "Russia" 
a
a = user['user-address']
a
