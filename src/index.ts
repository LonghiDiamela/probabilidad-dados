import "./styles.css";

let rotulo=document.getElementById("rotulo");
rotulo.innerHTML="dados";
let btnEnv=document.getElementById("btnEnv");

btnEnv.addEventListener("click", ()=>{
  let cantidadDados=document.getElementById("cantidadDados");
  let n:number=cantidadDados.value;
  let probFinal:number=1;
  let dados=Math.pow(6, n);
  probFinal=1/dados;
  let probFinalFixed=probFinal.toFixed(8);
  console.log("la probabilidad es: ", probFinalFixed);
});
