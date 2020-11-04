import React, {Component} from 'react';
import { Card, Button} from 'react-bootstrap';
import './CardSizing.css';

class CardSizing extends Component {
    render() {
        return(
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    
                                    <h1 className="card-title">{this.props.number}</h1>
                                    <p className="card-text">{this.props.maintext}</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4" style={{width: "300px"}}>
                                    
                                    <button className="card-button">{this.props.text}</button>
                                    <p className="card-text">{this.props.textpara}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSizing;