//query selectors 
const signUp = document.querySelector('#signup');
const signIn = document.querySelector('#signin');
const google = document.querySelector('#google-login');
const resetForm = document.querySelector('#reset-password');



//validating form input
const formValidatation = () => {
    //checking if email is a vaild email adress 
    const emailRegex = new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
    const email = $('#uEmail').val();
    if ( !emailRegex.test(email)) {
        $('#email-error').html("Invalid email address");
        return false;
    } else { $('#email-error').html('');}
    //checking if passwords match
    let password = $("#uPassword").val();
    let confirmPassword = $("#confirmPassword").val();
    if ( password !== confirmPassword) {
        $('#confirm-error').html("Passwords don't match ");
        return false;
    } else { $('#confirm-error').html('');}
    //check if password is a valid password form
    const passRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    if ( !passRegex.test(password)) {
        $('#pass-error').html("Password must be eight characters, at least one letter and one number");
        return false;
    } else {  $('#pass-error').html('');}
    return true;
}

signUp.addEventListener('submit',e => {
    e.preventDefault();

    const signUpInfo = {
        email: signUp['uEmail'].value,
        password: signUp['uPassword'].value,
        name: signUp['uName'].value.trim(),
    }

    if(formValidatation()) {
        createEmailUser(signUpInfo).then(
           ()=> { 
                signUp.reset();
                window.location.replace("/profile.html");
           }
        );
    }

})

//login button event listener
signIn.addEventListener('submit', e => {
    e.preventDefault();

    email = signIn['email'].value;
    password = signIn['password'].value;
    loginEmailUser( email , password).then( 
        () => {
            window.location.replace("/profile.html"); 
        }
    ).catch(
        (err)=> {
            console.log(err);
            $('#failed-error').html('Invalid email or password');
        }
    )
})

//login with google event listener
google.addEventListener('click',(e) => {
    e.preventDefault;

    loginWithGoogle().then(
        () => { window.location.replace("/profile.html");} 
    ).catch(
        (err) => {console.log(err)}
    )
})

//password reset form event listener 
resetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    passwordReset(resetForm['email'].value).then(
       () => $('#confirmAlert').html('Check your email for the reset link')
    ).catch(
        err => $('#confirmAlert').html('Invalid Email')
    )
})