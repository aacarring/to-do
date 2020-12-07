const list = document.querySelector('.list');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const checkboxes =  document.querySelectorAll('input[type=checkbox]');
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
    input.value = "";
}

function removeItem (e) {
    if (e.target.checked === true) {
        e.target.parentNode.remove(e.target);
    };
  }

button.addEventListener('click', addItem);
checkboxes.forEach(checkbox => checkbox.addEventListener('click', removeItem));
