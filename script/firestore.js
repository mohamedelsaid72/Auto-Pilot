// Firestore collections variables
const contacts = db.collection('contactForms');
const Adresses = db.collection('usersAdresses');

//adding contact info document to firestore db collection
const addContactInfo = async (contactInfo) => {
    await contacts.add(contactInfo);
}

//create user's adresss document 
const createAddress = async () => {
    await Adresses.doc(auth.currentUser.uid.toString()).set(
        {
            country:"non",
            city:"non",
        }
    )
}

//update user's address 
const updateUserAddress = async (addressInfo) => {
    await Adresses.doc(auth.currentUser.uid.toString()).update(addressInfo);
}

const getUserAddress = async () => {
    const doc = await Adresses.doc(auth.currentUser.uid.toString()).get()
    return  doc.data();
}