import React from 'react';
import { Component } from 'react';
import { Navbar} from 'react-bootstrap';

class Navbarmain extends Component {
    render() {
        return(
          <Navbar style={{backgroundColor: "beige"}}>
            <div className="container">
            <Navbar.Brand href="#home">VILLAGE TAKIES</Navbar.Brand>
            </div>
					</Navbar>
          
        )
    }
}

export default Navbarmain;