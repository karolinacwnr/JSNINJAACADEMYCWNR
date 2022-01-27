function elementsInRange (array, min, max) {
        let newarray = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] >= min && array[i] <= max) {
                newarray.push(array[i]);
            } 
        }
        return newarray;
}
    
const array1 = elementsInRange([1,2,3,4,5,6,7,8,9,10,11] , 5, 8)                     // [5, 6, 7, 8]
    
const array2 = elementsInRange([1,2,2,3,3,8,8,3,3,1,1,4,3,2,10,2], 2, 3)             // [2, 2,3,3,3,3,3,2,2]
        
const array3 = elementsInRange([1,2,3,4,5,6,7,8,9,10,11] , 100, 120)                 // []
    
console.log(array1);
console.log(array2);
console.log(array3);
