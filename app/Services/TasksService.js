import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Tasks.js";
import { sandboxapi } from "./AxiosService.js";





export class TasksService {

    async newTask(newtask) {
        const res = await sandboxapi.post('aiden/todos', newtask)
        console.log('new task', res.data);
        ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
    }






    async getAllTasks() {
        const res = await sandboxapi.get('aiden/todos')
        console.log('[getAllTasks]', res.data);
        ProxyState.tasks = res.data.map(t => new Task(t))
    }


    async deleteTask(id) {
        console.log('service delete task', id)
        const res = await sandboxapi.delete(`aiden/todos/${id}`)
        console.log('[tasksService]: deletetask', res.data)

        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }


    async checkTask(id) {
        let tasktocomplete = ProxyState.tasks.find(t => t.id == id)

        console.log('task to complete ', tasktocomplete);

        tasktocomplete.completed = !tasktocomplete.completed
        const res = await sandboxapi.put('aiden/todos/' + id, tasktocomplete)
        console.log('[completedtask]', res.data);
        ProxyState.tasks = ProxyState.tasks
    }
}


export const tasksService = new TasksService();