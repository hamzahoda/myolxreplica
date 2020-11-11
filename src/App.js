import React from 'react';
import logo from './logo.svg';
import Layout from './hoc/Layout/Layout'
// import Mainads from './containers/Mainads/Mainads'
import Routes from './containers/Config/Router'
import firebase from './containers/Config/Firebase/Firebase'



const App =() => {
// firebase.database().ref("/").orderByChild("subcategory").equalTo("watch").on("child_added",
// (data)=>{console.log(data.val())}
// )
  return (
 <Layout>
   <Routes/>
 </Layout>
  );
}

export default App;
