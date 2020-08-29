import React, { Component } from 'react'
import "../Components/test.css"

let marked = require("marked")

export default class markdown extends Component {
state ={
markdown: ""
}

updateMarkdown = function (markdown){
this.setState({markdown})
  }

render() {
      let {markdown} = this.state;
          return (
            <div>
            <h1>Convert your markdown</h1>
            <div className="row">
                <div className="col-12">
                    <h5>Enter your markdown</h5>
                  <textarea className="form-control" id="editor" value={markdown} onChange={(event=>this.updateMarkdown(event.target.value))}/>
                </div>
              <div className="col-12 preview" id="preview">
                  <h5>See the result</h5>
               <div dangerouslySetInnerHTML ={{__html: marked(markdown)}}>
                   </div>
                  </div>  
                  </div>
            </div>
        )
    }
}
