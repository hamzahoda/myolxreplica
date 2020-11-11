import React,{Component} from 'react'
import classes from './Searchbar.module.css'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            searchmessage:""
        }
    }


searchmessageHandler=()=>{
    let message=this.state.searchmessage.toLowerCase()
    let availableopt=["cars","mobiles","fashions","propertys"]
    let searchopt=availableopt.filter((e)=>{
    if(e.includes(message)){
        return true
    }
    
})
    if(searchopt[0] ==="cars"){
        this.props.history.push("/car")
    }else if(searchopt[0] ==="mobiles"){
        this.props.history.push("/mobile")
    }else if(searchopt[0] ==="fashions"){
        this.props.history.push("/fashion")
    }else if(searchopt[0] ==="propertys"){
        this.props.history.push("/property")
    }

    // console.log(searchopt)
}

    render(){
        return(
<div>
        <input onChange={(e)=>this.setState({searchmessage:e.target.value})} className={classes.Inputbar} placeholder={this.props.placeholder}/>
        <button onClick={this.searchmessageHandler} className={classes.Searchbutton}>
        <svg className={classes.Searchicon} width="1.4em" height="1.4em" viewBox="0 0 16 16"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path  fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
        <path  fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        </svg></button>
        </div>

        )
    }
}

export default SearchBar