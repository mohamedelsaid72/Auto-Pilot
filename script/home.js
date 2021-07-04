//query selectors 
const logout = document.querySelector('#logout');
const loggedInLinks = document.querySelectorAll('.logged-in')
const loggedOutLinks = document.querySelectorAll('.logged-out')

auth.onAuthStateChanged((user)=> {
    SetupUiLinks(user);
})

const SetupUiLinks = (user) => {
    if ( user ) {
        loggedInLinks.forEach(link => {link.style.display = 'block'}); 
        loggedOutLinks.forEach(link => {link.style.display = 'none'});
    } else { 
        loggedInLinks.forEach(link => {link.style.display = 'none'}); 
        loggedOutLinks.forEach(link => {link.style.display = 'block'});
    }
}

logout.addEventListener('click',e => {
    e.preventDefault();

    signOut().then(()=>{location.reload();})
})