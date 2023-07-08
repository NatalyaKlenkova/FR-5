const toDoStatus = "To Do";
const InProgressStatus = "In Progress";
const doneStatus = "Done";

const list = [
    {task: 'create a new practice task', status: 'In Progress', priority: 'low'},
    {task: 'make a bed', status: 'Done', priority: 'high'},
    {task: 'write a post', status: 'To Do', priority: 'medium'},
    {task: 'wish a pony', status: 'In Progress', priority: 'high'},
]

function changeStatus(currentTask, newStatus) {
    list.forEach(elem => {
        if (elem.task === currentTask) {
            elem.status = newStatus;
        }
    })
}


function addTask(newTask, defaultStatus = toDoStatus, defaultPriority = 'low') {
    let newListElem = {};
    newListElem.task = newTask;
    newListElem.status = defaultStatus;
    newListElem.priotity = defaultPriority;
    list.push(newListElem);
}


function deleteTask(currentTask) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].task === currentTask) {
            list.splice(i, 1);
        }
    }
}


function showList() {
    let toDoTasks = "";
    let inProgressTasks = "";
    let doneTasks = "";

    list.forEach(elem => {
        let currentStatus = elem.status;
        
        switch(currentStatus) {
            case toDoStatus:
                toDoTasks += `\n${elem.task}`;
                break;

            case InProgressStatus:
                inProgressTasks += `\n${elem.task}`;
                break;

            case doneStatus:
                doneTasks += `\n${elem.task}`;
                break;
        }
    })

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


changeStatus("write a post", "Done") // меняет статус задачи

addTask("have a walk"); // добавляет новую задачу
addTask("feed the cat", "In Progress"); // добавляет новую задачу
addTask("buy a milk", "Done", "high"); // добавляет новую задачу


deleteTask("have a walk"); // удаляет задачу
showList(); // показывает список всех задач