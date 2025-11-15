/* 
	Создайте функцию groupBy, которая принимает массив объектов и ключ, возвращает Map, где ключи - значения этого свойства, а значения - массивы объектов с таким значением свойства.
*/

export function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T): Map<T[keyof T], T[]> {
	const map = new Map<T[keyof T], T[]>

	for(const elem of arr){
		const valueKey = elem[key]
		if(map.has(valueKey)){
			map.get(valueKey)?.push(elem)
		}
		else{
			map.set(valueKey, [elem])
		}
	}

	return map
}
