/* 
	Создайте генераторную функцию numberGenerator, которая принимает число max и возвращает генератор, yielding числа от 1 до max включительно. ыыыыыыыыыы
*/

export function* numberGenerator(max: number) {
	for(let i = 1; i <= max; i++) yield i;
}
