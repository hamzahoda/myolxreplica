import React, {Component} from 'react'
import Singlead from '../../../components/Ads/Singlead'
import mainimageresize from '../../../assets/images/mainimageresize.jpg'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import locationfilteradclasses from '../../Mainads/Mainads.module.css'
import firebase from '../../../containers/Config/Firebase/Firebase'
import {connect} from 'react-redux'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {get_history} from '../../../store/action/index'


class LocationFilter extends Component{

    // constructor(props){
        // super(props)
        // if (window.performance) {
        //     if (PerformanceNavigation.TYPE_RELOAD) {
        //       alert( "This page is reloaded" );
        //     } else {
        //       alert( "This page is not reloaded");
        //     }
        //   }
    // }
    
        state = {
            ads:[],
        numberofads: 3,
        scrollposition:null,
        loadmorebtn:true,
        showspinner:true,
        errormessage:false
        }
        
    
        
    loadMoreHandler=()=>{
        let increasenumberofads=this.state.numberofads+2
        this.setState({numberofads:increasenumberofads,scrollposition:window.pageYOffset})
        if(this.state.ads.length < increasenumberofads){    
            this.setState({loadmorebtn:false})
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevProps.search_location !== this.props.search_location){
            // console.log("Should Update======>")

            let newads=[]
            firebase.database().ref('/').child("ads").orderByChild("area").equalTo(this.props.search_location).once('value',  (snapshot) =>{
                snapshot.forEach((childSnapshot)=> {
                  newads.push(childSnapshot.val())
                });
                if(newads.length >0){
                    // alert("successfull")
                    this.setState({ads:newads,numberofads:3,loadmorebtn:true,errormessage:false,showspinner:false,scrollposition:window.pageYOffset})
                }else{
                    // alert("Error")
                    // console.log("Error")
                    this.setState({loadmorebtn:false,showspinner:false,errormessage:true})
                }
            })



        }
        window.scrollTo(0, this.state.scrollposition);
        // console.log("updated======>")
    
    }
    
    componentWillMount(){
    // console.log("will mount==============>")
        if(sessionStorage.getItem("numberofads") !== null){
            this.setState({numberofads:parseInt(sessionStorage.getItem("numberofads"))})
        }
    }
    
    componentDidMount(){
        // console.log("Mounted========>")
        this.props.get_history(this.props.history)
    
        let newads=[]
    //     firebase.database().ref("/").child("ads").orderByChild("subcategory").equalTo("car").on("child_added",
    // (data)=>{
    //     newads.push(data.val())
    //     this.setState({ads:newads,showspinner:false})}
    // )
    if(this.props.search_location.length>0){
    firebase.database().ref('/').child("ads").orderByChild("area").equalTo(this.props.search_location).once('value',  (snapshot) =>{
        snapshot.forEach((childSnapshot)=> {
          newads.push(childSnapshot.val())
        });
        if(newads.length >1){
            // alert("successfull")
            this.setState({ads:newads,showspinner:false})
        }else{
            // alert("Error")
            // console.log("Error")
            this.setState({loadmorebtn:false,showspinner:false,errormessage:true})
        }
    })
    }
    }
    
    adClickHandler=(key)=>{
        // console.log("ad click===>",key)
        sessionStorage.setItem('numberofads', this.state.numberofads);
    
        this.props.history.push({
            pathname:`/item/${key}`,
        })
    }
    
    
    render(){
            let adnumber=this.state.ads.slice(0,this.state.numberofads)
            
            return (
                <Aux>
                {this.props.search_location.length>0?<div>
                <img src={mainimageresize} className={locationfilteradclasses.mainheaderimage} alt="Mainheader"/>
                <h1 className={locationfilteradclasses.admainheading}>Location: {this.props.search_location}</h1>
                {this.state.showspinner?<Spinner />:
                <div>
                <div className={locationfilteradclasses.adcontainer}>
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
                </div>
                {this.state.loadmorebtn?<button onClick={this.loadMoreHandler} className={locationfilteradclasses.Loadmore}>Load more</button>:
                this.state.errormessage?
                <p className={locationfilteradclasses.Errormessage}>Error Occured Please Refresh the page</p>
                :
                <p className={locationfilteradclasses.Endresult}>End of Result</p>
                }
                </div>}
                </div>:
                <h1>Please Choose a location from search bar </h1>
                }
                </Aux>
                )
        }
    }
    


const mapDispatchToProps=(dispatch)=>({
    get_history: (history)=>dispatch(get_history(history))
})

const mapStateToProps = (state) =>({
    search_location:state.search_location
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter)