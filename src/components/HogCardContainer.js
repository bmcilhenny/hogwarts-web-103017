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
  // const imagePath = `../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`;
  // console.log(typeof imagePath)
  // console.log(`../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)
  return (
    <div onClick={props.handleClick}>
      <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
      <h3>{props.hog.name}</h3>
    </div>
  )
}

const ShowHogCard = (props) => {
  // const imagePath = `../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`;
  return (
    <div onClick={props.handleClick} >
      <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
      <h3>{props.hog.name}</h3>
      <h4>{props.hog.specialty}</h4>
      <h4>{props.hog.greased ? "Greased" : "Ungreased"}</h4>
    </div>
  )
}

export default HogCardContainer;
