import React from 'react'; 
import Header from './Header';
import Footer1 from './Footer';
import Main from './Live';
import MegaDrop from './Mega';
import AllCard from './AllCard'
import Playstore from './Playstopre'




class Home extends React.Component{
    render(){
        return(
            <div> 
              <Header/>
              <Footer1/>
              <Main/>
              <MegaDrop/>
              <AllCard/>
              <Playstore/>
              
            </div>
       )
    }
}
export default Home;