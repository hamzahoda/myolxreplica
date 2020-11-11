import React from 'react'
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Footer from '../../components/Navigation/Footer/Footer'


const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            {/* <h1>Navbar</h1> */}
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </Aux>)
}

export default Layout