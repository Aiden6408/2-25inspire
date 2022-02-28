import { ProxyState } from "../AppState.js"



export class Task {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed || false
        this.user = data.user
        this.description = data.description

    }


    get Template() {
        return `
        <input  ${this.completed ? 'checked' : ''} onclick="app.tasksController.checkTask('${this.id}')" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <div class=" d-flex justify-content-between">

          <label class="form-check-label" for="flexCheckDefault">
            <p>${this.description}</p>
          </label>
          <i onclick="app.tasksController.deleteTask('${this.id}')" class=" mdi mdi-delete selectable"></i>
        </div>


        `
    }


}