let onewaybt=document.getElementById('one');
let returnbt=document.getElementById('two');
let retrundate=document.getElementById('redate');
let Back=document.getElementById('back');
let search=document.getElementById('button');

onewaybt.onclick=function(){
    retrundate.style.maxWidth="0";
    onewaybt.style.color="white";
    onewaybt.style.backgroundColor=" #008cff";
    returnbt.style.color="black";
    returnbt.style.backgroundColor="#b5b5b5";
}
returnbt.onclick=function(){
    retrundate.style.maxWidth="250px";
    returnbt.style.color="white";
    retrundate.style.backgroundColor="white";
    returnbt.style.backgroundColor="#008cff";
    onewaybt.style.color="black";
    onewaybt.style.backgroundColor="#b5b5b5";
}
search.addEventListener('click', function(){
    let x=document.forms["fname"]["departure"].value;
    let y=document.forms["fname"]["destination"].value;
    
    if(x=="" || y==""){
        window.alert("fill out the details");
    return false;
    }
    else{
        window.location.href="trav2.html";
        // return true;
    }
    
});