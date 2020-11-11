import React from 'react'
import classes from './Footer.module.css'

const Footer = props => {
    return (
        // <!-- Footer -->
        <footer className="page-footer font-small indigo overflow-hidden" style={{background: "#ebeeef",
        borderTop: "1px solid rgba(0,47,52,.2)"}}>
        
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
        
            {/* <!-- Grid row --> */}
            <div className="row">
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h6 className="font-weight-bold text-uppercase mt-3 mb-3">POPULAR CATEGORIES</h6>
        
                <ul className={classes.Footerlist}>
                  <li>
                    <a href="#!">Cars</a>
                  </li>
                  <li>
                    <a href="#!">Flats for rent</a>
                  </li>
                  <li>
                    <a href="#!">Jobs</a>
                  </li>
                  <li>
                    <a href="#!">Mobile Phones</a>
                  </li>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h6 className="font-weight-bold text-uppercase mt-3 mb-3">TRENDING SEARCHES</h6>
        
                <ul className={classes.Footerlist}>
                  <li>
                    <a href="#!">Bikes</a>
                  </li>
                  <li>
                    <a href="#!">Watches</a>
                  </li>
                  <li>
                    <a href="#!">Books</a>
                  </li>
                  <li>
                    <a href="#!">Dogs</a>
                  </li>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h6 className="font-weight-bold text-uppercase mt-3 mb-3">ABOUT US</h6>
        
                <ul className={classes.Footerlist}>
                  <li>
                    <a href="#!">About OLX Group</a>
                  </li>
                  <li>
                    <a href="#!">OLX Blog</a>
                  </li>
                  <li>
                    <a href="#!">Contact Us</a>
                  </li>
                  <li>
                    <a href="#!">OLX for Businesses</a>
                  </li>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h6 className="font-weight-bold text-uppercase mt-3 mb-3">OLX</h6>
        
                <ul className={classes.Footerlist}>
                  <li>
                    <a href="#!" >Help</a>
                  </li>
                  <li>
                    <a href="#!">Sitemap</a>
                  </li>
                  <li>
                    <a href="#!">Legal & Privacy information</a>
                  </li>
                  {/* <li>
                    <a href="#!">Link 4</a>
                  </li> */}
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
            </div>
            {/* <!-- Grid row --> */}
        
          </div>
          {/* <!-- Footer Links --> */}
        
                {/* <hr /> */}

                {/* <!-- Grid row --> */}
                <div className="row d-flex align-items-center" style={{background: "#002f34" }}>

                    {/* <!-- Grid column --> */}
                    <div className="col-md-7 col-lg-7">

                        {/* <!--Copyright--> */}
                        <p className="text-center text-md-left ml-3 text-white">Other Countries India - South Africa - Indonesia
                  {/* <a href="https://mdbootstrap.com/">
                                <strong> MDBootstrap.com</strong>
                            </a> */}
                        </p>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-5 col-lg-4 ml-lg-0">

                        {/* <!-- Social buttons --> */}
                        <div className="text-center text-md-right mr-2 mt-2 text-white">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                        <p>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                                </li>
                                {/* <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <p>Hello</p>
                                    </a>
                                </li> */}
                            </ul>
                        </div>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>

</footer>
        // {/* <!-- Footer --> */}
    )
}

export default Footer