const STATUS_DONE = 'Done';
const STATUS_TO_DO = 'To do';
const STATUS_IN_PROGRESS = 'In progress';
let toDoTasks = '';
let inProgressTasks = '';
let doneTasks = '';

const list = {
    tasks: {
        "create a new practice task": STATUS_IN_PROGRESS,
        "make a bed": STATUS_DONE,
        "write a post": STATUS_TO_DO,
    },
    changeStatus (task, progress) {
        if (task in this.tasks) {
            if (progress === this.tasks[task]) {
                console.log("nothing to change");
            }
            else {
                console.log(`"${task}" task status changed from ${list.tasks[task]} to ${progress}`);
                list.tasks[task] = progress;
            }
        }
        else {
            console.log(`There is no "${task}" task in the to-do list. Can't change it status.`);
        }
    },
    addTask (task) {
        if (task in this.tasks) {
            console.log (`"${task}" task is already in the to-do list`);
        }
        else {
            this.tasks[task] = STATUS_TO_DO;
            console.log(`Added "${task}" task to the to-do list`);
        }
    },
    deleteTask (task) {
        if (task in this.tasks) {
            delete this.tasks[task];
            console.log(`Deleted "${task}" task from the to-do list`);
        }
        else {
            console.log(`There is no "${task}" task in the to-do list. Nothing to delete.`);
        }
    },
    showList () {
        for (task in this.tasks) {
            switch (this.tasks[task]) {
                case STATUS_TO_DO: {
                    toDoTasks += `"${task}"\n`;
                    break;
                }
                case STATUS_IN_PROGRESS: {
                    inProgressTasks += `"${task}"\n`;
                    break;
                }
                case STATUS_DONE: {
                    doneTasks += `"${task}"\n`;
                    break;
                }
            }
        }  
        if (toDoTasks.length === 0) {
            toDoTasks = '-';
        }      
        console.log(`To do:\n${toDoTasks}`);
        if (inProgressTasks.length === 0) {
            inProgressTasks = '-';
        }
        console.log(`In progress:\n${inProgressTasks}`);
        if (doneTasks.length === 0) {
            doneTasks = '-';
        }
        console.log(`Done:\n${doneTasks}`);
    },
}

list.changeStatus('make a bed', STATUS_TO_DO);
list.changeStatus('make a bed', STATUS_DONE);
list.changeStatus('make a snowman', STATUS_TO_DO);
list.addTask('have a walk');
list.deleteTask('have a walk');
list.deleteTask('have a walk');
list.changeStatus('make a bed', STATUS_TO_DO);
list.showList();