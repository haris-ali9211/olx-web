import React from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import Card from './ShopingCard'
import cardimg1 from '../images/pexels-cottonbro-5082554.jpg'
import cardimg2 from '../images/pexels-artem-beliaikin-2691478.jpg'
import cardimg3 from '../images/pexels-aldo-picaso-982104.jpg'
import cardimg4 from '../images/pexels-tyler-lastovich-699122.jpg'
import cardimg5 from '../images/pexels-lukas-942732.jpg'
import cardimg6 from '../images/pexels-jae-park-3802510.jpg'
import cardimg7 from '../images/pexels-lisa-fotios-1006293.jpg'
import cardimg8 from '../images/pexels-ylanite-koppens-776656.jpg'
import cardimg9 from '../images/pexels-karolina-grabowska-4226878.jpg'
import cardimg10 from '../images/pexels-jessica-lewis-1652405.jpg'
import cardimg11 from '../images/pexels-iconcom-226601.jpg'
import cardimg12 from '../images/pexels-pixabay-53581.jpg'
import imac1 from '../images/pexels-lee-campbell-115655 (1).jpg'
import imac2 from '../images/pexels-serpstat-572056.jpg'
import imac3 from '../images/pexels-jacqueline-kelly-322338.jpg'
import toycar1 from '../images/pexels-artem-beliaikin-2691481.jpg'
import toycar2 from '../images/pexels-artem-beliaikin-2691479.jpg'
import toycar3 from '../images/pexels-engin-akyurt-2767817.jpg'
import yellowcar1 from '../images/pexels-aldo-picaso-982104 (1).jpg'
import yellowcar2 from '../images/pexels-aldo-picaso-982102 (1).jpg'
import yellowcar3 from '../images/pexels-aldo-picaso-982093.jpg'
import iphone1 from '../images/pexels-mateusz-dach-1294886.jpg'
import iphone2 from '../images/pexels-tuur-tisseghem-818043.jpg'
import iphone3 from '../images/pexels-essow-kedelina-1042143.jpg'
import Peanut1 from '../images/pexels-karolina-grabowska-4202964.jpg'
import Peanut2 from '../images/pexels-engin-akyurt-5472169.jpg'
import Peanut3 from '../images/pexels-pixabay-209345.jpg'
import Aventador1 from '../images/pexels-jae-park-3802508.jpg'
import Aventador2 from '../images/pexels-jae-park-3802515.jpg'
import Aventador3 from '../images/pexels-jae-park-3802507.jpg'
import macbook1 from '../images/pexels-christina-morillo-1181288.jpg'
import macbook2 from '../images/pexels-luis-quintero-2148217.jpg'
import macbook3 from '../images/pexels-cottonbro-3584994.jpg'
import plant1 from '../images/pexels-ylanite-koppens-796620.jpg'
import plant2 from '../images/pexels-ylanite-koppens-1906439.jpg'
import plant3 from '../images/pexels-andreea-ch-1166641.jpg'
import goblet1 from '../images/pexels-karolina-grabowska-4226793.jpg'
import goblet2 from '../images/pexels-karolina-grabowska-4226879.jpg'
import goblet3 from '../images/pexels-karolina-grabowska-4226789.jpg'
import statue1 from '../images/pexels-judit-agusti-aranda-2362469.jpg'
import statue2 from '../images/pexels-artem-beliaikin-914194.jpg'
import statue3 from '../images/pexels-david-bartus-2873473.jpg'
import duck1 from '../images/pexels-armando-are-3759364.jpg'
import duck2 from '../images/pexels-quang-nguyen-vinh-2133193.jpg'
import duck3 from '../images/pexels-george-becker-122308.jpg'
import eagle1 from '../images/pexels-andreas-barth-1131774.jpg'
import eagle2 from '../images/pexels-pixabay-208939.jpg'
import eagle3 from '../images/pexels-brett-sayles-1268849.jpg'
import people1 from '../images/pexels-rfstudio-3819783.jpg'
import people2 from '../images/pexels-john-kwembe-3216991.jpg'
import people3 from '../images/pexels-vinicius-altava-2642465.jpg'
import people4 from '../images/pexels-rfstudio-3819597.jpg'
import people5 from '../images/pexels-vova-krasilnikov-2698844.jpg'
import people6 from '../images/pexels-roxanne-shewchuk-2405944.jpg'
import people7 from '../images/pexels-himesh-mehta-2856346.jpg'
import people8 from '../images/pexels-ike-louie-natividad-2709386.jpg'
import people9 from '../images/pexels-amine-msiouri-2097475.jpg'
import people10 from '../images/pexels-arianna-jadé-4006576.jpg'
import people11 from '../images/pexels-wallace-chuck-3018365.jpg'
import people12 from '../images/pexels-jack-sparrow-4046767.jpg'





class AllCard extends React.Component{
 render(){
        return(
          <Container>            
          <Row class="card" >               
          <Col sm={12} md={3} lg={3} ><Card selller="Oliver Jake" title="iMac Pro" src={cardimg1} src1={imac1} src2={imac2} src3={imac3} src4={people1} price="$1,000/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Jack Connor" title="Hot Wheels" src={cardimg2} src1={toycar1} src2={toycar2} src3={toycar3}src4={people2}  price="$400/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Harry Callum" title="PORSCHE BOXSTER" src={cardimg3} src1={yellowcar1} src2={yellowcar2} src3={yellowcar3} src4={people3} price="$33/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Jacob Jacob" title="iPhone 11" src={cardimg4} src1={iphone1} src2={iphone2} src3={iphone3} src4={people4} price="$999/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Charlie Kyle" title="Peanut" src={cardimg5} src1={Peanut1} src2={Peanut2} src3={Peanut3} src4={people5} price="$120/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Thomas Joe" title="Aventador" src={cardimg6} src1={Aventador1} src2={Aventador2} src3={Aventador3} src4={people6} price="$270,000/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="George Reece" title="MacBook Pro" src={cardimg7} src1={macbook1} src2={macbook2} src3={macbook3} src4={people7} price="$1,200/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Oscar Rhys" title="FEJKA" src={cardimg8} src1={plant1} src2={plant2} src3={plant3} src4={people8} price="$5.99/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="James Damian" title="Goblet" src={cardimg9} src1={goblet1} src2={goblet2} src3={goblet3} src4={people9} price="$600/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="William Charlie" title="Eskimo" src={cardimg10} src1={statue1} src2={statue2} src3={statue3} src4={people10} price="$395/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Noah James" title="Moby Ducky" src={cardimg11} src1={duck1} src2={duck2} src3={duck3} src4={people11} price="$20/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Liam John" title="Bald Eagle" src={cardimg12} src1={eagle1} src2={eagle2} src3={eagle3} src4={people12} price="$4,000/-"/></Col>   

          <Col sm={12} md={3} lg={3} ><Card selller="Oliver Jake" title="iMac Pro" src={cardimg1} src1={imac1} src2={imac2} src3={imac3} src4={people1} price="$1,000/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Jack Connor" title="Hot Wheels" src={cardimg2} src1={toycar1} src2={toycar2} src3={toycar3}src4={people2}  price="$400/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Harry Callum" title="PORSCHE BOXSTER" src={cardimg3} src1={yellowcar1} src2={yellowcar2} src3={yellowcar3} src4={people3} price="$33/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Jacob Jacob" title="iPhone 11" src={cardimg4} src1={iphone1} src2={iphone2} src3={iphone3} src4={people4} price="$999/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Charlie Kyle" title="Peanut" src={cardimg5} src1={Peanut1} src2={Peanut2} src3={Peanut3} src4={people5} price="$120/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Thomas Joe" title="Aventador" src={cardimg6} src1={Aventador1} src2={Aventador2} src3={Aventador3} src4={people6} price="$270,000/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="George Reece" title="MacBook Pro" src={cardimg7} src1={macbook1} src2={macbook2} src3={macbook3} src4={people7} price="$1,200/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Oscar Rhys" title="FEJKA" src={cardimg8} src1={plant1} src2={plant2} src3={plant3} src4={people8} price="$5.99/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="James Damian" title="Goblet" src={cardimg9} src1={goblet1} src2={goblet2} src3={goblet3} src4={people9} price="$600/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="William Charlie" title="Eskimo" src={cardimg10} src1={statue1} src2={statue2} src3={statue3} src4={people10} price="$395/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Noah James" title="Moby Ducky" src={cardimg11} src1={duck1} src2={duck2} src3={duck3} src4={people11} price="$20/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Liam John" title="Bald Eagle" src={cardimg12} src1={eagle1} src2={eagle2} src3={eagle3} src4={people12} price="$4,000/-"/></Col>   

          <Col sm={12} md={3} lg={3} ><Card selller="Oliver Jake" title="iMac Pro" src={cardimg1} src1={imac1} src2={imac2} src3={imac3} src4={people1} price="$1,000/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Jack Connor" title="Hot Wheels" src={cardimg2} src1={toycar1} src2={toycar2} src3={toycar3}src4={people2}  price="$400/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Harry Callum" title="PORSCHE BOXSTER" src={cardimg3} src1={yellowcar1} src2={yellowcar2} src3={yellowcar3} src4={people3} price="$33/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Jacob Jacob" title="iPhone 11" src={cardimg4} src1={iphone1} src2={iphone2} src3={iphone3} src4={people4} price="$999/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Charlie Kyle" title="Peanut" src={cardimg5} src1={Peanut1} src2={Peanut2} src3={Peanut3} src4={people5} price="$120/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Thomas Joe" title="Aventador" src={cardimg6} src1={Aventador1} src2={Aventador2} src3={Aventador3} src4={people6} price="$270,000/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="George Reece" title="MacBook Pro" src={cardimg7} src1={macbook1} src2={macbook2} src3={macbook3} src4={people7} price="$1,200/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Oscar Rhys" title="FEJKA" src={cardimg8} src1={plant1} src2={plant2} src3={plant3} src4={people8} price="$5.99/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="James Damian" title="Goblet" src={cardimg9} src1={goblet1} src2={goblet2} src3={goblet3} src4={people9} price="$600/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="William Charlie" title="Eskimo" src={cardimg10} src1={statue1} src2={statue2} src3={statue3} src4={people10} price="$395/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Noah James" title="Moby Ducky" src={cardimg11} src1={duck1} src2={duck2} src3={duck3} src4={people11} price="$20/-"/></Col>                                       
          <Col sm={12} md={3} lg={3} ><Card selller="Liam John" title="Bald Eagle" src={cardimg12} src1={eagle1} src2={eagle2} src3={eagle3} src4={people12} price="$4,000/-"/></Col>   

          </Row>
        </Container>
       )
    }
}
export default AllCard; 