let tasks = ['помыть посуду', 'погладить кота', 'заняться спортом'];

function addTask(arr, newTask) {
    arr.push(newTask)
}

function deleteTask(arr, currentTask) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === currentTask) {
            arr.splice(i, 1);
        }
    }
}

function printTasks(arr) {
    console.log(arr);
}

addTask(tasks, 'расчесать лошадь');
printTasks(tasks)

deleteTask(tasks, 'расчесать лошадь');
printTasks(tasks)