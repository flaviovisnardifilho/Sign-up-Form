const user_password = document.querySelector('#user_password');
const confirm_password = document.querySelector('#confirm_password');
const requirements = document.querySelector('.requirements');

user_password.addEventListener('input', (e) => checkPassword(e));
confirm_password.addEventListener('input', (e) => checkPassword(e));

function checkPassword(e) {
  if (
    user_password.value !== confirm_password.value ||
    user_password.value === ''
  ) {
    // console.log(`${user_password.value}`);
    user_password.setAttribute(
      'style',
      'border: 1px solid #D55C5F; color: #D55C5F; box-shadow: none; outline-width: 0;'
    );
    confirm_password.setAttribute(
      'style',
      'border: 1px solid #D55C5F; color: #D55C5F; box-shadow: none; outline-width: 0;'
    );
  } else if (user_password.value === confirm_password.value) {
    user_password.setAttribute(
      'style',
      'border: 1px solid #E5E7EB; color: black;'
    );
    confirm_password.setAttribute(
      'style',
      'border: 1px solid #E5E7EB; color: black;'
    );
  }
}

checkPassword();
