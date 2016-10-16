var container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1) {
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

//countdown(15);

var todo = {
    id: 123,
    name: "do something",
    completed: false
};

function Counter(el){
   this.count = 0;
   el.innerHTML = this.count;
   el.addEventListener('click',()=>{
       this.count+=1;
       el.innerHTML = this.count;
   });
}

new Counter(container); 
// container.innerHTML = `<div todo='${todo.id}' class="list-group-item}">
//     <i class="${todo.completed ?"":"hidden"} text-success glyphicon glyphicon-ok"></i>
//     <span class="name">${todo.name}</span>
// </div>`;
