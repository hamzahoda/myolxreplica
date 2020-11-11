import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
import {connect} from 'react-redux'
import {facebook_login} from '../../../store/action/index'
// import Aux from '../../../hoc/Auxiliary/Auxiliary'

const NavigationItems = (props) => {
    // console.log("Navigation items ==")
    return (
        <ul className={classes.NavigationItems}>
        {/* {Object.keys(props.current_user).length?     */}
        {/* <Aux> */}
        <NavigationItem clicked={()=>props.history.push("/chat")} active={false}>Chat</NavigationItem>
        <img style={{marginLeft:"10px",borderRadius:"50%"}} src={props.current_user.profile}/>
        <NavigationItem clicked={()=>props.history.push("/profile")}>Profile</NavigationItem>
        {/* </Aux>: */}
        {Object.keys(props.current_user).length?null:
        <button onClick={() => props.facebook_login()} 
        className={classes.facebookloginbtn}>Facebook Login</button>
        }
    {/* } */}
    </ul>
    )
}

const mapStateToProps =(state) =>({
    current_user:state.current_user
})

const mapDispatchToProps=(dispatch)=>({
    facebook_login: () => dispatch(facebook_login())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavigationItems)