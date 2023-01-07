const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const textAreaBoxInput = document.getElementById('error-message');
const formStorage = document.getElementById('form')


// Parsing string from local storage
const userInfo = JSON.parse(localStorage.getItem('userInfo'))


if (userInfo) {
    nameInput.value = userInfo.username;
    emailInput.value = userInfo.email;
    textAreaBoxInput.value = userInfo.textAreaBox;
}



document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = nameInput.value.trim();
    const email = emailInput.value.trim();
    const textAreaBox = textAreaBoxInput.value.trim();

    const userInfo = {
        username: username,
        email: email,
        textAreaBox: textAreaBox
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

});
