//```
/*## Module 03 - module03.ts
Write a function `function isDual(arr: number[]): boolean{}` that accepts an Array of numbers. An array is said to be dual if it has an even number of elements and each pair of consecutive elements sum to the same value.
Return true if the array is dual, otherwise return false.
  
Examples:
```typescript*/
//[1,2,3,0] // returns 1 (because 1+2 == 3+0 == 3)  
//[1, 2, 2, 1, 3, 0] // returns 1 (because 1+2 == 2+1 == 3+0 == 3)  
//[1,1,2,2] // returns 0 (because 1+1 == 2 != 2+2)  
//[1,2,3] // returns 0 (because array does not have an even number of elements)  
//[] //returns 1  
//```
//Transpile and bundle the application into a single JS file.
export function isDual(arr) {
    if (arr.length % 2 !== 0) {
        return false;
    }
    let sum;
    let compare = arr[0] + arr[1];
    for (let i = 2; i < arr.length; i = i + 2) {
        sum = arr[i] + arr[i + 1];
        if (sum !== compare) {
            return false;
        }
    }
    return true;
}
