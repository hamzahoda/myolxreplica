import React, {Component} from 'react'
import classes from './Error404.module.css'
import Error404img from '../../assets/images/404.png'  
import {connect} from 'react-redux'
import {get_history} from '../../store/action/index'

class Error404 extends Component{

    componentDidMount(){
        // console.log("Mounted========>")
        // History send to redux for global use
        this.props.get_history(this.props.history)
    }    


    render(){
        return(
        <div className={classes.maincontainer}>
            <div className={classes.firstbox}>
                <span className={classes.mainheading}>Oops!</span>
                <span className={classes.subheading}>We can't seem to find that.</span>
                <span className={classes.subheading}>Try searching for it.</span>
                <span className={classes.Error404}>Error 404</span>
            </div>
            <div className={classes.secondbox}>
                <img src={Error404img}/>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    get_history: (history)=>dispatch(get_history(history))
})


export default connect(null,mapDispatchToProps)(Error404)