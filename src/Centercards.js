import React, {Component} from 'react';
import CardSizing from './CardSizing';
import Nextbutton from './Nextbutton';

class Centercards extends Component {
    render()
    {
        return(
            <div className="container" style={{padding: '161px 100px'}}>
                <div className = "row">
                <CardSizing text='Add your Script' textpara='You can add the Script Here!'
                    maintext ='Go here to start your editing By adding Script.' number='1' />
                <CardSizing text='Voiceover Preference' textpara='Voiceover Preference ..........'
                    maintext ='Go here to choose voice over preference.' number='2'/>
                <CardSizing text='Choose VO Language' textpara='Select the VO Language Here!!'
                    maintext ='Go here to start your VO Language.' number='3'/>
                </div>

                <Nextbutton/>
            </div>
                      
        )
    }
}

export default Centercards;
