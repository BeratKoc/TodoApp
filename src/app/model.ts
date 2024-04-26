export class Model{
    user;
    items;

    constructor(){
        this.user="Ahmet",
        this.items =[
            new TodoItem("Kahvalti",false),
            new TodoItem("Kitap Okumak",false),
            new TodoItem("Sinema",false),
          ];
    }
}

export class TodoItem{
    description:string;
    action:boolean;
    constructor(description:string,action:boolean){
        this.description=description;
        this.action=action;
    }
}
