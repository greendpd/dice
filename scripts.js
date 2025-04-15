

document.querySelector("#btn-roll").addEventListener("click",(event=>{
    document.querySelector("#result").innerText=Math.floor(Math.random()*document.querySelector("#range").value)+1
}))
