var proiectPitogram = document.getElementsByClassName('pachet_b_item');
for(let i=0;i<proiectPitogram.length;++i){
    var inputTarget=proiectPitogram[i];
    inputTarget.addEventListener('mousedown',startTimer);

}

function startTimer(event){
    var pressTimer;
    pressTimer = window.setTimeout(function() {    
        document.location.href="proiect.html";   
        console.log(event.target); 
    },1500);
}
function insert(event){
    let inputInsert = event.target;
    let inputInsertValue=inputInsert.value;
    console.log(inputInsertValue);
    let elementInsert=document.createElement('div');
    elementInsert.setAttribute("class","pachet_b_item");
    let whereToInsert=document.getElementsByClassName("pachet_b_c")[0];
    let elementHTML=`<input type="button"  value="${inputInsertValue}">`;
    elementInsert.innerHTML=elementHTML;
    whereToInsert.append(elementInsert);
}


