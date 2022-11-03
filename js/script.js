
// let parent = document.querySelector('ul');
// console.log(parent)

//  let children = parent.children;
//  console.log(children);

let box = document.querySelector('.box');
let btn = document.querySelector('.btn');

btn.addEventListener('mouseover',()=>{
    
    box.classList.toggle('change_color');
    box.innerHTML = 'motherchod';
    box.style.color = 'white';
    box.style.fontSize = '100px';
    box.style.textAlign = 'center';

})


let div = document.createElement('div');
div.className = 'bad_boy'
div.setAttribute('id', 'red');

console.log(div);

let container = document.querySelector('.container');
// container.insertBefore(div, btn);
container.append(div);

// my name is taufik





