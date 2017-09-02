import React, { Component } from 'react';


class MsgBox extends Component {

  render() {
    return(
      <div className="msg-container" style={{display: this.props.display}}>
        <div className="msg-box">
          Book has been added To: <strong><span>{this.props.status}</span></strong>!
        </div>
      </div>
    )
  }
}

export default MsgBox
