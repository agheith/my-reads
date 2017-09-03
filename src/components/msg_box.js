import React from 'react';

const MsgBox = (props) => (
    <div className="msg-container" style={{display: props.display}}>
      <div className="msg-box">
        Book has been added To: <strong><span>{props.status}</span></strong>!
      </div>
    </div>
)

export default MsgBox;
