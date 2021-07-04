//storage variables
const storageRef = storage.ref();


//upload user avatar
const uploadAvatar = async ( imgFile ) => {
    //reference to uploaded photo location
    const imgRef = storageRef.child(`images/userAvatars/${auth.currentUser.uid}/${new Date().toDateString()}.jpg`);
    // intiate uploading
    const uploadTask  = imgRef.put(imgFile);
    //waiting untill upload is completed
    uploadTask.then(
        (snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                updateAvatarUrl(downloadURL).then(()=>{
                    console.log('hello');
                    setupProfile(auth.currentUser);
                });
            });
        }
    )
} 