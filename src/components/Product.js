import React from 'react'; 
import Header from './Header';
import Footer1 from './Footer';
import ProductDetail from './ProductDetail';
import Playstore from './Playstopre'




const Product = (props) => {
  return (
    <div> 
              <Header/>
              <Footer1/>  
              <ProductDetail name1={props.location.aboutProps.price} 
              img1={props.location.aboutProps.img1} img2={props.location.aboutProps.img2} 
              img3={props.location.aboutProps.img3} img4={props.location.aboutProps.img4}
              selllerid={props.location.aboutProps.selllerid}/>   
              <Playstore/>     
            </div>
  );
}
export default Product;