const saveContact = (localStorage, contact) =>{
    localStorage.setItem(contact.id, JSON.stringify(contact));
    location.reload();
}

const uploadContact = (localStorage, parentNode) => {
    let password = Object.keys(localStorage);
    for(password of password){
        let contact = JSON.parse(localStorage.getItem(password));
        createContact(parentNode, contact, localStorage)
    }
}

const createContact = (parentNode, contact, localStorage) =>{
    let divContact = document.createElement('div');
    let nameContact = document.createElement('h3');
    let phoneContact = document.createElement('p');
    let addressContact = document.createElement('p');
    let iconDelete = document.createElement('span');

    nameContact.innerHTML = contact.name;
    phoneContact.innerHTML = contact.phone;
    addressContact.innerHTML = contact.address
    iconDelete.innerHTML = 'delete_forever';

    divContact.classList.add('contact');
    iconDelete.classList.add('material-icons', 'icon');

    iconDelete.onclick = () =>{
        localStorage.removeItem(contact.id);
        location.reload();
    }

    divContact.appendChild(nameContact);
    divContact.appendChild(phoneContact);
    divContact.appendChild(addressContact);
    divContact.appendChild(iconDelete);

    parentNode.appendChild(divContact);
}