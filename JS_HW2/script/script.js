const root = document.querySelector('#root');
const form = document.querySelector('.addName');
const words = [];


function rerender(){
    root.innerText = '';
    for (i=0; i< words.length; i++){

        createname(words[i].name, words[i].lastname);
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = form.name;
    const lastname = form.lastname;

    const addedName = {
        name: name.value,
        lastname: lastname.value
    };

    words.push(addedName);
   

    rerender();


    name.value = '';
    lastname.value = '';

});

function createname(name, lastname){
    const div = document.createElement('div');
    const pname = document.createElement('p');
    const plastname = document.createElement('p');

    div.classList.add('item');

    pname.innerText = name;
    plastname.innerText = lastname;
    div.append(pname, plastname);
    root.append(div);

}


