let inputEnter = document.getElementById('newitem')
inputEnter.addEventListener('keydown',function(e){
    
    if (e.keyCode == 13) {
         var node = document.createElement("li")
         var textNode = document.createTextNode(inputEnter.value);
         node.appendChild(textNode);
         document.getElementById("myUL").appendChild(node);
         inputEnter.value = "";
        }
});

let list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);