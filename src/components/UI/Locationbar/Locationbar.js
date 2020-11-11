import React from 'react'
import classes from './Locationbar.module.css'
import {connect} from 'react-redux'
import {search_location} from '../../../store/action/index'

const Locationbar = props =>{

const locationbarHandler = (e) =>{
  // console.log("Location bar",e.target.value)
  if(e.target.value !=="Choose..."){
  props.search_location(e.target.value)
  }
  props.history.push("/locationfilter")
}

    return(
<div className="">
        
  <select onChange={(e)=>locationbarHandler(e)} className={classes.Location} >
    <option defaultValue>Choose...</option>

    <option value="Bahadurabad">Bahadurabad</option>

    <option value="Clifton">Clifton</option>
    <option value="Defence">Defence</option>

    <option value="Gulshan Iqbal">Gulshan Iqbal</option>
    {/* <option value="gulistanejohar">Gulistan-e-Johar</option> */}

    <option value="Karimabad">Karimabad</option>
    <option value="Korangi">Korangi</option>
    {/* <option value="lyari">Lyari</option> */}

    <option value="Malir">Malir</option>

    <option value="Nazimabad">Nazimabad</option>
    <option value="North Karachi">North Karachi</option>
    <option value="North Nazimabad">North Nazimabad</option>
    {/* <option value="naganchowrangi">Nagan Chowrangi</option> */}
    
    <option value="Orangi">Orangi</option>


    
    
  </select>
</div>

    )
}


const mapDispatchToProps = (dispatch) =>({
  search_location: (e) => dispatch(search_location(e))
})

export default connect(null,mapDispatchToProps)(Locationbar)