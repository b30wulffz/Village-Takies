import React, {Component} from 'react';
import './Nextbutton.css';

class Nextbutton extends Component {
    render() {
        return(
            <div className="ButtonDiv">
                <button className='btn-1'><a href="/editor" style={{color:'white'}}>Next</a></button>
            </div>
        ); 
    }
}

export default Nextbutton;