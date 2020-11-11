import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
import Searchbar from '../../UI/Searchbar/Searchbar'
import Locationbar from '../../UI/Locationbar/Locationbar'
import {connect} from 'react-redux'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const Toolbar = props => {
    // console.log("Toolbar props====>",props)
    return (
        <Aux>
    <header className={classes.Toolbar}>
    <div onClick={()=>props.history.push("/")} style={{cursor:"pointer"}}
    className={classes.NavLogo}>Olx</div>
    <div className={classes.Logo}>
        <Locationbar history={props.history}/>
    </div>
    <div className={classes.Logo}>

    <Searchbar history={props.history} placeholder="Find Cars, Mobile Phones and more..."/>
        {/* <h1>Logo</h1> */}
    {/* <Logo/>     */}
    {/* <Logo height="80%"/> */}
    </div>
    <nav className={classes.DesktopOnly}>
        <NavigationItems history={props.history}/>
    </nav>
    <button onClick={()=>props.history.push("/post")} className={classes.Sellbutton}>+ SELL</button>
</header>
<div className={classes.subheader}>
    <span className={classes.subheaderheading}>All Categories</span>
    <div className={classes.subheadernavigation}>
    <span onClick={()=>props.history.push("/car")}>Cars</span>
    <span onClick={()=>props.history.push("/mobile")}>Mobiles</span>
    <span onClick={()=>props.history.push("/fashion")}>Fashion</span>
    <span onClick={()=>props.history.push("/property")}>Property</span>
    </div>
</div>
</Aux>
    )
}

const mapStateToProps =(state)=>({
    history:state.history
})

export default connect(mapStateToProps,null)(Toolbar)