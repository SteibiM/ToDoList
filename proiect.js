////////////////////---ADD NEW NOTE---////////////////////
let inputs=document.getElementsByTagName('input');
for(let i=0;i<inputs.length;++i){
    let input=inputs[i];
    input.addEventListener("change",addNewTask);
}
function addNewTask(event){
    console.log()
    let elementCreate=document.createElement('li');
    let id=event.target.value.slice(0,event.target.value.length-2)+"_"+Math.random()
    elementCreate.setAttribute("id",event.target.value.slice(0,event.target.value.length-2)+"_"+Math.floor(Math.random()*100))
    elementCreate.setAttribute("class","myDraggableElement")
    elementCreate.setAttribute("draggable",true);
    elementCreate.addEventListener("click",removeOrNot);
    let whereToPut=event.target.parentElement.parentElement.getElementsByTagName('ul')[0];
    elementCreate.innerText=event.target.value;
    whereToPut.append(elementCreate);
    //DRAG||DROP//
    elementCreate.addEventListener("dragstart",addStartDrag);
    elementCreate.addEventListener("dragover",addStopDrag);
    elementCreate.addEventListener("drop",dropEvent);
    elementCreate.addEventListener("dragleave",e=>{
        event.target.classList.remove("item_list--over");
    })

}
////////////////////--- ADD DRAG||DROP ---////////////////////
const draggableElement=document.getElementsByClassName("myDraggableElement");
for(let i=0;i<draggableElement.length;++i){
    let dragE=draggableElement[i];
    dragE.addEventListener("dragstart",addStartDrag);
}
const dropZone=document.getElementsByClassName("item_list");
for(let i=0;i<dropZone.length;++i){
    let dropZ=dropZone[i];
    dropZ.addEventListener("dragover",addStopDrag);
    dropZ.addEventListener("drop",dropEvent);
    dropZ.addEventListener("dragleave",event=>{
        event.target.classList.remove("item_list--over");
    })
}

function dropEvent(event){
    event.preventDefault();
    console.log(event.target.classList[0]==="item_list")
    if(event.target.classList[0]==="item_list"){
    const droppedElementId=event.dataTransfer.getData("text/plain");
    const droppedElement=document.getElementById(droppedElementId);
    console.log(droppedElement)
    event.target.appendChild(droppedElement)
    event.target.classList.remove("item_list--over");
    }else{
        alert("Nu poti introduce peste un alt element!")
        window.location.reload(false);
    }
}

function addStopDrag(event){
    event.preventDefault();
    event.target.classList.add("item_list--over");

}

function addStartDrag(event){
    event.dataTransfer.setData("text/plain",event.target.id);
    console.log(event.target.id)
}

////////////////////--- ADD REMOVE SECTION ---////////////////////
function removeOrNot(event){
    if(confirm("Do you want to remove the element?")){
        console.log("DA");
        event.target.remove();
    }else{
        console.log("NU");
    }
}