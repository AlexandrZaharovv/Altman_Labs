/* 
	Напишите функцию-обертку cache, которая кэширует результаты вызова функции с помощью Map, чтобы избежать повторных вычислений для одинаковых аргументов.
*/

export function cache<T extends (...args: any[]) => any>(fn: T): T {
  const cacheMap = new Map<string, any>();
  return function(this: any, ...args: any[]) {

    if(cacheMap.has("cache")){
      return cacheMap.get("cache")
    }
    const funResult = fn(...args)
    cacheMap.set("cache", funResult)

    return funResult
  } as T;
}
