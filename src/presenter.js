import convertidor from "./convertidor";

const numInput=document.querySelector("#numero-romano");
const convertidorForm=document.querySelector("#convertidor-form");
const romanoDiv=document.querySelector("#resultado-romano");

convertidorForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  const num=Number.parseInt(numInput.value);
  const resultadoRomano=convertidor(num);

  romanoDiv.innerHTML="<p>Romano: "+ resultadoRomano +"</p>"
});

