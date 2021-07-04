updateForm = document.querySelector('#update-settings');

auth.onAuthStateChanged( () => {setupProfile(auth.currentUser)})

const setupProfile = (user)=> {
    
    if ( user ) { 

        if (user.providerData['0'].providerId === 'google.com') {
            $('.about').attr('style','display:none');
            $('#settingsEdit').attr('style','display:none');
            $('.alert.info').attr('style','display:block');

        }

        $('.user-name').html(user.displayName);
        $('.user-email').html(user.email);

        getUserAddress().then(
            (data) => {
                $('.country').html(data.country);
                $('.city').html(data.city);
            }
        ).catch(err=> {
            $('.country').html(err.toString());
            $('.city').html(err.toString());
        });

        if(user.photoURL) {
            $('#uAvatar').attr('src',user.photoURL.toString())
        }
    }
    else { 
        location.replace('/login.html');
    }
}



updateForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    //updating email
    if (updateForm.eMail.value.length) {
        const email = updateForm.eMail.value;
        const emailRegex = new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
        if (emailRegex.test(email)) {
            $('.email-error').html('');
            updateEmail(email).then((user)=> {
                       $('.email-success').html('Email has been updated')
                       setupProfile(user);
                    }
                ).catch(
                err => {
                    $('.email-error').html(err.toString());
                }
            )
        } else {
            $('.email-error').html('Please enter a valid email');
        }
    }

    //updating password 
    if (updateForm.password.value.length)
    {
        const password = updateForm.password.value;
        const passRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        if ( passRegex.test(password)) {
            $('.password-error').html('');
            updatePassword(password).then(()=> $('.password-success').html('password has been updated')).catch(
                err => {
                    $('.password-error').html(err.toString())
                }
            )
        } else {
            $('.password-error').html('Please enter an 8 characters length password consisting of both numbers and letters');
        }
    }

    //update user's name
    if (updateForm.fullName.value.length)
    {
        const name = updateForm.fullName.value;
        updateName(name).then( 
            (user)=> {
                 $('.name-success').html('name has been updated')
                setupProfile(user);
            }
        ).catch(
            err => {
                $('.name-error').html(err.toString())
            }
        )
    }
    //update user's avatar 
    if (updateForm['profile-image'].files[0]) {
        imgFile = updateForm['profile-image'].files[0]
        uploadAvatar(imgFile).then(
            ()=> $('.avatar-success').html('profile picture has been updated')
        ).catch(
            err => {
                $('.avatar-error').html(err.toString())
            }
        )
    }

    if( updateForm.country.value.length ) {
        const country = updateForm.country.value;
        updateUserAddress({country:country}).then(
            ()=> $('.country-success').html('country has been updated')
        ).catch(
            err => {
                $('.country-error').html(err.toString())
            }
        )
    }
    if( updateForm.city.value.length ) {
        const city = updateForm.city.value;
        updateUserAddress({city:city}).then(
            ()=> $('.city-success').html('city has been updated')
        ).catch(
            err => {
                $('.city-error').html(err.toString())
            }
        )
    }
    setupProfile(auth.currentUser);
    updateForm.reset();
})


