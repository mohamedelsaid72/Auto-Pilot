//auth variables
var googleProvider = new firebase.auth.GoogleAuthProvider();

//sign out function
const signOut = async ()=> {
    await auth.signOut();
}

//singUp with email
const createEmailUser = async (signUpInfo)=> {
    //creating user with email and password
    const userCredential = await auth.createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password);
    //creating user info 
    await updateName(signUpInfo.name);
    await createAddress();
}


//login withe mail
const loginEmailUser = async (email,password)=> {
    await auth.signInWithEmailAndPassword(email,password);
}

//login with google account
const loginWithGoogle = async () => {
    //result of the popup login
   const result = await auth.signInWithPopup(googleProvider);
   //credintials of the login 
   const credential = result.credential;
   //token 
   const token = credential.accessToken;
   //user 
   const user = result.user;

   return user;

}

const updateName = async ( name ) => {
    await auth.currentUser.updateProfile( 
        {
            displayName: name,
        }
    )
    return auth.currentUser;
}

const updateAvatarUrl = async (url) => {
    await auth.currentUser.updateProfile(
        {
            photoURL: url,
        }
    )
}

const updateEmail = async (email) => {
    await auth.currentUser.updateEmail(email);
    return auth.currentUser;
}

const updatePassword = async (password) => {
    await auth.currentUser.updatePassword(password);
}

const passwordReset = async (email) => {
    await auth.sendPasswordResetEmail(email)
}