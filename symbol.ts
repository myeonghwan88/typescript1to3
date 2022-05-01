console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym]

// 함수 Symbol
// type symbol