const table = document.getElementById('table').getElementsByTagName('tbody')[0];
const form = document.getElementById('form');
let last_id = 7;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let price = event.target.price.value;
    let quantity = event.target.quantity.value;

    let nameExists = false;
    const rows = table.querySelectorAll('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row.cells[1].textContent === name) {
            nameExists = true;
            break;
        }
    }
    
    if (nameExists) {
        alert('This product already exists!');
        return;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = ++last_id;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = name;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.textContent = price;
    tr.appendChild(td3);

    const td4 = document.createElement('td');
    td4.textContent = quantity;
    tr.appendChild(td4);

    table.appendChild(tr);
    form.reset();
});
