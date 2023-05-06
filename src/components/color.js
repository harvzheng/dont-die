import React, { Component } from 'react';

class ColorChanger extends Component {
  constructor(props) {
    super(props);
    console.log(props.color1)
    this.state = {
      fontColor: props.color2,
      bgColor: props.color1
    };
  }

  handleClick = () => {
    const newFontColor = this.state.fontColor === this.props.color2 ?  this.props.color2 : 'black';
    const newBgColor = this.state.bgColor ===  this.props.color1 ? this.props.color1 : 'white';
    this.setState({ fontColor: newFontColor, bgColor: newBgColor });

    document.body.style.backgroundColor = newBgColor;
    document.body.style.color = newFontColor;
  }

  render() {
    const { fontColor, bgColor } = this.state;
    console.log(this.props)
    return (
      <div
        className={"color-chooser"}
        onClick={this.handleClick}
        style={{backgroundColor: this.props.color1}}
      >
      </div>
    );
  }
}

export default ColorChanger;