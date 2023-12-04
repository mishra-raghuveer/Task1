let name1 = document.getElementById('name')
let password = document.getElementById('password')
let demo = document.getElementById('demo')
function passwordValidate() {
    if (password.value.length < 8) return false;
    let cap = 0
    let small = 0
    let dig = 0
    let ch = 0
    for (let j of password.value) {
        let i = j.charCodeAt()
        if (i >= 65 && i <= 90) cap++
        else if (i >= 97 && i <= 122) small++;
        else if (i >= 48 && i <= 57) dig++;
        else ch++;
    }
    if (cap < 1 || small < 1 || dig < 1 || ch < 1) return false;
    return true;
}
function signIn() {
    if (passwordValidate())
        demo.innerHTML = "Sign In successful!!! Welcome " + name1.value + " Learn More with Bigstorm"
    else
        demo.innerHTML = "Please enter a valid password(password should be of minimum 8 characters having atleast 1 small letter(a-z),1 capital letter(A-Z),1 digit(0-9),1 special character)"
}
