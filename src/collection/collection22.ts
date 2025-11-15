/* 
	Создайте функцию sumProperty, которая принимает массив объектов с числовыми свойствами и возвращает сумму всех значений указанного свойства.
*/

export function sumProperty<T>(objects: T[], property: keyof T): number {
	let totalCount = 0
	for(const value of objects){
		totalCount += value[property] as number
	}
	return totalCount
}
