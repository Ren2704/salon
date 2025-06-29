const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


document.addEventListener("DOMContentLoaded", () => {  
    
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("loginUsername");
        const password = document.getElementById("loginPassword");

        let isValid = true;

        if (!(validLogin(username))) {
            isValid = false;
        } else {
            clearError(username);
        }

        if (!validPassword(password)) {
            isValid = false;
        } else {
            clearError(password);
        }

        if (isValid) {
            alert("Форма входа успешно отправлена!");
        }
    });


    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("registerName");
        const phone = document.getElementById("registerPhone");
        const username = document.getElementById("registerUsername");
        const password = document.getElementById("registerPassword");

        let isValid = true;

        if (name.value.trim() === "") {
            showError(name, "Имя не может быть пустым");
            isValid = false;
        } else if (!/^[A-Za-zА-Яа-я]+$/.test(name.value)) {
            showError(name, "Имя должно содержать только буквы");
            isValid = false;
        } else {
            clearError(name);
        }

        if (!/^\+375\d{9}$/.test(phone.value.split(" ").join(""))) {
            showError(phone, "Телефон должен быть формата +375xxxxxxxxx");
            isValid = false;
        } else {
            clearError(phone);
        }

        if (!(validLogin(username))) {
            isValid = false;
        } else {
            clearError(username);
        }

        if (!validPassword(password)) {
            isValid = false;
        } else {
            clearError(password);
        }

        if (isValid) {
            alert("Форма регистрации успешно отправлена!");
        }
    });

    function showError(input, message) {
        const errorContainer = input.nextElementSibling;
        errorContainer.nextElementSibling.textContent = message;
    }

    function clearError(input) {
        const errorContainer = input.nextElementSibling;
        errorContainer.nextElementSibling.textContent = "";
    }

    function validLogin(login) {
        if (!/[A-Za-zА-Яа-я]/.test(login.value)) {
            showError(login, "Введите хотя бы одну букву");
            return false;
        } else if (!/[0-9]/.test(login.value)) {
            showError(login, "Введите хотя бы одну цифру");
            return false;
        } else if (!/^[A-Za-zА-Яа-я0-9]{3,20}$/.test(login.value)) {
            showError(login, "Логин может содержать только буквы и цифры");
            return false;
        } else {
            return true;
        }
    }

    function validPassword(password) {
        if (!/^[A-Za-zА-Яа-я\d@_/#.$]*$/.test(password.value)) {
            showError(password, "Только буквы, цифры и спец-символы: @_/#.$");
            return false;
        } else if (!/[A-Za-zА-Яа-я]/.test(password.value)) {
            showError(password, "Введите хотя бы одну букву");
            return false;
        } else if (!/\d/.test(password.value)) { 
            showError(password, "Введите хотя бы одну цифру");
            return false;
        } else if (!/[@_/#.$]/.test(password.value)) {
            showError(password, "Введите хотя бы один спец-символ: @_/#.$");
            return false;
        } else {
            return true;
        }
    }
});
