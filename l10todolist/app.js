var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('i am working');

    e.preventDefault();
    addnew();
});

function addnew(todo){
    var todotext = gettextbox.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        // console.log(todotext);
        // console.log(todo.done);

        if(todo && todo.done){
            li.classList.add('done');
        }

        // li.textContent = todotext;
        li.appendChild(document.createTextNode(todotext));
        getul.appendChild(li);
        gettextbox.value = '';
        
        updatelocalstorage();

        li.addEventListener('click',function(){
            li.classList.toggle('done');
            updatelocalstorage();
        });

        li.addEventListener('contextmenu',function(){
            li.remove();
            updatelocalstorage();
        });
    }
}

function updatelocalstorage(){
    var getalllis = document.querySelectorAll('li');

    // console.log(getalllis);

    const todos = [];

    getalllis.forEach(function(getallli){
        todos.push({
           text : getallli.textContent,
           done : getallli.classList.contains('done')
        });
    });

    // console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));


}

var getallstodos = JSON.parse(localStorage.getItem('todos'));


if(getallstodos){
    getallstodos.forEach(function(getallstodo){
        // console.log(getallstodo);
        // console.log(getallstodo.text);

        addnew(getallstodo);

    });
}