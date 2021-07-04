//Query selectors
const contactForm = document.querySelector('.contact-form');
const alertbox = document.querySelector('.alert.success');

//validating form input
const formValidatation = () => {

    //Email Regex validation
    const emailRegex = new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
    if (!emailRegex.test(contactForm.inputEmail4.value)) {
        $('.email-error').html('Please enter a valid email');
        return false;
    }  else {$('.email-error').html('')}

    //Phone number Regex validation
    const phoneRegex = new RegExp(/^01[0-2 5]{1}[0-9]{8}/);
    if (!phoneRegex.test(contactForm.inputPassword4.value)) {
        $('.phone-error').html('Please enter a valid phone number')
        return false;
    }  else { $('.phone-error').html('')}

    return true;
}

// contact form event listener
contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const contactInfo = { 
        email : contactForm.inputEmail4.value,
        phone : contactForm.inputPassword4.value,
        address: contactForm.inputAddress.value,
        city : contactForm.inputCity.value,
        state : contactForm.inputState.value,
        message : contactForm.exampleFormControlTextarea1.value.trim(),
    }

    if ( formValidatation() ) {
        addContactInfo(contactInfo).then(()=> {
            contactForm.reset();
            alertbox.style.display = 'block';
        }).catch(
            err => {console.log(err)}
        );
    }
})