import React, { Component } from 'react'
import Buttons from './Buttons';

export default class Cards extends Component {
    constructor(props){
    super(props);
    this.state = {
        // quoteText: "",
        // quoteAuthor: "",
        quotes: {},
        curColor: this.props.color,
        tweetUrl: "https://twitter.com/intent/tweet/?text="
      }
      
      
      //Bind Handles and Functions
      this.getNewQuote = this.getNewQuote.bind(this);
      // this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    componentDidMount() {
      this.getNewQuote();//llama la funcion al inciar la aplicacion para que me traiga todos los datos
    }
    
    //Get a quote and author from an API and set state
    getNewQuote(){
      const app = this;
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => response.json())
      .then((data) => {
        app.setState({
          quotes: data.quotes[Math.floor(Math.random() * data.quotes.length)]
          // quoteText: data.quotes.quote,
          // quoteAuthor: data.quotes.author,
        //   tweetUrl: "https://twitter.com/intent/tweet/?text=" + data.content.replace(/ /g, "+")
        });
      });
    }
    
    render() {
        return (
            <div className="card">
                  <h2>{this.state.quotes.quote}</h2>
                  <p>{this.state.quotes.author}</p>
                  <Buttons changecolor={this.props.changecolor} valor={this.getNewQuote}/>
              </div>
        )
    }
}
