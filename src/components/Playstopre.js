import React from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import Phone from '../images/phone-app.png';
import appstore from '../images/appstore_2x.png';
import playstore from '../images/playstore_2x.png';




class Playstore extends React.Component{
    render(){
        return(
            <Container fluid >            
            <Row className="playstore">               
              <Col sm={12} md={4} lg={4} >
                <div className="">
                  <img src={Phone} className="rounded" alt="..." />   
                </div>                  
              </Col> 

              <Col sm={12} md={3} lg={3} className="middPhone" >
                <h2 className="olx">TRY THE OLX APP</h2>
                <p className="para">Buy, sell and find just about anything using the app on your mobile.</p>
              </Col>    

              <Col sm={12} md={3} lg={3} className="lastPhone" >
                <h6 className="para1">TRY THE OLX APP</h6>
                <div className="btnlast">
                <button className="playbtn1"><img className="playbtnimg" src={appstore} /></button>
                <button className="playbtn1"><img className="playbtnimg" src={playstore} /></button>
                </div>                
             </Col>  
            </Row>

            <Row className="footcol"> 
            
            <Col sm={2} md={2} lg={2} className="hi">
                
                <ul >
                    <li className="pop"><p>POPULAR CATEGORIES</p></li>
                    <li><p>Cars</p></li>
                    <li><p>Flats for rent</p></li>
                    <li><p>Jobs</p></li>
                    <li><p>Mobile Phones</p></li>
                </ul>
            </Col> 

            <Col sm={2} md={2} lg={2}  className="hi">
                <ul>
                    <li className="pop"><p>TRENDING SEARCHES</p></li>
                    <li><p>Bikes</p></li>
                    <li><p>Watches</p></li>
                    <li><p>Books</p></li>
                    <li><p>Dogs</p></li>
                </ul>
            </Col>            

            <Col sm={2} md={2} lg={2}  className="hi">
                
                <ul>
                    <li className="pop"><p>ABOUT US</p></li>
                    <li><p>About OLX Group</p></li>
                    <li><p>OLX Blog</p></li>
                    <li><p>Contact Us</p></li>
                    <li><p>OLX for Businesses</p></li>
                </ul>
            </Col> 

            <Col sm={2} md={2} lg={2}  className="hi">
                
                <ul >
                    <li className="pop"><p>OLX</p></li>                    
                    <li><p>Help</p></li>
                    <li><p>Sitemap</p></li>
                    <li><p>Legal & Privacy info</p></li>
                </ul>
            </Col> 

            <Col sm={2} md={2} lg={2}  className="hi">
                
                <ul >
                    <li className="pop"><p>OLX</p></li>
                    <div class="column">
                        <i class="app fab fa-facebook-f"></i>
                        <i class="app fab fa-twitter"></i>
                        <i class="app fab fa-instagram"></i>
                        <i class="app fab fa-youtube"></i>
                        <i class="app fab fa-whatsapp"></i>
                    </div>
                </ul>
            </Col> 


            <Col sm={2} md={2} lg={2}  className="hi">
                
                <ul >
                    <li className="pop"><p>OUR APP</p></li>                    
                </ul>           
                <div className="playlastbtn">
                <button className="playbtn1a"><img className="playbtnimga" src={appstore} /></button>
                <button className="playbtn1a"><img className="playbtnimga" src={playstore} /></button>
                </div>  
            </Col> 

            </Row>

            <Row className="footlast">
               <Col sm={12} md={12} lg={12}>
                   <p className="paralst">Other Countries</p>
                   <p className="paralst">India - South Africa - Indonesia</p>
                   <span className="span"><p className="paralst">Free Classifieds in Pakistan. © 2006-2020 OLX</p> </span>                
               </Col>
           </Row>
          </Container> 
          
       )
    }
}
export default Playstore;


