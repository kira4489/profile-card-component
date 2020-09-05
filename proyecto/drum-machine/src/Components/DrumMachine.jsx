import React, { Component } from 'react'
import DrumAudio from "./DrumAudio"
import Drum from "./Drum"
export default class DrumMachine extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "press a key to make a sound"
        }
    }
    handleText = (text) =>{
        this.setState ({
           text 
        })
    }
    render() {
        return (
            <div id="drum-machine">
               {/* <DrumAudio/> */}
                <h1 id={this.state.text}></h1>
                <div className="grid">
                    {DrumAudio.map(item =>(
                     <Drum
                     id={item.id}
                     key={item.key}
                     keyBoard={item.keyboard}
                     url={item.url}
                     handleText={this.handleText}
                     />
                     ))}
                </div>
            </div>
        )
    }
}


