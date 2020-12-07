const list = document.querySelector('.list');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const checkboxes =  document.querySelectorAll('.item input[type=checkbox]');
const input = document.querySelector('.add-item input');
const button = document.querySelector('.button');

function addItem() {
    let myVal = input.value;
    let newItem = document.createElement('li');
    newItem.classList.add('item');
 


    
    input.value = "";
    newItem.addEventListener('click', removeItem);
}

  function removeItem(){
    var item = this.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
  }

button.addEventListener('click', addItem);
checkboxes.forEach(checkbox => checkbox.addEventListener('click', removeItem));