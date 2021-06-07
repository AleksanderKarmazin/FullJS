const array = "Sasha"
array
const newArr = []
for (let index = 0; index < array.length; index++) {
        if (array[index].charCodeAt(0) > array[++index].charCodeAt(0) ) {
            newArr.push(array[index])
        } else {
            newArr.push(array[++index])

        }

    // code 
    // newArr.push(element) 
    // console.log(element);
}
newArr
 const reversedArr = newArr.reverse()
 reversedArr
 const joinedArr = reversedArr.join('')
 joinedArr