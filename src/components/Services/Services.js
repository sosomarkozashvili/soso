import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
function Services () {
    return (
     <div className="Services">
          <div className="servicesh1">
                <h1>SERVICES</h1>
              <div className="h1border">
            
              </div>
          </div>

       <Container className="card1" fluid>
          
               <Card className="card2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp" />
                         <Card.Body>
                        <Card.Title>Preconstruction <br></br> Planning</Card.Title>
                                <Card.Text>
                               I'm a paragraph. Click here to add <br></br> your own text and edit me. It’s easy. <br></br> Just click “Edit Text” or double click <br></br> me to add your own content and <br></br> make changes to the font.
                                </Card.Text>
                        </Card.Body>
               </Card>
            
               <Card className="card2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://static.wixstatic.com/media/b31d0e84cb714761b2b1f06c305023c7.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01/b31d0e84cb714761b2b1f06c305023c7.webp" />
                         <Card.Body>
                        <Card.Title>Architectural <br></br> Modelling</Card.Title>
                                <Card.Text>
                               I'm a paragraph. Click here to add <br></br> your own text and edit me. It’s easy. <br></br> Just click “Edit Text” or double click <br></br> me to add your own content and <br></br> make changes to the font.
                                </Card.Text>
                        </Card.Body>
               </Card>
            
               <Card className="card2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://static.wixstatic.com/media/9e456adff0ee4a2c847cfd67a62454a3.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01/9e456adff0ee4a2c847cfd67a62454a3.webp" />
                         <Card.Body>
                        <Card.Title>Construction <br></br> Management</Card.Title>
                                <Card.Text>
                               I'm a paragraph. Click here to add <br></br> your own text and edit me. It’s easy. <br></br> Just click “Edit Text” or double click <br></br> me to add your own content and <br></br> make changes to the font.
                                </Card.Text>
                        </Card.Body>
               </Card>
          
       </Container>   
    </div>

    )
}

export default Services;


