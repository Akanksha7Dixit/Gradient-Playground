let btn1 = document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let copyDiv=document.querySelector(".copyCode");

let rgb1="#000";
let rgb2="#fff";

const hexvalues = () =>{
    let hexValues="0123456789abcdef";
    let colors='#';
    for(let i=0;i<6;i++){
    colors=colors + hexValues[Math.floor(Math.random()*16)];
    }
    // console.log(colors);
    return colors;
}

const handleButton1= () => {
    rgb1 = hexvalues();
    console.log(rgb1);
    btn1.innerText=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
};

const handleButton2= () => {
    rgb2 = hexvalues();
    console.log(rgb2);
    btn1.innerText=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`;
};

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);

copyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
})
