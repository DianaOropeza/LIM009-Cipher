/* Acá va tu código 
muestre en un html */
const offset=document.getElementById("offset");
const mensaje=document.getElementById("mensaje");
const btncifrar = document.getElementById("cifrar");
const btndescifrar=document.getElementById("descifrar");
const resulta=document.getElementById("result");
const clear=document.getElementById("limpiar");
const btnhelp=document.getElementById("help");
const ihelp=document.getElementById("ihelp");

btncifrar.addEventListener("click",()=>{    
const mensajeCapturado=mensaje.value;
const offsetCapturado=offset.value;
resulta.innerHTML=cipher.encode(offsetCapturado,mensajeCapturado);
});

btndescifrar.addEventListener("click",()=>{
const mensajeCapturado=mensaje.value;
const offsetCapturado=offset.value;
resulta.innerHTML=cipher.decode(offsetCapturado,mensajeCapturado);
})

clear.addEventListener("click",()=>{
mensaje.value=" ";
offset.value=" ";
resulta.innerHTML=" ";
})

btnhelp.addEventListener("click", ()=>{
ihelp.style.display = 'block';
})

ihelp.addEventListener("click",()=>{
ihelp.style.display='none';
})