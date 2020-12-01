
// ## Module 02 - module02.ts
// We want to create a curryable function that takes one argument:  
/* An item object  
  
The returned function takes another one argument:
/* Discount value between 0 and 100 (a $100 item with a 10% discount will cost $90). 
  
Which will return the item with the price after we apply the discount.  
  
Complete the code for `applyCoupon()` as a curryable function, write your solution without mutating the original object.
```typescript*/
interface Iitem{
  name: string, type: string, category: string, price: number
}
export const item: Iitem = { 
"name": "Avocado", 
"type": "Fruit", 
"category": "Food", 
"price": 200 
} 

export let applyCoupon = ( item :Iitem) => {
let copyItem = {...item}
  return (discount : number)  => {
    copyItem.price = copyItem.price * ((100 - discount)/100);
    return copyItem
  }
}

applyCoupon(item)(10).price === 180
