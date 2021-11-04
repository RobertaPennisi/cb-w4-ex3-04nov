const q = (selector) => document.querySelector(selector);

const render = ((container, items) => {
    items.sort((a, b) => (a.name > b.name) ? 1 : -1);

    const elements = items.map((element) => 
   `<li>
   <h3>${element.name}</h3> 
   <p><b>Phone: </b><a href="tel:${element.phone}">${element.phone}</a></p> 
   <p><b>Email: </b><a href="mailto:${element.email}">${element.email.toLowerCase()}</a></p>
   </li>`);
    
    const content = elements.join('');
    container.innerHTML = content;
});

document.addEventListener('DOMContentLoaded', () => {
    const formAdd = q('.add-new');
    const input = q('form input');
    const list = q('ul');
    const newName = q('#name');
    const newPhone = q('#phone');
    const newEmail = q('#email');
    
    /**
     * funzione che aggiunge un contatto in rubrica
     */
    formAdd.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const results = Object.create(data[0]);
            results.name = newName.value;
            results.email = newEmail.value;
            results.phone = newPhone.value;

            data.push(results);

            render(list, data);
    });
        
    render(list, data);

    input.addEventListener('keyup', (event) => {
        event.preventDefault();
        const value = input.value.toLowerCase();
        const results = data.filter((element) => 
            element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1)
        
        render(list, results);
    });
});