import React from 'react';
import Mainimage from '../images/hero_bg_pk.jpg';



class Main extends React.Component{
    render(){
        return(
          <div>
            <img src={Mainimage} className="img-fluid" alt="Responsive image" />
        </div>
            
        )
    }
}
export default Main;