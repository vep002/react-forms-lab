import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ""
    };
  }

  changeTwitterMessage = (e) => {
    let newMessage = e.target.value
    this.setState({
      textInput: newMessage
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeTwitterMessage} value={this.state.textInput} />
      </div>
    );
  }
}

export default TwitterMessage;
