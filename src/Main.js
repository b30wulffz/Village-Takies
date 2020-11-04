import React, {Component} from 'react';
import Navbar from './Navbarmain';
import Centercards from './Centercards';

class Main extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <Centercards/>
            </div>
            
        )
    }
}

export default Main; 