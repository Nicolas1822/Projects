
document.getElementById('formTask').addEventListener('submit', (e)=>{
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title: title,
        description: description
    };

    if (localStorage.getItem('tasks') == null) {
        //Agrega las tareas si el localStorage esta vacio
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
        //Si ya existe las modifica y las almacena
        let storedTask = JSON.parse(localStorage.getItem('tasks'));
        storedTask.push(task);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
    }

    getTask();
    document.getElementById('formTask').reset();
    e.preventDefault();
});

//No template
function getTask(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskView = document.getElementById('taskView');
    taskView.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        taskView.innerHTML +=
        `<div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Delete</a>
            </div>
        </div>`

    }
}

function deleteTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTask();
}

//with template
// function getTasks (){
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     let taskView = document.getElementById('taskView');
//     let template = document.getElementById('template').content;
//     let fragment = document.createDocumentFragment();
//     taskView.textContent = '';

//     tasks.forEach(element => {
//         template.querySelector('p').textContent = element;
//         let clone = template.cloneNode(true);
//         fragment.appendChild(clone);
//     });

//     taskView.appendChild(fragment);
// }

