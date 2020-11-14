import React, {useState, useEffect,state,uiConfig,componentDidMount} from 'react';
import { Navbar,Nav,Form,FormControl,Modal, Button, Card, Alert,Container ,Image } from 'react-bootstrap';
import Grouped from './Search';
import LogoOlx from '../images/Logotyp_OLX_.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import logo from '../images/Logotyp_OLX_.png'
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Signup from './Signup'




function Header(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const element = <FontAwesomeIcon icon={faSearch} />

 
 
  return(
    <div>
       <Navbar bg="light" expand="lg"className="navbar1">
           <Navbar.Brand href="#home">
      <img
        src={LogoOlx}
        width="45"
        height="25"
        className="d-inline-block align-top"
        alt="OLX logo"
        className="LogoOlx"
      />
    </Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" className="back">
            <Nav className="mr-auto ">
    
              <Nav.Link href="#link"><div><image src={LogoOlx} alt="" width="50"/></div></Nav.Link>
              <Nav.Link href="#home"><Grouped/></Nav.Link>
              <Nav.Link href="#home"> <Form inline className="baraSearch">
                
              <FormControl type="text" placeholder="Search" className="mr-sm-2 search2" />  
              <Nav.Link  className="searchIcon" href="#home"><FontAwesomeIcon className="icons inline" icon={faSearch}/></Nav.Link>
              
            </Form> </Nav.Link> 
        
            </Nav>
            <Form inline className="baraSearch justify-content-md-center">
              
                <Button onClick={handleShow} className="leftbtn1" variant="outline-success">LOGIN</Button>
              
              <Button className="leftbtn2" variant="outline-success">+SELL</Button>
            </Form>          
          </Navbar.Collapse>
        </Navbar>

        

        <Modal show={show} >
        <Modal.Body>
            <Signup />
            <button className="btn " onClick={handleClose}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
            </button>
        </Modal.Body>
      </Modal>
    </div>
  )
} 

export default Header;

