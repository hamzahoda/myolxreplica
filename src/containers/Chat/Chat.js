import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get_users} from '../../store/action/index'
import firebase from '../Config/Firebase/Firebase'
import classes from './Chat.module.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import {get_history} from "../../store/action/index"

class Chat extends Component {
    constructor(){
        super()
        this.state={
            chat_user:{},
            chats:[],
            message:""
        }
    }


    componentDidMount(){
        this.props.get_users()
        this.props.get_history(this.props.history)

    }


    chat =(user)=>{
        this.setState({chat_user:user})    
        let current_user = this.props.current_user
        let merge_uid =this.uid_merge(current_user.uid,user.uid)
        this.get_message(merge_uid)
    }

    uid_merge=(uid1,uid2)=>{
        if(uid1<uid2){
            return uid1+uid2
        }else{
            return uid2+uid1
        }
    }

    get_message=(uid)=>{
        firebase.database().ref("/").child(`chats/${uid}`).on("child_added",(messages)=>{
            this.state.chats.push(messages.val())
            this.setState({chats:this.state.chats})
        })
    }

    send_message=()=>{
        let user = this.props.current_user
        let chat_user = this.state.chat_user
        let merge_uid =this.uid_merge(user.uid,chat_user.uid)

        firebase.database().ref("/").child(`chats/${merge_uid}`).push({
            message:this.state.message,
            name:user.name,
            uid:user.uid
        })
        this.setState({
            message:""
        })
    }

    render(){
        let user=this.props.current_user
        // console.log("firebase users ====>",this.props.users)
        return(
            <Aux>
            {Object.keys(this.props.current_user).length?
            <div style={{marginLeft:"20px"}}>
                <h4>Welcome! {user.name}</h4>
                <img src={user.profile}/>
                <h6>Email: {user.email}</h6>
            <div className={classes.mainuserchatcontainer} style={{display:"flex"}}>
                <div className={classes.users}
                //  style={{backgroundColor:"grey"}}
                 >
                <h4>Chat Users:</h4>
                <ul>
                {this.props.users.map((v,i)=>{
                    return v.uid !==user.uid && <li key={i}><img src={v.profile} width="20"/> <p>{v.name}</p><button 
                    onClick={() => this.chat(v)}>Chat</button></li>
                })}
            </ul>
                </div>
                <div className={classes.currentchatuser}>
                    <h4 style={{textAlign:"center"}}>Chat</h4>
                    {Object.keys(this.state.chat_user).length ?
                    <div>
                        <h4><img src={this.state.chat_user.profile} width="20px"/>
                        {this.state.chat_user.name}
                        </h4>
                        <ul>
                            {this.state.chats.map((v,i)=>{
                                return <li className={v.uid===user.uid?classes.messageout:classes.messagein} key={i}>{v.message}</li>
                            })}
                        </ul>
                        <div className={classes.messageinputbtn}>
                        <input value={this.state.message} onChange={(e)=> this.setState({message:e.target.value})} type="text" placeholder="Enter your message"/>
                        <button onClick={()=>this.send_message()}>Send Message</button>
                        </div>
                    </div>:
                    <h4>No User</h4>
                    }
                </div>
            </div>
        </div>:
        <h1 style={{margin:"20px"}}>Please Login To Continue</h1>}
        </Aux>
)
    }
}


const mapStateToProps= (state) =>({
    current_user:state.current_user,
    users:state.users
})


const mapDispatchToProps = (dispatch) =>({
    get_users: () => dispatch(get_users()),
    get_history: (history)=>dispatch(get_history(history))

})

export default connect(mapStateToProps,mapDispatchToProps)(Chat)