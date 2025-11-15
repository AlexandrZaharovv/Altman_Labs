/* 
	Создайте функцию countByRanges, которая принимает массив чисел и массив диапазонов, возвращает Map, где ключи - строковые представления диапазонов, а значения - количество чисел, попадающих в каждый диапазон.
*/

// import { stringify } from "querystring";

function numsInRange(range: number[], numbers: number[]): number{
	let count = 0
	for(const num of numbers){
		if (num >= range[0] && num <= range[1]) count++
	}

	return count
}

export function countByRanges(numbers: number[], ranges: [number, number][]): Map<string, number> {
	const result = new Map<string, number>();
	
	for(const range of ranges){
		const strRange = range[0].toString() + '-' + range[1].toString()
		result.set(strRange, numsInRange(range, numbers))
	}
	return result;
}
