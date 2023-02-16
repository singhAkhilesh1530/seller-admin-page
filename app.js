
const form = document.getElementById('my-form');
const mylist = document.getElementById('items');
form.addEventListener('submit', addItem);
mylist.addEventListener('click', remove);
const totalprice = document.getElementById("tprice");
let amount = 0;

function addItem(e){
    e.preventDefault();    
    const prod_id = document.getElementById('p_id').value;
    const price = document.getElementById('price').value;
    const name = document.getElementById('name').value;
    const li = document.createElement('li');
    const delbutton = document.createElement('button');

    li.className = 'list-group-item';
    delbutton.className = 'btn btn-danger btn-sm float-right delete';
    delbutton.appendChild(document.createTextNode('X'));

    const obj = {
        prod_id: prod_id,
        price: price,
        name: name
    }

    obj.prod_id = prod_id;
    obj.price = price;
    obj.name = name;

    localStorage.setItem(p_id, JSON.stringify(obj));

    li.appendChild(document.createTextNode('Product Id- '));
    li.appendChild(document.createTextNode(prod_id));
    li.appendChild(document.createTextNode(',   Price- '));
    li.appendChild(document.createTextNode(price));
    li.appendChild(document.createTextNode(',   Item name- '));
    li.appendChild(document.createTextNode(name));
    li.appendChild(delbutton);
    mylist.appendChild(li);
    amount = amount + parseInt(price);
    totalprice.innerText = amount;
}

function remove(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement; 
        const price = document.getElementById('price').value;
        console.log(price);
        amount = amount - price;
        totalprice.innerText = amount;
        mylist.removeChild(li);
        localStorage.removeItem(li.childNodes[2]);
    }
}


