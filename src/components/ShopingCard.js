import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



class Card extends React.Component{
    render(){      
        return(
        <Link to={{pathname:'/product',
        aboutProps:{
          price:this.props.price,
          img1:this.props.src1,
          img2:this.props.src2,
          img3:this.props.src3,
          img4:this.props.src4,
          selllerid:this.props.selller
        }
        }} className="link" >
           <div className="shopCard">
              <div className="card ">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-suit-heart-fill heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
              <img className="card-img-top card-img-size cardimg" src={this.props.src} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title name">{this.props.title}</h5>
                <p className="card-text name1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h6 className="card-title">{this.props.price}</h6>
              </div>
            </div>
           </div>
        </Link>
       )
    }
}
export default Card;