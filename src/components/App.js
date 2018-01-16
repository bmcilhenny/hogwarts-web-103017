import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsBrowser from './HogsBrowser';
import Filter from './Filter'
import { Route} from 'react-router-dom'
import { Navbar } from './Navbar'
import Home from  './Home'
import Login from './Login'

class App extends Component {
  constructor() {
    super();

  this.state = {
    hogs: hogs,
    greased: false,
    filter: 'All',
    filteredHogs: [],
    pigGif: null
  }
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

  if (this.state.filter === 'Name') {
      sortedHogs = this.sortHogsByName()
    } else if (this.state.filter === 'Weight') {
      sortedHogs = this.sortHogsByWeight()
  }

  if (this.state.greased) {
    sortedHogs = sortedHogs.filter(hog => hog.greased === true)
  }

  this.setState({
    filteredHogs: sortedHogs
  })
}

handleGreasedFilter = () => {
  console.log('hey')
  this.setState({
    greased: !this.state.greased,
  }, () => this.sortHogs())
}


handleFilter = (e) => {
  this.setState({
    filter: e.target.value
  }, () => this.sortHogs())
}

  render() {
    const {hogs, greased} = this.state;
    return (
      <div className="App">
        < Nav />
        < Navbar />
        < Route exact path="/" render={ () => <Home pigGif={this.state.pigGif}/>} />
        < Route exact path="/login" render= {() => <Login /> } />
        < Route exact path="/hogs" render={() => {
          return (
            <div>
              <Filter
                greased={greased}
                handleGreasedFilter={this.handleGreasedFilter}
                handleFilter={this.handleFilter}
              />
              <br></br>
                <HogsBrowser hogs={this.state.filteredHogs.length ? this.state.filteredHogs: this.state.hogs}
                />
          </div>
          )}
        }
        />

        <br></br>

      </div>
    )
  }
}

export default App;
