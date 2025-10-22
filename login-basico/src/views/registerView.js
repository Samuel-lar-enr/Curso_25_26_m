export function renderRegisterForm() {
  return`<form id="loginForm">
    <label>Username</label>
    <input type="text" id="username" name="username" required ></input>
    <label>Password</label>
    <input type="password" id="password" name="password" required ></input>
    <label>Repeat Password</label>
    <input type="password" id="password2" name="password2" required ></input>
    <button type="submit">register</button>
</form>
<button id="btnVolver">Volver a login</button>
<p id="message"></p>`
}

