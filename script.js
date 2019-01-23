window.onload= function()
{
var a= document.getElementById("radd").addEventListener("click", myFunction);

function myFunction()
{
    var li = document.createElement("li");
    var txt = document.getElementById("txt").value;
    var node = document.createTextNode(txt);
    li.appendChild(node);
    var ul = document.getElementById("todo");
    ul.appendChild(li);
   li.onclick = myDelete;
   function myDelete()
   {
       li.remove();
   }
    
}
};

