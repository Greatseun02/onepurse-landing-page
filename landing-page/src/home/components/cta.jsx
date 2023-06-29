import React from "react";
import "../../styles/home/cta.css"


function Cta(){
    return(
    <div className="contain-cta">
<div className="cta">
        <div className="cta-container">
            <div className="cta-text">
                <p className="p">You might be miles away from home but getting money across to your loved ones shouldn't be a hassle.</p>
                <button type="button">
                    
                    <i className="fa-brands fa-google-play google-play"></i>
                    <div className="btn-div">
                        <p className="get">Get it on</p>
                        <p className="where">Google Play</p>
                    </div>
                    
                </button>
                <button type="button" className="apple">
                    <i className="fa-brands fa-apple"></i>
                    <div className="btn-div">
                        <p className="get">Download on the</p>
                        <p className="where">App Store</p>
                    </div>
                </button>
            </div>
            <div className="map">
                <img src="img/map.png" alt="map"/>
            </div>
           
        </div>
      
    </div>
    </div>
    
    )
    

}

export default Cta;