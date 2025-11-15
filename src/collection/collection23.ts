/* 
	Напишите функцию groupByCategory, которая принимает массив объектов и имя свойства для группировки, возвращает объект, где ключи - значения свойства, а значения - массивы объектов.
*/

export function groupByCategory<T extends Record<string, any>>(arr: T[], key: keyof T): Record<T[keyof T], T[]> {
	const groups = arr.reduce((acc: Record<T[keyof T], T[]>, currentItem) => {
		const value = currentItem[key]
		if(!acc[value]){
			acc[value] = []
		}
		acc[value].push(currentItem)
		return acc
	}
	,{} as Record<T[keyof T], T[]>)

	return groups
}