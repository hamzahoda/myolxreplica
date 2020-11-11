import firebase from '../../containers/Config/Firebase/Firebase'



const facebook_login=(history)=>{
    return (dispatch)=>{

        var provider = new firebase.auth.FacebookAuthProvider();
        // provider.setCustomParameters({ auth_type : 'reauthenticate'})
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // var token = result.credential.accessToken;
            var user = result.user;

            let create_user ={
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }

            firebase.database().ref("/").child(`users/${user.uid}`).set(create_user).then(()=>{
                dispatch({type:"SETUSER",payload:create_user})

                alert("User Login Successful")
            })
            // console.log(user)

        }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
        // console.log("hello world")
    }
}

const get_history=(history)=>{
    return (dispatch)=>{
        dispatch({type:"SETHISTORY",payload:history})
    }
}



const get_users=()=>{
    return (dispatch)=>{
        // let users=[]
        firebase.database().ref("/").child("users").on("child_added",(data)=>{
            // users.push(data.val())
            // console.log("redux se data gaya")
            dispatch({type:"SETFIREBASEUSERS",payload:data.val()})

        })
    }
}



const search_location=(searchdata)=>{
    return (dispatch) =>{
        // console.log("Redux Location",searchdata)
        // if(searchdata !=="Choose..."){
        dispatch({type:"SEARCHLOCATION",payload:searchdata})
        // }
    }
}


export {
    facebook_login,
    get_history,
    get_users,
    search_location
}