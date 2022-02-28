




export class Quote {
    constructor(data) {

        console.log(data)
        this.content = data.content;
        this.author = data.author;



    }

    get Template() {
        return `<div class="content">"${this.content}"</div> 
            <div  class="hide text-center">---${this.author}---</div>`


    }
}