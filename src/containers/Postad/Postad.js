import React,{Component} from 'react'
import classes from './Postad.module.css'
import Posting from './Posting'
import {connect} from 'react-redux'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import {facebook_login} from '../../store/action/index'
import {get_history} from  '../../store/action/index'

class Postad extends Component{

    state={
        categories:["Mobile","Cars","Fashion","Property"],
        categoryselected:"",
        postingad:false,
        show:true

    }


componentDidMount(){
    this.props.get_history(this.props.history)

}


categoryclickhandler=(element,index)=>{
    this.setState({categoryselected:element,postingad:true})
    // console.log(element,index)
}

changecategoryhandler=()=>{
this.setState({postingad:false})
}

// modalCloseHandler=()=>{
//     this.setState({show:false})
// }


    render(){
        return(
            <Aux>
            {Object.keys(this.props.current_user).length?null:
            <Modal show={this.state.show} ><h4>Login To Continue</h4>
            <button onClick={()=>this.props.facebook_login()} className={classes.facebookloginbtn}>Facebook Login</button></Modal>}

            <div className={classes.maincontainer}>
            
           <div className={classes.categorycontainer}>
           <h3 style={{display:"flex",justifyContent:"center",fontWeight: "700"}}>POST YOUR AD</h3>
<div className={classes.categorybox}>
    {this.state.postingad?<Posting 
    categoryname={this.state.categoryselected}
    changecategory={this.changecategoryhandler}/>:


<div>
    <h5 className={classes.categorytext}>choose a category</h5>
    
    
    <div style={{display:"flex"}}>
    
               <ul className={classes.categoryul}>
                   {this.state.categories.map((e,i)=>{
                       return <li key={i} onClick={()=>this.categoryclickhandler(e,i)}>
                       {e}
                       <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   })}
                   
                  
               </ul>






{/*                
               <ul className={classes.categoryul}>
                   <li>
                       Mobile
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   <li>
                       cars
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   <li>
                       fashion
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   <li>
                       property
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   <li>
                       games
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   <li>
                       cars
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
                   <li>
                       cars
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   </li>
               </ul> */}
               </div>          
            </div> 
            }
            </div>
            </div>
            </div>
            </Aux>
            )
    }
}

const mapStateToProps=(state)=>({
    current_user:state.current_user
})


const mapDispatchToProps =(dispatch)=>({
    facebook_login:()=>dispatch(facebook_login()),
    get_history: (history)=>dispatch(get_history(history))

})


export default connect(mapStateToProps,mapDispatchToProps)(Postad)