/*=============== SHOW HIDDEN - PASSWORD ===============*/
/*======================================================*/
/*========== OOP programming - Using Object ============*/

const PasswordToggle = {
  
  init(inputPasswordId, inputIconId) {
    
    this.input = document.getElementById(inputPasswordId);
    this.iconEye = document.getElementById(inputIconId);

    if (this.input && this.iconEye) {
      this.bindEvents();
    } 
    else {
      console.error('Invalid input or icon ID provided.');
    }
  },

  bindEvents() {
    this.iconEye.addEventListener('click', () => this.togglePassword());
  },

  togglePassword() {
    
    if (this.input.type === 'password') {
      this.input.type = 'text';
      this.iconEye.classList.add('ri-eye-line');
      this.iconEye.classList.remove('ri-eye-off-line');
    } 
    else {
      this.input.type = 'password';
      this.iconEye.classList.remove('ri-eye-line');
      this.iconEye.classList.add('ri-eye-off-line');
    }
  }
};
// The call of the init method of the PasswordToggle object.
document.addEventListener("DOMContentLoaded", () => {
  PasswordToggle.init('password', 'input-icon');
});

