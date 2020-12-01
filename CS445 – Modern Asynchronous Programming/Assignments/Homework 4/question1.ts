
// Create an application `app.ts` which will import the following three modules:
// ## Module 01 - module01.ts
// Complete the code for `isWeekend()` function and return the string "weekend" or "weekday" without using if-statement/ternary.
// ```typescript
export function isWeekend(): boolean { 
	const todayDate: Date = new Date(); 
	const day: number = todayDate.getDay(); // 0 – 6 (0 is Sunday)
	let arr : boolean[] = [true, false, false, false, false, false, true];
	return arr[day];
}