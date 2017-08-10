import React, { Component } from 'react';
import Destination from './Destination';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idList: [],
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(id){
    let newIdList = this.state.idList.concat(id)
    this.setState({idList: newIdList})
  }

  render() {
    let destinations = this.props.data.places.map(destination => {
      let className;
      // this.state.idList.map(id => {
      //   if(destination.id === id){
      //     className = "crossedOut";
      //   }
      // })
      if (this.state.idList.includes(destination.id)){
        className = "crossedOut";
      }
      return(
        <Destination
          key={destination.id}
          id={destination.id}
          name={destination.name}
          setSelected={this.changeState}
          strike={className}
        />
      )
    })
    return (
      <ul>
        {destinations}
      </ul>
    );
  }
}

export default Wishlist;
