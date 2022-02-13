    let nameContact = document.querySelector('.name');
    let phoneNumbre = document.querySelector('.number');
    let homeAddress = document.querySelector('.address');
    let contactList = document.getElementById('contacts-list');
    let btn = document.getElementById('btn-add')

    const localStorage = window.localStorage;

    btn.onclick = () => {
        let contact = {
            id: Math.random(1, 100),//Genera un numero aleatorio entre el 1 y el 100
            name: nameContact.value,
            phone: phoneNumbre.value,
            address: homeAddress.value
        }
    saveContact(localStorage, contact);
    }

    uploadContact(localStorage, contactList);





