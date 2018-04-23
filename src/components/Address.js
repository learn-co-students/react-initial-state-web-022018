// Component Code Goes Here
// the default state of this component is to be in the off state
import React from 'react';
class Address extends React.Component {
  constructor(props){
    super(props);
    this.state = { fullAddress: `${props.street},${props.city}`}
  }
  render(){
    return(
      <div className="address">
        {/* { this.state.fullAddress}  below is better than this */}
        {this.props.street}, {this.props.city}
      </div>
    );
  }
}//class
export default Address;
