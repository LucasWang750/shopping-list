var btn = document.getElementById("button");
var text = document.getElementById("input");
var list = document.getElementById("list");
// var item = document.querySelectorAll("li");

for(var i = 0; i < list.children.length; i++){
    list.children[i].addEventListener("click", function(event){
        event.target.classList.toggle("done");
    })
    newBtn.addEventListener("click", function(){
        list.removeChild(list.children[i]);
        list.removeChild(newBtn);
    });
}




btn.addEventListener("click" , function(){
    if(text.value.length > 0 && checkList()){
        addItem();
    }
    item = document.querySelectorAll("li");
});

text.addEventListener("keypress" , function(event){
    if(text.value.length > 0 && event.keyCode === 13 && checkList()){
        addItem();
    }
    item = document.querySelectorAll("li");
});

function addItem(){
    var item = document.createElement("li");
    var newBtn = document.createElement("button");
    newBtn.appendChild(document.createTextNode("Press to Delete"));
    item.appendChild(document.createTextNode(text.value));
    list.appendChild(item);
    list.appendChild(newBtn);
    item.addEventListener("click", function(){
        item.classList.toggle("done");
    });
    newBtn.addEventListener("click", function(){
        list.removeChild(newBtn);
        list.removeChild(item);
    });
    text.value = "";
}


function checkList(){
    for(var i = 0; i < list.children.length; i++)
    {
        var one = text.value.toLowerCase();
        var two = list.children[i].innerText.toLowerCase();
        if(one === two){
            return false;
        }
    }
    return true;
}
