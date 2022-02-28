import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Tasks.js"
import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"



function _drawcompletedlist() {
    let taskscompleted = 0
    let totaltasks = ProxyState.tasks.length
    let template = ''
    ProxyState.tasks.forEach(t => {
        template += t.Template
        if (t.completed) {
            taskscompleted++
        }
    })


    document.getElementById('tasklist').innerHTML = `<div>${taskscompleted}/${totaltasks}</div>`
}



function _draw() {
    let template = ''
    ProxyState.tasks.forEach(t => template += t.Template)
    document.getElementById('tasks').innerHTML = template
}

async function _getAllTasks() {
    try {
        await tasksService.getAllTasks()
    } catch (error) {
        console.error(error);
        Pop.toast(error.message, 'error')
    }
}


export class TasksController {
    constructor() {
        ProxyState.on('tasks', _draw)
        ProxyState.on('tasks', _drawcompletedlist)
        _getAllTasks()

    }
    async handleSubmit() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let newdata = {
                description: form.description.value,
            }
            tasksService.newTask(newdata)
            form.reset()
        }
        catch (error) {
            Pop.toast(error.message, 'error')



        }
    }

    async deleteTask(id) {
        try {
            if (await Pop.confirm()) {


                await tasksService.deleteTask(id)
            }
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async checkTask(id) {
        try {
            await tasksService.checkTask(id)
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error);
        }
    }
}
