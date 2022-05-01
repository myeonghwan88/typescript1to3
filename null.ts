// let MyName: string = nudefined; // tsconfig.json 열 -> "strict": true, 되어 있으므로 사용 불가

// let u: undefined = null;
let v: void = undefined;

let union: string | null = null;

union = "Mark";

console.log(v);
console.log(union);