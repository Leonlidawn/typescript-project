// 字面量（literal）
const n: number = 123;
const s: string = '456';
const o: object = { a: 1, b: '2' };

// 非字面量（object with interface of the corresponding literal） which can be instantiated to literal with keyword new
// dont use them if not needed
const n1: Number = new Number(123);
const s1: String = new String('456');
const o1: Object = new Object({ a: 1, b: '2' });

/*
var x = new Number(34);
//> undefined
x //> Number {}
x + 1 //> 35 in es6 but results error in typescript
*/

//Boolean
let bool: boolean = false;

//Number
let number: number = 123;
// binary number
num = 0b1111011;
// Octal number
num = 0o173;
//hexadecimal number
num = 0x7b;

//String
let str: string;
str = 'abc';
str = `String${str}`;

//Array
//syntax 1
let arr: number[]
arr = [5]
//syntax 2
let arr2: Array<number>
//syntax 3 mix typing
let arr3: (string | number)[]
arr3 = [1, 'a']
//syntax 4 tuple -  exact type in each element and exact length
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

//enum , autometically map key with numbers
enum Roles {
	ADMIN, //0
	STUDENT, //1
	TUTOR //2
}

//enum , autometically map key with numbers, but be carefull it does not check dupplicate. 
//if declare with string, it will require manual mapping for subsequent keys from you.
enum FalselyMappedRoles {
	ADMIN, //0
	STUDENT = 3,
	TUTOR,
	Number2,
	Number3
}

//any
let anything: any

//void
//void can have values of undefined and null(only when strict mode is false)
//take string return void
const consoleText = (text: string): void => {
	console.log(text);
}

//null and undefined.
//they are both values and types.
//they are also subtypes of other types.
let u: undefined; //type undefined can only have value undefined
 u = undefined;
let u1 : null//type null can only have value null
u1 = null;

// never
// never means never exist, used when function is not returning anything, not even void.
/*
A function that doesn't explicitly return a value implicitly returns the value undefined in JavaScript. 
Although we typically say that such a function "doesn't return anything", it returns.
We usually ignore the return value in these cases. 
Such a function is inferred to have a void return type in TypeScript.
A function that has a never return type never returns. It doesn't return undefined, either. 
The function doesn't have a normal completion, which means it throws an error or never finishes running at all.
*/
const errorFunc = (message: string): never =>{
	throw new Error(message);
}
const infiniteFunc = (): never =>{
	while(true){}
}

//object
let obj = {
	name: 'leon'
}

//类型断言 type assertion
//2 ways:
// <type>    //not compatable with JSX
//  as    
const getLength = (target: string | number): number =>{
	if((<string>target).length || (target as string).length ===0){
		return (<string>target).length
	}else{
		return target.toString().length;
	}
}