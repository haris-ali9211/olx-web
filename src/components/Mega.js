import React from 'react';
import { Container,Col,Row} from 'react-bootstrap';



class MegaDrop extends React.Component{
    render(){
        return(
            <Container>            
            <Row >               
              <Col className="recommendations"><p>Fresh recommendations</p></Col>
            </Row>
          </Container>
       )
    }
}
export default MegaDrop;