var ul=document.createElement("ul")
document.body.append(ul)
var user = prompt("enter list no")

for(i=0;i<user;i++){
    var li=document.createElement("li")
    li.textContent=prompt("enter the list")
    ul.appendChild(li)
}

console.log(ul)