

    let taskForm = document.querySelector('.task-input');
    let taskList = document.querySelector('.task-list');
    let addTaskBtn = document.querySelector('.submit-task');
    document.querySelectorAll('.delete-btn').forEach((item)=>{
        item.addEventListener('click', function (){
            item.parentElement.remove();
            saveTask();
        })
    })
    function createTaskElement(task) {
        let newTask = document.createElement('li');
        let newSpan = document.createElement('span');
        let checkbox = document.createElement('input');
        let newDltBtn = document.createElement('button');
        let newLabel = document.createElement('label');
        newLabel.classList.add('task-list-item-label');
        newDltBtn.classList.add('delete-btn');
        newDltBtn.innerHTML = `<i class="fa-solid fa-trash" style="color: #e10005;"></i>`;
        checkbox.type = 'checkbox';
        newTask.append(checkbox);
        newSpan.classList.add('task');
        newSpan.textContent = task;
        newTask.classList.add('task-list-item');
        newTask.append(newSpan);
        newTask.append(newDltBtn);
        newLabel.append(newTask);
        taskList.append(newLabel);
        document.querySelectorAll('.delete-btn').forEach((item)=>{
            item.addEventListener('click', function (){
                item.parentElement.remove();
                saveTask();
            })
        })

    }
    loadTasks();
    function saveTask(){
        let tasks = [];
        taskList.querySelectorAll('li').forEach(function(item){
            tasks.push(item.textContent.trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
function loadTasks(){
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(createTaskElement);
}

    function addTask() {
        const task = taskForm.value.trim();

        if (task) {
            createTaskElement(task);
            taskForm.value = '';
            saveTask();
        }

    }

addTaskBtn.addEventListener('click', addTask);

