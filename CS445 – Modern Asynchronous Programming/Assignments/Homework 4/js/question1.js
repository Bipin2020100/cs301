// Create an application `app.ts` which will import the following three modules:
// ## Module 01 - module01.ts
// Complete the code for `isWeekend()` function and return the string "weekend" or "weekday" without using if-statement/ternary.
// ```typescript
export function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay(); // 0 – 6 (0 is Sunday)
    let arr = [true, false, false, false, false, false, true];
    return arr[day];
}
