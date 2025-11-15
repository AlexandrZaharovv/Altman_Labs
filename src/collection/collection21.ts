/* 	
	Создайте функцию getDiscountedInStockTotal, которая возвращает общую стоимость всех товаров в корзине, которые есть в наличии и имеют скидку.
*/

export type Product = { price: number; discount: boolean; inStock: boolean };

export function getDiscountedInStockTotal(products: Product[]): number {
	const prices = products.filter((product) => product.discount && product.inStock)
	let totalPrice = 0
	for (const i of prices) totalPrice += i.price
	return totalPrice
}
