import React,{Component} from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Mainads from '../Mainads/Mainads'
import Addetail from  '../../components/Addetail/Addetail'
import Postad from '../Postad/Postad'
import Profile from '../Profile/Profile'
import Chat from '../Chat/Chat'
import Car from '../AdCategory/Cars/Cars'
import Property from '../AdCategory/Property/Property'
import Fashion from '../AdCategory/Fashion/Fashion'
import Mobile from '../AdCategory/Mobile/Mobile'
import LocationFilter from '../AdCategory/AdByLocation/LocationFilter'
import Error404 from '../../containers/Error404/Error404'

class Routes extends Component{
    render(){
sessionStorage.clear()

        return(
        <Router>
            <Switch>
            <Route exact path="/" component={Mainads}/>
            <Route path="/item/:key" component={Addetail}/>
            <Route exact path="/post" component={Postad}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/chat" component={Chat}/>
            <Route exact path="/car" component={Car}/>
            <Route exact path="/property" component={Property}/>
            <Route exact path="/fashion" component={Fashion}/>
            <Route exact path="/mobile" component={Mobile}/>
            <Route exact path="/locationfilter" component={LocationFilter}/>
            <Route component={Error404}/>
            </Switch>
        </Router>
        )
    }
}

export default Routes