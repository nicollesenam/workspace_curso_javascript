//função que adiciona tarefa

function addTask(){
    //titulo da tarefa
    const taskTitle =  document.querySelector("#task-title").value;
    console.log(taskTitle);

    if(taskTitle){
        //clonar template

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);
        console.log(newTask);

        //adicionar titulo

        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover tasks desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        //limpar texto do campo apos escrever tarefa
        document.querySelector("#task-title").value = "";


    }

}

//função de remover tarefa quando clicar
function removeTask(task){ //receber task
    task.parentNode.remove(true); //remover elemento pai/remover tarefa
    
}

//função de completar tarefa
function completeTask(task){
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();


});