import React, { Component } from 'react';


class MsgBox extends Component {

  render() {
    return(
      <div id="msg-popup-container" style={{display: this.props.display}}>
        <div id="msg-box">
          Book Added To: <strong><span id="msg-text">{this.props.text}</span></strong>!
        </div>
      </div>
    )
  }
}

export default MsgBox
