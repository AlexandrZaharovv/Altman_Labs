/* 
	Реализуйте итератор для объекта obj, чтобы при использовании в цикле for...of он возвращал значения свойств объекта, а не ключи.
*/

export const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    const values = Object.values(this)
    let i = 0

    return{ next: () => {
        if (i < values.length) return {value: values[i++], done: false}
        else return {value: undefined, done: true}
    }
    }
  } 
};