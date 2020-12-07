const list = document.querySelector('.list');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const input = document.querySelector('.add-item input');
const button = document.querySelector('.button');

function addItem() {
    let myVal = input.value;
    let newItem = document.createElement('li');
    newItem.innerHTML = `
        <input type="checkbox">${myVal}
    `;
    newItem.classList.add('item');
    items.appendChild(newItem);
}

button.addEventListener('click', addItem);