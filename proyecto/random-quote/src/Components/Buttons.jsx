import React, { Component } from 'react'

export default class Buttons extends Component {
   constructor(props){
       super(props);
       this.createcolor = this.createcolor.bind(this)
   }
  
    createcolor(){
        this.props.changecolor()
        this.props.valor()
        
    }

render() {
        return (
          <div id="quote-box" className="buttons">
            <button onClick={() => this.createcolor()}
            id="new-quote">Get New Quote</button>

            <a href={ "this.state.tweetUrl" } target="_blank noopener noreferrer" id="tweet-quote"><i class="fab fa-twitter"></i> Tweet Quote</a>
          </div>
        );
      }
    }
