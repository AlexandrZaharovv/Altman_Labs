/* 
	Создайте функцию findMaxWithCondition, которая находит объект с максимальным значением свойства, но только среди элементов, удовлетворяющих условию фильтра, в противном случае возвращает null.
*/

export function findMaxWithCondition<T>(
	array: T[], 
	propertyName: keyof T,
	condition: (item: T) => boolean): T | null{
	let max = 0 as T

	array.map((elem) => {
		if(elem[propertyName] > max){
			max = elem[propertyName] as T
		}
	})

	const maxValue = array.filter(condition).find((elem) => elem[propertyName] === max)

	if(maxValue) return maxValue
	return null
}


 