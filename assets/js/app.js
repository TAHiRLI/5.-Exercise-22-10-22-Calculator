let screen =  document.querySelector('#text');
let undo = document.querySelector('.undo');
let clear = document.querySelector('.clear')

let numpad = document.querySelectorAll('.numpad .number');
let operations = document.querySelectorAll(' .operations .number');

let equals = document.querySelector('#equals');



numpad.forEach(number =>{
    number.addEventListener('click', ()=>{
        console.log(number.value);
        screen.innerText += number.value + ' ';
    })
})
operations.forEach(number =>{
    number.addEventListener('click', ()=>{
       if(screen.innerText[screen.innerText.length-1].match(/\d/gi ))
        screen.innerText += number.value + ' ';
    })
})


undo.addEventListener('click', ()=>{
    screen.innerText = screen.innerText.slice(0,-1)
})
clear.addEventListener('click', ()=>{
    screen.innerText = '';
})

equals.addEventListener('click', ()=>{
    screen.innerText = eval(screen.innerText);
})