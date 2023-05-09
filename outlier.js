function findOutlier(array){
    let even = array.filter(number => {
        return number % 2 === 0
    })
    let odd = array.filter(number => {
        return number % 2 === 1
    })

if (even.length === 1){
    return even[0]
} else if(odd.length === 1){
    return odd[0]
} else {
    return 'There are no outliers.'
}
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))