//gera uma cor aleatoria em rgb
function geraCor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function mudaCor(){
    let novaCor = geraCor();
    document.getElementById("color").innerHTML = novaCor;
    let body = document.getElementById("change");
    body.style.backgroundColor = novaCor;
}