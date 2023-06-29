let tasks = [];

function registerTask(){
    var task = document.getElementById("txtTask").value;
    tasks.push(task);
    document.getElementById("taskList").innerHTML=`
    <p> ${tasks} </p>`;
    
}

function numTasks(){
    document.getElementById("num").innerHTML=`
    <p> ${tasks.length} </p>`;
}



