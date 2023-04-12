class Todo{

    constructor(title, creationDate, isCompleted = false, id){
        this.title = title;
        this._creationDate = creationDate;
        this.isCompleted = isCompleted;
        if (id) {
            this.id = id;
        }
    }

    get creationDate(){

    }

    set creationDate(newDate){

    }

    compareByTitle(todo2){

    }

    compareByCreationDate(todo2){

    }

    static fromTodoObject(todoObject) {
        return new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id);
    }


}