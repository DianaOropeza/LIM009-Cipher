/* Acá va tu código 
muestre en un html */
const desp=document.getElementById("desp");
const mensaje=document.getElementById("mensaje");
const btncifrar = document.getElementById("cifrar");
const btndescifrar=document.getElementById("descifrar");
const resulta=document.getElementById("resultado");
const limp=document.getElementById("limpiar");

btncifrar.addEventListener("click",()=>{    
const mensajeCapturado=mensaje.value;
const despCapturado=desp.value;
resulta.innerHTML=cipher.encode(despCapturado,mensajeCapturado);
});

btndescifrar.addEventListener("click",()=>{
const mensajeCapturado=mensaje.value;
const despCapturado=desp.value;
resulta.innerHTML=cipher.decode(despCapturado,mensajeCapturado);
})

limp.addEventListener("click",()=>{
mensaje.value=" ";
desp.value=" ";
resulta.innerHTML=" ";
})