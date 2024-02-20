// console.log("Form");

const localStorageKey = 'feedback-form-state';

const form = document.querySelector(".feedback-form");
// const textarea = form.querySelector("textarea");

function readFormData(form){
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    }
}

form.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(localStorageKey, jsonData);
})

form.addEventListener('submit', event => {
    event.preventDefault();
    const object = {
      email: event.currentTarget.elements.email.value.trim(),
      message: event.currentTarget.elements.message.value.trim(),
    };

    if(object.email && object.message){
        console.log(object);
        localStorage.removeItem(localStorageKey);
        form.reset();
        }
        else{
          alert("Please fill out both email and message fields.");
        }
  });


const rawData = localStorage.getItem(localStorageKey);
if (rawData){
    const data = JSON.parse(rawData);
    form.message.value = data.message;
    form.email.value = data.email;
}