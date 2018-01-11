import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsBrowser from './HogsBrowser';
import Filter from './Filter'


class App extends Component {
  constructor() {
    super();

  this.state = {
    hogs: hogs,
    greasedHogs: [],
    greased: false,
    filter: 'All',
    filteredHogs: [],
  }
}

greasedHogs = () => {
  const newHogs = this.state.hogs.filter(hog => hog.greased === true)
  this.setState({
    greasedHogs: newHogs
  })
};

filterHogs() {
  let filteredPigs = this.state.hogs;
  if (this.state.greased) {
    filteredPigs = this.state.greasedHogs;
  }
  return filteredPigs;
}

handleGreasedFilter = () => {
  this.setState({
    greased: !this.state.greased,
  }, () => this.greasedHogs())
}

sortHogsByWeight = () => {
  const sortedByWeight = [...this.state.hogs];
  sortedByWeight.sort(function(a,b){
    const firstValue = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
    const secondValue = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];

    return secondValue - firstValue;
  })
  return sortedByWeight
}


sortHogsByName = () => {
  const sortedByName = [...this.state.hogs];
  sortedByName.sort(function(a,b){
    const firstValue = a.name.split(" ").join('').toUpperCase();
    const secondValue = b.name.split(" ").join('').toUpperCase();
    if (firstValue < secondValue) {
       return -1;
     }
     if (firstValue > secondValue) {
       return 1;
     }
    return 0;
  })
  return sortedByName
}

sortHogs = () => {
  let sortedHogs = this.state.hogs
  switch (this.state.filter) {
    case "Name":
      sortedHogs = this.sortHogsByName();
      break;
    case "Weight":
      sortedHogs = this.sortHogsByWeight();
      break;
    }
  this.setState({
    filteredHogs: sortedHogs
  }, () => console.log(this.state))
}

handleFilter = (e) => {
  this.setState({
    filter: e.target.value
  }, () => this.sortHogs())
}

  render() {
    // console.log(this.state.hogs)
    const {hogs, greased} = this.state;
    return (
      <div className="App">
        < Nav />
        < Filter
          greased={greased}
          handleGreasedFilter={this.handleGreasedFilter}
          handleFilter={this.handleFilter}
        />
      <HogsBrowser hogs={this.filterHogs()} />
      </div>
    )
  }
}

export default App;
