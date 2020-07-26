//symbol doesn't need new
const sym = Symbol()

//every symbol is unique, even with same input. so sym1 === sym2 is return false
const sym1 = Symbol('1');
const sym2 = Symbol('1');
// console.log(sym1,sym2, sym1 === sym2)

//symbol can only take number or string, but can not be converted from object value.
const sym3 = Symbol(1);

//symbol can be converted to string and boolean
console.log(sym3.toString());
console.log(Boolean(sym3));

//symbol can be used as property name. it ensures no every property is unique.
let prop = 'name';
const info = {
	[`${prop}`]: 'leon'
};
console.log(info);
const sym5 = Symbol('name');
const info2 = {
	[sym5]: 'leon',
	age: 18,
	sex: 'male'
};
console.log(info2);

//symbol will not be shown by iteration in certain ways
for (const key in info2) { console.log(key) }
console.log(Object.keys(info2));
console.log(Object.getOwnPropertyNames(info2));
console.log(JSON.stringify(info2));

//symbol can be shown by iteration in certain ways
console.log(Object.getOwnPropertySymbols(info2))
console.log(Reflect.ownKeys(info2))

//static methods for Symbol are Symbol.for() and Symbol.keyFor()
const sym6 = Symbol('leon')

//Symbol.for() is global. it first searches for the key in global,
// then either return existed value or create a new one.
//sy8 === sym9 //>true
const sym8 = Symbol.for('leon');
const sym9 = Symbol.for('leon');

//Symbol.keyFor() finds the global key for given value.
console.log(Symbol.keyFor(sym8));//>leon

//when instanceof is used on a type, type[Symbol.hasInstance] is called.
const CustomType = {
	[Symbol.hasInstance](otherObject: object) {
		console.log("hasIancetance called: checking:",otherObject)
		return true
	}
}
console.log({ a: 'a' } instanceof <any>CustomType);//true

//Symbol.isConcatSpreadable  default is undefined, but if it is false then concat will not spread the object.
const arr1:any = [1,2];
console.log(arr1.concat([3,4]));//[1,2,3,4]
arr1[Symbol.isConcatSpreadable]=false;//add "suppressImplicitAnyIndexErrors": true to ts.config is want to avoid added :any to arr1
console.log(arr1.concat([3,4])); //[[1,2],3,4]


class C extends Array {
	constructor(...args:any){
		super(...args);
	}
	//in es6, if this is missing, a will be instance of C if a is instance of Array.
	//but in typescript a will never be instance of C
	static get [Symbol.species](){
		return Array
	}
	getName(){
		return 'lison'
	}
}
const c = new C(1,2,3)
console.log(c)

const a = c.map(item=>item+1)
console.log(a instanceof C) //false
console.log(a instanceof Array) //true



//Symbol.match
let obj3 = {
	[Symbol.match] (string:string):void{
		console.log('match',string.length)
	},
	[Symbol.split] (string:string){
		console.log('split',string)
	},
	[Symbol.replace] (string:string){
		console.log('replace',string)
	},
	[Symbol.toPrimitive] (type:string){
		console.log('toPrimitive',type)
	},
	get	[Symbol.toStringTag] ():string{
		console.log('toString')
		return 'obj3';
	}
}
'abcde'.match(<RegExp><unknown>obj3)

//same for 
//Symbol.replace
//Symbol.search
//Symbol.split


console.log(`abcde${obj3}`); //	[Symbol.toPrimitive] returns default in ts, and string in js

obj3.toString();
const obj10 = {
	a:'a',
	b:'b'
}

console.log(Array.prototype[Symbol.unscopables])
//with can directly access the properties without using referencing everyting
// with(obj10:any){
// 	console.log(b);
// }
