/* 	
	Напишите функцию groupUnfinishedHighPriorityTasks, которая группирует задачи по категориям, фильтруя только незавершенные высокоприоритетные задачи.
*/

export type Task = { category: string; priority: string; completed: boolean };

export function groupUnfinishedHighPriorityTasks(tasks: Task[]): Map<string, Task[]> {
	let groups = new Map<string, Task[]>
	tasks.filter((task) => !task.completed && task.priority === "high").map((task) => {
		if(groups.has(task.category)) groups.get(task.category)?.push(task)
		else groups.set(task.category, [task])
	})
	return groups
}