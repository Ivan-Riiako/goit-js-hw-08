var _ = require('lodash');

const refs = {
  email: document.querySelector("input[type='email']"),
  message: document.querySelector('textarea'),
};

if (localStorage.getItem('feedback-form-state')) {
  refs.email.value = JSON.parse(localStorage.getItem(
    'feedback-form-state'
  )).email;
  refs.message.value = JSON.parse(localStorage.getItem(
    'feedback-form-state'
  )).message;
}

const obj = {
  email: '',
  message: '',
};

document.addEventListener('input', _.throttle(() =>{
  obj.email = refs.email.value;
  obj.message = refs.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}, 500));

// function onChangeInput() {
//   obj.email = refs.email.value;
//   obj.message = refs.message.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(obj));
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    
// }

document.addEventListener('submit', onClickSubmit);
function onClickSubmit(event) {
    event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    refs.email.value = '';
    refs.message.value = '';
    localStorage.clear('feedback-form-state');
}