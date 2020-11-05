import React, {Component} from 'react';
import './Editor.css';

class Editor extends Component {
    render() {
        return(
            <div className="Container">
        <div className="row" style={{marginLeft: '180px'}}>
          {/*Base Video*/}
          
          <div className="base-video-container">
                <div className="video-container">
                  <h2>Text 1 :Our Services</h2>
                  <div className="video-main"><h2>Video</h2></div>
                  <h1>Base Video from Screen</h1>
                  <h3>Text 2 : Explainer Videos</h3>
                </div>
            </div>
          
           {/*Video Properties*/}

           <div className="video-properties-container">
                <div className="properties-container">
                 <button className="head-button">Video Properties</button>
                 <button className="button">Trim</button>
                 <button className="button">Duplicate</button>
                 <button className="button">Delete</button>
                 <button className="button">Resize</button>

                 <button className="head-button">Add Text</button>
                 
                 <button className="head-button">Add Image/Video</button>

                </div>
            </div>

          {/*Middle Elements*/}

          <div className="middle-elements">

              <div className="arrow-right"></div>

              <div className="straight-line"></div>

              <div className="video-bar">
                <div className="video-played-bar"></div>
              </div>

              <button className="output-btn">Render Output</button>
          </div>

          {/*TimeLines */}

          <div className="time-lines-container">
            <div className="time-lines">
              <h2>TimeLines</h2>
              <div className="time-line-bar-container">
                <div className="time-line-bar"></div>
                <div></div>
              </div>
            </div>
            <div className="time-line-main">
              
            <button className="head-button-1">Video Layer</button>
            <button className="button-1">  Scene1   </button>
            <button className="button-1">Scene2</button>
            <button className="button-1">Scene3</button>
            <button className="button-1">Add Scene</button>

            <button className="head-button-1">VO Layer</button>
            <button className="button-1">Chosen VO Populates Here</button> 
            <button className="button-1">Add VoiceOver</button><br />

            <button className="head-button-1">Audio Layer</button>
            <button className="button-1">Audio1</button>
            <button className="button-1">Audio2</button>
            <button className="button-1">Add Audio</button>

            

          </div>

          </div>
            

        </div>

      </div>
        )
    }
}

export default Editor;