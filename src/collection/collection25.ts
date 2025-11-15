/* 
	Напишите функцию getOrderStats, которая принимает массив заказов и возвращает объект с общей суммой, количеством и средним чеком только завершенных заказов (status: 'completed').
*/

type Order = {status: string, amount: number}
type Stats = {total: number, count: number, average: number}

export function getOrderStats(orders: Order[]): Stats{
	let result: Stats = {total: 0, count: 0, average: 0}

	orders.filter((order) => order.status === 'completed').map((order) => {
		result.total += order.amount
		result.count++
	})
	
	result.average = result.total / result.count
	return result
}
