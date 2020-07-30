import React from "react";
import "./monthListItem.css";

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
      this.setState({ color: 'red' })
    } else if (count < 11 && count >= 7) {
      this.setState({ color: 'green' })
    } else if (count < 7 && count >= 3) {
      this.setState({ color: 'blue' })
    } else if (count < 3) {
      this.setState({ color: 'grey' })
    }
    console.log(this.state.color)
  }

  render() {
    const {name, count, changeFilter} = this.props;

    return (
      <div className={`user ${this.state.color}`} onMouseOver={changeFilter}>
        {name}, {count}
      </div>
    )
  }
}

export default Month;
