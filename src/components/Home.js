import React from 'react';
import { API_KEY } from './api-key'
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q='pig'&limit=25`

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      pigGif: null
    }
  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(gifs => {
      const randomGif = gifs.data[Math.floor(Math.random() * gifs.data.length)]
      this.setState({pigGif: randomGif}, () => console.log(this.state))
    })
  }

  render() {
    const { pigGif } = this.state
    return (
      <div>
        <h1>Hog Heaven</h1>
        <div>
        {pigGif ? <iframe src={pigGif.embed_url} height={pigGif.images["480w_still"].height} width={pigGif.images["480w_still"].width}/> : '...loading'}
        </div>

      </div>
    )
  }
}

export default Home
