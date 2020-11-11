import React, {Component} from 'react'
import Singlead from '../../components/Ads/Singlead'
import mainimageresize from '../../assets/images/mainimageresize.jpg'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './Mainads.module.css'
import {Link} from "react-router-dom"
import firebase from '../Config/Firebase/Firebase'
import {connect} from 'react-redux'
import {get_history} from "../../store/action/index"
import Spinner from '../../components/UI/Spinner/Spinner'

class Mainads extends Component{
constructor(props){
    super(props)
    // if (window.performance) {
    //     if (PerformanceNavigation.TYPE_RELOAD) {
    //       alert( "This page is reloaded" );
    //     } else {
    //       alert( "This page is not reloaded");
    //     }
    //   }
}

    state = {
        ads:[],
    numberofads: 3,
    scrollposition:null,
    loadmorebtn:true,
    showspinner:true
    }
    

    
loadMoreHandler=()=>{
    let increasenumberofads=this.state.numberofads+2
    let newads=[...this.state.ads]
    let newarr=[]
    firebase.database().ref('/').child("ads").orderByKey().startAt(this.state.ads[this.state.ads.length-1].key).
    limitToFirst(3).once('value',  (snapshot) =>{
        snapshot.forEach((childSnapshot)=> {
        //   var childKey = childSnapshot.key;
        //   var childData = childSnapshot.val();
        //   console.log(childKey,childData)
          newarr.push(childSnapshot.val())
        //   console.log("New  arr before concat",newarr)
        });
        // console.log("New array afterloop",newarr)
        if(newarr.length >1){
        newads=newads.concat(newarr)
        // console.log("New after concat",newads)
        const uniqueObjects = [...new Map(newads.map(item => [item.key, item])).values()]
        // console.log("Unique list after removeing duplicates",uniqueObjects)
        // console.log("hello world")
        this.setState({ads:uniqueObjects,numberofads:increasenumberofads,scrollposition:window.pageYOffset})
        }else{
            // console.log("Error")
            this.setState({loadmorebtn:false})
        }

      });
    // console.log(this.state.ads[this.state.ads.length-1].key)
    // firebase.database().ref("/").orderByKey().startAt(this.state.ads[this.state.ads.length-1].key).
    // limitToFirst(3).on("child_added",(data)=>{
    // newads.push(data.val())
    // remove duplicate value from array and store it in uniqueObjects
    // const uniqueObjects = [...new Map(newads.map(item => [item.id, item])).values()]
    // console.log(uniqueObjects)
    // if(uniqueObjects.length === increasenumberofads ){
        // console.log("hello world")
        // this.setState({ads:uniqueObjects,numberofads:increasenumberofads,scrollposition:window.pageYOffset})

    // }
// })
    // this.setState((Prevstate,Props)=>{
    //     return {numberofads:Prevstate.numberofads+2,
    //         scrollposition:window.pageYOffset}
    // })
    // // console.log(this.state.scrollposition)
}

componentDidUpdate(){
    window.scrollTo(0, this.state.scrollposition);
    // console.log("updated======>")

}

componentWillMount(){
// console.log("will mount==============>")
    if(sessionStorage.getItem("numberofads") !== null){
        this.setState({numberofads:parseInt(sessionStorage.getItem("numberofads"))})
        // console.log(parseInt(sessionStorage.getItem("numberofads")))
    }
}
// firebase.database().ref("/").orderByKey().startAt("-MKUlB5_8Yh14NyhxyOv").limitToFirst(this.state.numberofads).on("child_added",

componentDidMount(){
    // console.log("Mounted========>")
    // History send to redux for global use
    this.props.get_history(this.props.history)

    let newads=this.state.ads
    if(newads.length ==0){
    firebase.database().ref("/").child("ads").limitToFirst(this.state.numberofads).on("child_added",
(data)=>{
    newads.push(data.val())
    this.setState({ads:newads,showspinner:false})}
)}
}

adClickHandler=(key)=>{
    // console.log("ad click===>",key)
    sessionStorage.setItem('numberofads', this.state.numberofads);

    this.props.history.push({
        pathname:`/item/${key}`,
    // history mei jab pass kia state abhi mei database se get kar raha hoon
    // state:{detail:this.state.ads[i]} 
    })
}

// handleReaderLoaded = (readerEvt)=>{
//     let binaryString =readerEvt.target.result
//     console.log(JSON.stringify(binaryString))
//     firebase.database().ref("/").push({image:binaryString})
//     this.setState({base64TextString: btoa(binaryString)})
//     const preview =document.getElementById("picture")
//     preview.src="data:image/png;base64,"+this.state.base64TextString
// }

// imagefilehandler=(e)=>{
//     let file=e.target.files[0]

//     if(file){
//         const reader = new FileReader();
//         reader.onload = this.handleReaderLoaded.bind(this)
//         reader.readAsBinaryString(file)
//     }
// }



    render(){
        // const uniqueObjects = [...new Map(this.state.ads.map(item => [item.id, item])).values()]
        let adnumber=this.state.ads.slice(0,this.state.numberofads)
        
        // console.log(adnumber)
        return (
            <Aux>
                {/* <input type="file" accept=".jpeg, .png, .jpg" onChange={this.imagefilehandler}/>
                <img id="picture"/> */}
            <img src={mainimageresize} className={classes.mainheaderimage} alt="Responsive image"/>
            <h1>Ads</h1>
            {this.state.showspinner?<Spinner />:
            <div className={classes.adcontainer}>
            {
            adnumber.map((ad,i) => {
            return <Singlead
            key={ad.key} 
            image={ad.image1}
            price={ad.price}
            title={ad.title}
            area={ad.area}
            date={ad.date}
            clicked={()=>this.adClickHandler(ad.key)}
            />
            })}
            </div>}
            {this.state.loadmorebtn?<button onClick={this.loadMoreHandler} className={classes.Loadmore}>Load more</button>:
            <p className={classes.Endresult}>End of Result</p>
            }
            </Aux>
            )
    }
}


const mapDispatchToProps=(dispatch)=>({
    get_history: (history)=>dispatch(get_history(history))
})

export default connect(null, mapDispatchToProps)(Mainads)