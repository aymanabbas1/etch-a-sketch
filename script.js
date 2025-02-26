const container = document.querySelector('.container'); 

const body = document.querySelector('body'); 
const button1 = document.createElement('button'); 
button1.className = 'button1'; 
button1.textContent = "Click me to change dimensions!"
body.insertBefore(button1, container); 

const newRandomColor = function(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
} 

for(let i = 0; i<16; i++){
    for(let j = 0; j<16; j++){
        let div = document.createElement('div'); 
        div.className = 'box'; 
        container.appendChild(div);    
    }
}

const boxes = document.querySelectorAll('.box'); 

boxes.forEach((box)=> {
    box.addEventListener("mouseover",() => {
        box.style.backgroundColor = newRandomColor();  
    } ); 
}); 

button1.addEventListener('click',()=>{
    let dim = 0; 
    do{
    dim =  parseInt(prompt("Enter the dimension (between 1 - 100")); 
    if(dim<1 || dim>100){
        alert("incorrect, specify within range!"); 
    }
    }while(dim<1 || dim>100); 

    let prevbox = document.querySelector('.box');
    if(prevbox!=null){
        let allbox = document.querySelectorAll('.box');
        allbox.forEach(box => {
            container.removeChild(box); 
        })
    }
    else{
        let maboxes = document.querySelectorAll('.mydiv'); 
        maboxes.forEach((box) => {
            container.removeChild(box);
        })
    }
    

    let mydim = (800/dim);
    mydim = mydim + "px"; 
    for(let i = 0; i<dim; i++){
        for(let j = 0; j<dim; j++){
            let div = document.createElement('div'); 
            div.className = 'mydiv'; 
            div.style.outlineStyle = 'solid'; 
            div.style.flexBasis = mydim; 
            div.style.height = mydim; 
            container.appendChild(div);    
        }
    }

    let myboxes = document.querySelectorAll('.mydiv'); 
    myboxes.forEach((box) => {
        box.addEventListener("mouseover",() => {
            box.style.backgroundColor = newRandomColor();  
        })
    }); 


})

// 



