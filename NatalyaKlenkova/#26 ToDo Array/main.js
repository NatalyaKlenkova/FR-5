const toDoStatus = "To Do";
const inProgressStatus = "In Progress";
const doneStatus = "Done";

const list = [
    {task: 'create a new practice task', status: 'In Progress', priority: 'low'},
    {task: 'make a bed', status: 'Done', priority: 'high'},
    {task: 'write a post', status: 'To Do', priority: 'medium'},
    {task: 'wish a pony', status: 'In Progress', priority: 'high'},
]

function changeStatus(currentTask, newStatus) {
    let targetItem = list.find(elem => elem.task === currentTask);
    targetItem.status = newStatus;
}


function addTask(newTask, defaultStatus = toDoStatus, defaultPriority = 'low') {
    let newListElem = {};
    newListElem.task = newTask;
    newListElem.status = defaultStatus;
    newListElem.priotity = defaultPriority;
    list.push(newListElem);
}


function deleteTask(currentTask) {
    let currentIndex = list.findIndex(elem => elem.task === currentTask);
    list.splice(currentIndex, 1);
}


function showList() {
    let toDoTasks = list.filter(elem => elem.status === toDoStatus);
    let inProgressTasks = list.filter(elem => elem.status === inProgressStatus);
    let doneTasks = list.filter(elem => elem.status === doneStatus);

    console.log(`\n${toDoStatus}:`)
    if (toDoTasks.length > 0) {
        toDoTasks.forEach(toDoTask => console.log(`   ${toDoTask.task}`))
    } else {
        console.log(`   -`)
    }

    console.log(`\n${inProgressStatus}:`)
    if (inProgressTasks.length > 0) {
        inProgressTasks.forEach(inProgressTask => console.log(`   ${inProgressTask.task}`))
    } else {
        console.log(`   -`)
    }

    console.log(`\n${doneStatus}:`);
    if (doneTasks.length > 0) {
        doneTasks.forEach(doneTask => console.log(`   ${doneTask.task}`))
    } else {
        console.log(`   -`)
    }
}


changeStatus("write a post", "Done") // меняет статус задачи

addTask("have a walk"); // добавляет новую задачу
addTask("feed the cat", "In Progress"); // добавляет новую задачу
addTask("buy a milk", "Done", "high"); // добавляет новую задачу


deleteTask("have a walk"); // удаляет задачу
showList(); // показывает список всех задач