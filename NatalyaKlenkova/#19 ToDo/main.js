const toDoStatus = "To Do";
const InProgressStatus = "In Progress";
const doneStatus = "Done";

const toDoApp = {
    list: {
        "create a new practice task": InProgressStatus, 
        "make a bed": doneStatus, // задача "заправить кровать" в статусе "Готово"
        "write a post": toDoStatus,
    },

    showList() {
        let toDoTasks = "";
        let inProgressTasks = "";
        let doneTasks = "";
    
        for (let elem in this.list) {
            let currentStatus = this.list[elem];
            
            switch(currentStatus) {
                case toDoStatus:
                    toDoTasks += `\n${elem}`;
                    break;
    
                case InProgressStatus:
                    inProgressTasks += `\n${elem}`;
                    break;
    
                case doneStatus:
                    doneTasks += `\n${elem}`;
                    break;
            }
        }
    
        if (toDoTasks) {
            console.log(`\n${toDoStatus}: ${toDoTasks}`)
        } else {
            console.log(`\n${toDoStatus}: \n-`)
        }
    
        if (inProgressTasks) {
            console.log(`\n${InProgressStatus}: ${inProgressTasks}`)
        } else {
            console.log(`\n${InProgressStatus}:  \n-`)
        }
    
        if (doneTasks) {
            console.log(`\n${doneStatus}: ${doneTasks}`)
        } else {
            console.log(`\n${doneStatus}:  \n-`)
        }
    }
}

let changeStatus = (currentTask, newStatus) => toDoApp.list[currentTask] = newStatus;
let addTask = (newTask, defaultStatus = toDoStatus) => toDoApp.list[newTask] = defaultStatus;
let deleteTask = (currentTask) => delete toDoApp.list[currentTask];



changeStatus("write a post", "Done") // меняет статус задачи
addTask("have a walk"); // добавляет новую задачу

addTask("feed the cat", "In Progress"); // добавляет новую задачу
addTask("buy a milk", "Done"); // добавляет новую задачу

deleteTask("have a walk"); // удаляет задачу
toDoApp.showList(); // показывает список всех задач