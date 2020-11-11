import React, {Component} from 'react'
import {connect} from 'react-redux'
import firebase from '../Config/Firebase/Firebase'
import classes from './Profile.module.css'
import Posting from '../Postad/Posting'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import {get_history} from  '../../store/action/index'

class Profile extends Component{
    state={
        ads:[],
        editad:[],
        editkey:null,
        showeditcomponent:false,
        shouldupdate:true
    }

    componentDidUpdate(){
        // console.log("Profile  updated======>")
        if(this.state.ads.length === 0 && this.state.shouldupdate){
            let myads=[]
            firebase.database().ref("/").child("ads").orderByChild("uid").equalTo(this.props.current_user.uid).
            once('value',  (snapshot) =>{
                snapshot.forEach((childSnapshot)=> {
                  myads.push(childSnapshot.val())
                });
                // console.log("ads updated on component did update==>",)
                if(myads.length >0){
                    // alert("successfull")
                    this.setState({ads:myads})
                }else{
                    // alert("Error")
                    // console.log("Error")
                    this.setState({shouldupdate:false})
                }
        })
    
        }
    }

    // componentWillUnmount(){
    //     console.log("Unmounted profiil")
    // }

    componentDidMount(){
        let ads=[]
        this.props.get_history(this.props.history)

        // firebase.database().ref("/").child("ads").orderByChild("uid").equalTo(this.props.current_user.uid).
        // on("child_changed",(data)=>{
            // console.log("on Change===>",data.val())
            // ads.push(data.val())
            // this.setState({ads:ads})
            // console.log(this.state.ads)
        // });   
        
        // console.log(this.props.current_user.uid)
        if(Object.keys(this.props.current_user).length){
        firebase.database().ref("/").child("ads").orderByChild("uid").equalTo(this.props.current_user.uid).
        once('value',  (snapshot) =>{
            snapshot.forEach((childSnapshot)=> {
            //   var childKey = childSnapshot.key;
            //   var childData = childSnapshot.val();
            //   console.log(childKey,childData)
              ads.push(childSnapshot.val())
            //   console.log("New  arr before concat",ads)
            });
            // console.log("New array afterloop",ads)
            this.setState({ads:ads})
                // if(ads.length >1){
            // console.log("hello world")
        // }
    })

    }
} 


    deleteAdHandler = (key,i) =>{
        firebase.database().ref("/").child(`ads/${key}`).remove()
        .then(()=> {
            let updatedads=[...this.state.ads]
            updatedads.splice(i,1)
            this.setState({ads:updatedads})
            alert("Ad Successfully Removed")
            // console.log("Remove succeeded.")
          })
          .catch((error)=> {
            alert("Remove failed: " + error.message)
          });
        // console.log(key)
    }




    editAdHandler = (key,i) =>{
        let editadfirebasedata= []
        firebase.database().ref("/").child(`ads/${key}`).once("value",(data)=>{
            editadfirebasedata.push(data.val())
            this.setState({editad:editadfirebasedata,showeditcomponent:true,editkey:key})
        })
        // console.log(key)
    }


    hideeditcomponent=()=>{
        let adsafteredit=[]
        firebase.database().ref("/").child("ads").orderByChild("uid").equalTo(this.props.current_user.uid).
        once('value',  (snapshot) =>{
            snapshot.forEach((childSnapshot)=> {
              adsafteredit.push(childSnapshot.val())
            });
            this.setState({ads:adsafteredit,showeditcomponent:false})
    })
    }

    render(){
        // console.log("render======", this.state.editad)
        return(
            <Aux>
            {this.state.showeditcomponent?
            <Posting
            condition={this.state.editad[0].condition}
            type={this.state.editad[0].type}
            title={this.state.editad[0].title}
            description={this.state.editad[0].detail}
            state={this.state.editad[0].state}
            city={this.state.editad[0].city}
            area={this.state.editad[0].area}
            username={this.state.editad[0].username}
            phone={this.state.editad[0].phone}
            price={this.state.editad[0].price}
            image1={this.state.editad[0].image1}
            image2={this.state.editad[0].image2}
            image3={this.state.editad[0].image3}
            image4={this.state.editad[0].image4}
            subcategory={this.state.editad[0].subcategory}
            showeditcomponent={this.state.showeditcomponent}
            hideeditcomponent= {this.hideeditcomponent}
            editkey={this.state.editkey}
            />
            :
            <div className={classes.profile}>
                {Object.keys(this.props.current_user).length?
                <div>
            <h1>Welcome! {this.props.current_user.name}</h1>
            <img src={this.props.current_user.profile}/>
            <h4>Your ads</h4>
            </div>: <h1>Please Login To Continue</h1>}
            <ul className={classes.adscontainer}>
                {this.state.ads?this.state.ads.map((v,i)=>{
                    return <li key={v.key}><img width="80px" height="80px" src={"data:image/png;base64,"+btoa(v.image1)}/>
                    <h6>{v.title}</h6> <button onClick={()=> this.deleteAdHandler(v.key,i)}>Delete Ad</button>
                    <button onClick={()=> this.editAdHandler(v.key,i)}>Edit Ad</button>
                    <button onClick={()=> 
                    this.props.history.push({
                        pathname:`/item/${v.key}`,
                    })}>View Ad</button>
                    </li>
                }):null}
            </ul>
            
        </div>
    }
        </Aux>

        )
    }
}


const mapStateToProps=(state) => ({
    current_user:state.current_user
})


const mapDispatchToProps=(dispatch)=>({
    get_history: (history)=>dispatch(get_history(history))
})


export default  connect(mapStateToProps,mapDispatchToProps)(Profile)