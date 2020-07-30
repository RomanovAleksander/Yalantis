import React from 'react';
import List from '../List';
import Api from '../../api/api';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      months: [
        { id: 0, name: "January", count: 0 },
        { id: 1, name: "February", count: 0 },
        { id: 2, name: "March", count: 0 },
        { id: 3, name: "April", count: 0 },
        { id: 4, name: "May", count: 0 },
        { id: 5, name: "June", count: 0 },
        { id: 6, name: "July", count: 0 },
        { id: 7, name: "August", count: 0 },
        { id: 8, name: "September", count: 0 },
        { id: 9, name: "October", count: 0 },
        { id: 10, name: "November", count: 0 },
        { id: 11, name: "December", count: 0 }
      ],
      filter: null,
      loaded: false,
      err: {}
    };
  }

  componentDidMount() {
    Api.get()
      .then((data) => {
        this.setState({users: data});
        data.forEach((user) => {
          const dob = new Date(user.dob);

          this.state.months.forEach((month) => {
            if (month.id === Number(dob.getMonth())) {
              this.updateMonthsArray(month)
            }
          })
        });
        this.setState({loaded: true});
      })
      .catch((err) => {
        this.setState({err: err})
      })
  }

  updateMonthsArray = (month) => {
    const monthIndex = this.state.months.findIndex(item => item.id === month.id);
    const updateMonth = (item, count) => {
      return {
        ...item,
        count: item.count + count
      }
    };

    this.setState(({ months }) => ({
      months: [...months.slice(0, monthIndex),  updateMonth(months[monthIndex], 1), ...months.slice(monthIndex + 1)]
    }))
  };

  onFilterChange = (month) => {
    this.setState({ filter: month })
  };

  render() {
    const { months, users, loaded, filter } = this.state;
    const userMonthOfBirth = (user) => Number(new Date(user.dob).getMonth());
    const visibleUsers = users.filter((item) => userMonthOfBirth(item) === filter);

    return (
      <div className="wrapper">
        {
          loaded && <List items={months}
                          changeFilter={this.onFilterChange}
                          filter={filter}
                          isUsers={false} />
        }
        {
          filter === null ? <div className='hint'>Select month</div> :
          <List items={visibleUsers}
                isUsers={true} />
        }
      </div>
    );
  }
}
