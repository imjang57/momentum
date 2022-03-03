const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const CSS_HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
    // console.dir(loginInput);
    // console.log(event);

    /*
    Browser's default behavior on submit event is refreshing whole page.
    Disabling default behavior using "event.preventDefault()", browser's whole page refreshing on submit event can be prevented.
    */
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(KEY_USERNAME, username);
    loginForm.classList.add(CSS_HIDDEN_CLASSNAME);
    drawGreeting(username);
}

function drawGreeting(username) {
    greeting.classList.remove(CSS_HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername === null) {
    // Show the login form
    loginForm.classList.remove(CSS_HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    drawGreeting(savedUsername);
}
