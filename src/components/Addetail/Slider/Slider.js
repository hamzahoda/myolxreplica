import React from 'react';

const Slider = props => {
    return (
        <div className="container maincontainer ">
        <div className="row">
            <div className="carouselimageset">
                <div id="custCarousel" className="carousel slide" data-interval="false" align="center">
                    <div className="carousel-inner">
                        <div className="carousel-item active"> <img src={"data:image/png;base64,"+btoa(props.image1)} alt="items"/> </div>
                        <div className="carousel-item"> <img src={"data:image/png;base64,"+btoa(props.image2)} alt="items"/> </div>
                        <div className="carousel-item"> <img src={"data:image/png;base64,"+btoa(props.image3)} alt="items"/> </div>
                        <div className="carousel-item"> <img src={"data:image/png;base64,"+btoa(props.image4)} alt="items"/> </div>
                    </div>  <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon carouselicon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon carouselicon"></span> </a> 
                    <ol style={{marginBottom:"30px"}} className="carousel-indicators list-inline">
                        <li className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src={"data:image/png;base64,"+btoa(props.image1)} className="img-fluid"/> </a> </li>
                        <li className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src={"data:image/png;base64,"+btoa(props.image2)} className="img-fluid"/> </a> </li>
                        <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src={"data:image/png;base64,"+btoa(props.image3)} className="img-fluid"/> </a> </li>
                        <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src={"data:image/png;base64,"+btoa(props.image4)} className="img-fluid"/> </a> </li>
                    </ol>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Slider