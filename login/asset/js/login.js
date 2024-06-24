function processData(event) {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    console.log("Username = " + username, "Email = " + email, "Password = " + password)
    alert ("Sign In Complete")
}