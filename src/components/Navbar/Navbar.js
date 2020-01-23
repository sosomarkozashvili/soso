import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Navbar () {
    return (
        <Container className="nav15" fluid>
            <Row>
                <Col className="logo1" md={3}>
                    <div>
                        <img src="https://static.wixstatic.com/media/c19c76_e1ee443d4c5e4e3197a25eec7a0a97e5.png/v1/fill/w_47,h_49,al_c,q_85,usm_0.66_1.00_0.01/c19c76_e1ee443d4c5e4e3197a25eec7a0a97e5.webp">
                        </img>
                    </div>
                    <div className="text1">
                        <h1>SPHERE</h1>
                        <h2>CONSTRUCTIONS</h2>
                    </div>
                </Col>
                <Col className="navtext" md={9}>
                    <ul>
                        <li className="demo" onClick="function()">HOME</li>
                        <li  onClick="myFunction()">SERVICES</li>
                        <li onClick="function()">ABOUT</li>
                        <li onClick="function()">PROJECTS</li>
                        <li onClick="function()">CONTACTS</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;


function myFunction() {
    document.getElementById("demo").style.color = "red";
  }