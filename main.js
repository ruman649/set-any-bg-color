console.log(
    'Hello word'
)

let html = document.querySelector('html');
let colorCode = document.querySelector('#box');
const trigger = document.querySelector('#actionBtn');

trigger.addEventListener('click', func)

function func() {
    console.log('trigger')
    let color = colorCode.value;
    if (color.includes(',') && !color.includes('%')) {
        html.style.background = `rgb(${color})`;
    }
    else if (color.includes('%')) {
        html.style.background = `hsl(${color})`;
    }
    else {
        html.style.background = color;
    }
}