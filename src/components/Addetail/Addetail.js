import React,{Component} from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import './Addetail.css'
import classes from './AdDetailContainer.module.css'
import mainimage from '../../assets/images/mainimageresize.jpg'
import Slider from './Slider/Slider'
import firebase from '../../containers/Config/Firebase/Firebase'
import {connect} from 'react-redux'
import {get_history} from '../../store/action/index'

class Addetail extends Component{
    
    state={
        addetail:[],
    }


    componentDidMount(){
        this.props.get_history(this.props.history)
        // console.log("Mounted",this.props.match.params.key)
        let newads=[]
        firebase.database().ref("/").child("ads").orderByKey().equalTo(this.props.match.params.key).once("value",
    (data)=>{
        data.forEach((childdata)=> {
            var childvalue = childdata.val();
            newads.push(childvalue)
        // console.log("Child Value to be pushed in new ads array",childvalue)
       })
    //    console.log("New ads array to be set in state ",newads)
       this.setState({addetail:newads})
    //    console.log("State ad detail",this.state.addetail)
    })
}
    
// componentDidUpdate(){
//     console.log("updated")
// }

    render(){
        // console.log("Rendered")
        // console.log(this.props)
        // const key = this.props.match.params.key;
        // const title = props.location.state.detail.title
        


        return(
            this.state.addetail.length ===1?<Aux>
            {/* <div>
                <h1>Ad detail</h1>
                <h1>{id}</h1>
            <h1>{title}</h1>
            </div> */}
            
        <div className={classes.maingoogleadbox} style={{
            }}>
        <img src={mainimage}/>
        </div>
        
            
        <div className={classes.mainflexbox} style={{}}>
            {/* <div style={{
            display:"inline-block",
            width:"30%",
            float:"right",
            border:"1px solid black",
            marginRight:"30px",
            marginTop:"93px"
        }}>
            <span>Rs 14000</span>
        </div> */}
        
        <div className={classes.subflexbox} style={{}}>
            <Slider 
            image1={this.state.addetail[0].image1}
            image2={this.state.addetail[0].image2}
            image3={this.state.addetail[0].image3}
            image4={this.state.addetail[0].image4}/>
            {/* <div className="container maincontainer ">
            <div className="row">
                <div className="carouselimageset">
                    <div id="custCarousel" className="carousel slide" data-interval="false" align="center">
                        <div className="carousel-inner">
                            <div className="carousel-item active"> <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills"/> </div>
                            <div className="carousel-item"> <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills"/> </div>
                            <div className="carousel-item"> <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills"/> </div>
                            <div className="carousel-item"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills"/> </div>
                        </div>  <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon carouselicon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon carouselicon"></span> </a> 
                        <ol className="carousel-indicators list-inline">
                            <li className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://i.imgur.com/weXVL8M.jpg" className="img-fluid"/> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://i.imgur.com/Rpxx6wU.jpg" className="img-fluid"/> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://i.imgur.com/83fandJ.jpg" className="img-fluid"/> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid"/> </a> </li>
                        </ol>
                    </div>
                </div>
            </div> */}
        {/* </div> */}
        
        
        
        
        
        
        
        
        <div className="maintextcontainer">
            <h3><span>Details</span></h3>
            <div className="detailtext" >
                <span style={{
        color:"rgba(0,47,52,.64)"}}>Condition</span>
                <span className={classes.productdetailsalign} style={{
            // display:"flex",
            // justifyContent:"flex-end",
            // flexBasis: "50%",
            // textAlign: "left",
            color: "#002f34",
            }}>{this.state.addetail[0].condition}
                {/* New */}
                </span>
        
                <span  className={classes.productdetailsalign}  style={{
        color:"rgba(0,47,52,.64)", 
        // flexBasis: "50%",
        // textAlign: "left",
        }}>Type</span>
                <span className={classes.productdetailsalign} style={{
        // flexBasis: "50%",
        // textAlign: "left",
        color: "#002f34"   }}>Tv</span>
        </div>
        
        
        <div className="descriptiontext">
            <h3>Description</h3>
            <p className="descriptionpara" >
                {this.state.addetail[0].detail}
                {/* Shop no 4 Taj mahal plaza 6th road choke Murree Road Rawalpind */}
            </p>
        </div>
        
        </div>
        
        
        
        
        {/* <div style={{
            display:"inline-block",
            position:"absolute",
            top:"320px",
            right:"250px",
            zIndex:"200",
            width:"100px",
            border:"1px solid black"
        }}>
        <div style={{}}>
            <span style={{}}>Rs 14000</span>
        </div>
        
        </div> */}
        
        
        
        </div>
        
        
        
        <div className={classes.userinformation} style={{
            // width:"35%",marginTop:"120px",marginRight:"20px"
            // border: "1px solid rgba(0,47,52,.2)",
            // borderRadius: "4px"
            }}>
                
            <div className={classes.productinformationflexbox} style={{
            // display:"flex",flexDirection:"column",background: "#fff",
            // border: "1px solid rgba(0,47,52,.2)",padding: "20px",
            // borderRadius: "4px",marginBottom:" 8px"
            }}>
        
        
            <h1 className={classes.productprice} style={{
            // direction: "ltr",
            // fontWeight: "700",
            // marginBottom: "8px",
            // color: "#002f34",
            // fontSize: "34px",
            // lineHeight: "32px"
        }}
            >Rs { new Intl.NumberFormat('en-PK', {
                style: 'decimal',
                currency: 'PKR'
              }).format(this.state.addetail[0].price)}
                {/* Rs 14,000 */}
                </h1>
            <p className={classes.producttitle} style={{
            // fontWeight: "400",
            // margin: "0",
            // fontSize: "16px",
            // color: "rgba(0,47,52,.64)",
            // lineHeight: "24px",
            // wordBreak: "break-word"
            }}>
                {this.state.addetail[0].title}
                {/* 32inch TV Simple (made in China) */}
            </p>
         <div className={classes.productarea} style={{
            // display: "flex",
            // marginTop: "24px",
            // justifyContent: "space-between",
            // color: "rgba(0,47,52,.64)",
            // fontSize: "12px"
            }}>   
        <span >
        {this.state.addetail[0].city}, {this.state.addetail[0].state}    
        {/* Karachi, Sindh */}
            </span>
            <span>17 Feb</span>
            </div>
            </div>
        
        <div className={classes.userinformationflexboxcontainer} style={{
            // display:"flex",flexDirection:"column",background: "#fff",
            // border: "1px solid rgba(0,47,52,.2)",padding: "20px",
            // borderRadius: "4px"
        }}>
        <h1 className={classes.sellerdescriptionheading} style={{
            // fontSize: "20px",
            // lineHeight:" 24px",
            // color: "#002f34",
            // fontWeight: "400",
            // padding: "0"
            }}>Seller Description</h1>
        
        <div style={{display:"flex"}}>
        <img className={classes.userimage} src="https://apollo-singapore.akamaized.net/v1/files/ojvjcufoqjv32-PK/image;s=120x120" style={{
            // width: "68px",
            // height: "68px",
            // borderRadius: "50%",
        
        }}/>
        
        
        <div className={classes.userinfocontainer} style={{
            // fontSize: "16px",
            // color: "#002f34",
            // display: "flex",
            // flexDirection:"column",
            // textTransform: "capitalize",
            // fontWeight: "700",
            // paddingLeft: "16px",
        
            }}>
            <p>{this.state.addetail[0].username}
                {/* User Name */}
                </p>
            <p className={classes.userinfotext} style={{
        //         fontSize: '12px',
        //  color: "rgba(0,47,52,.64)",
        }}>
                Member since Oct 2017
            </p>
        
        
        </div>
        
        
        </div>
        
        <button onClick={()=>this.props.history.push("/chat")} className={classes.chatbtn} style={{
            // color: "#fff",
            // backgroundColor: "#002f34",
            // border:" 5px solid #002f34",
            // padding: "0 7px",height: "40px"
            }}>Chat with Seller</button>
        
        <div className={classes.contactinformationcontainer} style={{
            // display:"flex",
            // justifyContent:"center",
            // padding:" 28px 0 10px 0",
            // height: "16px",
        }}>
        <svg width="26px" height="26px" viewBox="0 0 16 16" className="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg>
        <p className={classes.contactnumber} style={{
            // fontWeight: "700",color:" #6c99ff",fontSize:"14px",marginBottom:"5px"
            }}>{this.state.addetail[0].phone}
                {/* 03323796884 */}
                </p>
        </div>
        
        </div>
        
        
        
        
        </div>
        
        </div>
        
        
        
        
        </Aux>:null
        )
    }

}

const mapDispatchToProps = (dispatch) =>({
    get_history: (history)=>dispatch(get_history(history))

})

export default connect(null,mapDispatchToProps)(Addetail)