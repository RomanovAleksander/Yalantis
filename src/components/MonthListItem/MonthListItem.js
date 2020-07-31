import React from 'react';
import './monthListItem.css';

class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }

  componentDidMount() {
    const { count } = this.props;

    if (count >= 11) {
      this.setState({ color: 'darkred' })
    } else if (count < 11 && count >= 7) {
      this.setState({ color: 'darkgreen' })
    } else if (count < 7 && count >= 3) {
      this.setState({ color: 'darkblue' })
    } else if (count < 3) {
      this.setState({ color: 'grey' })
    }
  }

  changeFilter = () => {
    this.props.changeFilter();
  };

  render() {
    const {name, id, filter} = this.props;
    const shadowStyle = `0 0 5px white, 0 0 10px white, 0 0 15px ${this.state.color}, 0 0 20px ${this.state.color}, 0 0 25px ${this.state.color}, 0 0 30px ${this.state.color}, 0 0 35px ${this.state.color}`;
    const isActive = id === filter ? {
      boxShadow: shadowStyle,
      textShadow: shadowStyle,
      transitionProperty: 'all',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease'
    } : {};

    return (
      <div className={`month ${this.state.color}`}
           onMouseOver={this.changeFilter}
           style={isActive}
           >
        {name}
      </div>
    )
  }
}

export default Month;
