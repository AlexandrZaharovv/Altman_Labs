/* 
	Напишите функцию calculateTotalProgress, которая вычисляет общий прогресс пользователей, учитывая только активных и с прогрессом > 50%.
*/

type User = {active: boolean, progress: number}

export function calculateTotalProgress(users: User[]): number {
	let count = 0
	let summedProgress = 0
	users.filter((user) => user.active && user.progress > 50).map((user) => {summedProgress += user.progress; count++})

	return summedProgress / count
}