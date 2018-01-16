import React from 'react';


class HogCardContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      showView: false,
    }
}

handleClick = () => {
  console.log('incide the handleClick')
  this.setState({
    showView: !this.state.showView
  })
}

  render() {
    return (
      <div className="ui eight wide column">
        {this.state.showView ? <ShowHogCard handleClick={this.handleClick} hog={this.props.hog}/> : <HogCard handleClick={this.handleClick} hog={this.props.hog} />}
      </div>
    )
  }
}


const HogCard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
      </div>
      <div className="content">
        <a className="header" onClick={props.handleClick}>{props.hog.name}</a>
      </div>
    </div>
  )
}

const ShowHogCard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
      </div>
      <div className="content">
        <a className="header" onClick={props.handleClick}>{props.hog.name}</a>
      </div>
      <div className="description">
        <label>Specialty</label>
        <br></br>
        {props.hog.specialty}
      </div>
      <div className="extra content">
        <p>{props.hog.greased ? "Greased" : "Ungreased"}</p>
      </div>
    </div>
  )
}

export default HogCardContainer;
