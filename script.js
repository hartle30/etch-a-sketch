function createDiv (num) {
    const container = document.getElementById('container');
    const height = Math.floor(960/num) - 2;
    const width = height;
    if (num > 100) {
        return;
    } else {
        let numSquare = (num * num);
        for(i=1; i <= numSquare; ++i) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('square');
            container.appendChild(newDiv);
        }
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.setAttribute('style', `height: ${height}px; width: ${width}px;`));
        container.style.cssText = `grid-template-columns: repeat(${num}, 0fr); grid-template-rows: repeat(${num}, 0fr);`;
    } 
}

createDiv(16);

function hover(e) {
    e.target.classList.add('hover');
}

const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseover', hover));

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const size = prompt('How many rows/columns?');
    document.getElementById('container').innerHTML = '';
    createDiv(size);
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseover', hover));
});
