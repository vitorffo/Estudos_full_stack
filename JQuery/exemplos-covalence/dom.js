function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.textContent = 'Milk and bread';
    list.appendChild(item);
}

// $('#grocery-list').append('<li>Apples and Oranges</li>');
