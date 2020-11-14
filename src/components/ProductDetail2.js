import React from 'react'; 
import { Container,Col,Row,Card,Image} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import main1 from '../images/pexels-aldo-picaso-982104 (1).jpg'
import main2 from '../images/pexels-math-90946.jpg'
import main3 from '../images/pexels-pixabay-35619.jpg'
import Card1 from '../images/pexels-aldo-picaso-982102.jpg'
import map from '../images/Opera Snapshot_2020-11-02_193350_www.google.com.png'

class ProductDetail extends React.Component{
    render(){
        return(
            <Container fluid>            
                <Row>                       
                  <Col sm={12} md={6} lg={6}>
                  <Card className="cardcont1"> 
                        <Card.Body>
                        <div  >
                    <Carousel className="productfirsthalf" >
                        
                         <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={main1}
                            alt="First slide"
                            />                         
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={main2}
                            alt="First slide"
                            />
                         
                        </Carousel.Item>

                       <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={main3}
                            alt="First slide"
                            />
                         
                        </Carousel.Item>

                    </Carousel>
                    </div>
                        </Card.Body> 
                      </Card>

                      <Card className="cardcont5"> 
                        <Card.Body>
                        <h2 className="sell">Description</h2>
                          <ul>
                            <li><p>Separate Well- Furnished Apartments Providing Perfect Secure,</p></li>
                            <li><p>Peaceful And Hygienic Environment For.</p></li>
                          </ul>

                          <ul>
                            <li><p>1) Working Executives</p></li>
                            <li><p>2) University Students</p></li>
                          </ul>

                          <ul>
                            <li><p>• Tiled Floor</p></li>
                            <li><p>• Tiled Floor</p></li>
                            <li><p>• Very Well Ventilated And Bright.</p></li>
                            <li><p>• A Big Hall At Top Floor Is Dedicated For Dining And Physical Activities.</p></li>
                            <li><p>• Each Room Has Its Own Separate Washroom.</p></li>
                            <li><p>• Each Apartment Has A Small Kitchen.</p></li>
                            <li><p>• Inbuilt Cupboards For Individuals.</p></li>
                            <li><p>• Wooden Beds With Mattress.</p></li>
                            <li><p>• 24 Hours Water Supply.</p></li>
                            <li><p>• Sui Gas Supply.</p></li>
                            <li><p>• Instant Geyser.</p></li>
                            <li><p>• Concealed Pipes And Cables For A. c Units.</p></li>
                            <li><p>• Cable Network For Led T. v Is Available In Each Studio.</p></li>
                            <li><p>• Independent Ups System In Each Studio.</p></li>
                            <li><p>• Laundry Facility Is Provided</p></li>
                            <li><p>• CCTV Security System.</p></li>
                            <li><p>• 24 Hours Security Guard.</p></li>
                            <li><p>• Fire Alarm And Fire Extinguisher System</p></li>
                            <li><p>• Stairs Safety</p></li>
                          </ul>

                          <ul>
                            <li><p>Best For Living Purpose</p></li>
                            <li><p>Reasonable Demand</p></li>
                            <li><p>Call Us For More Details</p></li>
                          </ul>
                        </Card.Body>
                      </Card>
                  </Col>

                  <Col sm={12} md={6} lg={6}>                     
                      <Card  className="cardcont2">
                        <Card.Body>
                            <div>  
                                <span>                                                       
                                <div className="heading">
                                   <div className="icon1">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-share share" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                         <path fill-rule="evenodd" d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                    </svg>

                                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-suit-heart-fill share1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                    </svg>
                                   </div>
                                    <h2 className="card-title1">Rs: 7500/-</h2>
                                </div>
                            
                                <div>
                                   <p className="card-text">5 Bds - 6 Ba - 10 Marla</p>
                                    <p className="card-text">OPF HOUSEING SOCIETY LHR 10 MARLA NEWLY JOUSE FOR SALE</p>
                                </div>

                                <div>
                                    <p className="card-text">OPF Housing Scheme, Lahore, Punjab</p>
                                  <p className="card-text">Oct 25</p>  
                                </div>   
                                </span>
                            </div>
                        </Card.Body>
                      </Card>

                      <Card className="cardcont3">
                        <Card.Body>
                          <h2 className="sell">Seller description</h2>
                          
                          <div className="detail">
                            <Image src={Card1} className="round" roundedCircle /> 
                            <div className="center">
                             <ul>
                                <li><p>Zameen - Central</p></li>
                                <li><p>Member since May 2020</p></li>
                              </ul> 
                            </div> 

                            <div className="left">
                              <button className="btn">
                                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="chat">
                            <button className="btnchat">Chat with Seller</button>
                          </div>
                        </Card.Body>
                      </Card>
                      
                      <Card className="cardcont4">
                        <Card.Body>
                          <h2 className="sell">Posted in</h2>
                          <p>Canal Garden, Lahore, Punjab</p>
                          <div className="mapimgdiv">
                            <Image className="mapimg" src={map} thumbnail />
                          </div>
                        </Card.Body>
                      </Card>
                    
                      

                  </Col>                                                                  
                </Row>
            </Container>
       )
    }
}
export default ProductDetail;