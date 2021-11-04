const q = (selector) => document.querySelector(selector);

const render = ((container, items) => {
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

            render(list, data.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              }));
        });
        
    render(list, data.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }));

    input.addEventListener('keyup', (event) => {
        event.preventDefault();
        const value = input.value.toLowerCase();
        const results = data.filter((element) => 
            element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1)
        
        render(list, results);
    });
});