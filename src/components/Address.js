// Component Code Goes Here

import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="address">
        {this.props.street}, {this.props.city}
      </div>
    )
  }
}

export default Address;
