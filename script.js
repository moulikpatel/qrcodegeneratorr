const qrinput=document.getElementById("inp");
const qrbutton=document.getElementById("btn");
const qrimg=document.getElementById("img");
console.log(qrinput,qrbutton,qrimg);

qrbutton.addEventListener('click',()=>{
const qrinputvalue=qrinput.value;
if(!qrinputvalue){
    alert("Enter a valid url");
    return;
}
else{
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(qrinputvalue)`;
}

});