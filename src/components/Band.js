import React, { Component } from 'react';



class Band extends Component {

  handleOnClick = () => {
    console.log(this.props.id)
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.props.handleOnClick}>
          DELETE
        </button>
      </div>
    );
  }
};

export default Band;
