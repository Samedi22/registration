window.onload = function () {
    let fullName = document.getElementById("form-input-name");
    fullName.addEventListener("input", function () {
        this.value = this.value.replace(/[0-9]/g, '');
    })
    let yourUsername = document.getElementById("form-input-username");
    yourUsername.addEventListener("input", function () {
        this.value = this.value.replace(/[,.]/g, '');
    })
    let checkbox = document.getElementById('checkbox');
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            console.log('Согласен')
        } else {
            console.log('Не согласен')
        }
    })

    let form = document.getElementById('signup-form');
    let modal = document.getElementById('success-modal');
    let modalOkBtn = document.getElementById('modal-ok-btn');

    document.getElementById('sign-up').onclick = function () {
        let email = document.getElementById('form-input-email');
        let password = document.getElementById('form-input-password');
        let repeatPassword = document.getElementById('form-input-repeat-password');
        if (!fullName.value) {
            alert('Заполните поле Full Name');
            return;
        }
        if (!yourUsername.value) {
            alert('Заполните поле Username');
            return;
        }
        if (!email.value) {
            alert('Заполните поле E-mail');
            return;
        }
        if (!password.value) {
            alert('Заполните поле Password');
            return;
        }
        if (!repeatPassword.value) {
            alert('Повторите поле Repeat Password ');
            return;
        }
        if (password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }
        if (password.value !== repeatPassword.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (!checkbox.checked) {
            alert('Необходимо согласиться с условиями (отметьте чекбокс)');
            return;
        }
        modal.style.display = 'flex';
    }

    modalOkBtn.onclick = function () {
        modal.style.display = 'none';
        form.reset();
        window.location.href = 'index.html';
    }

    function switchToLogin() {
        document.querySelector('.account h1').innerText = 'Log in to the system';
        document.getElementById('form-input-name').closest('.form-tittle').remove();
        document.getElementById('form-input-email').closest('.form-tittle').remove();
        document.getElementById('form-input-repeat-password').closest('.form-tittle').remove();

        document.querySelector('.checkbox').remove();
        let signBtn = document.getElementById('sign-up').innerText = 'Sign In';

        document.querySelector('.already').remove();

        signBtn.onclick = function () {
            let loginUsername = document.getElementById('form-input-username').value;
            let loginPassword = document.getElementById('form-input-password').value;

            if (!loginUsername) {
                alert('Заполните поле Username');
                return;
            }
            if (!loginPassword) {
                alert('Заполните поле Password');
                return;
            }
            alert(`Добро пожаловать, ${loginUsername}!`);
        };
    }

    modalOkBtn.onclick = function () {
        modal.style.display = 'none';
        form.reset();

        switchToLogin();
    }

    let alreadyLink = document.querySelector('.already');
    alreadyLink.style.cursor = 'pointer';

    alreadyLink.onclick = function () {
        switchToLogin();
    };
}