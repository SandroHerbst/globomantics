import React, {Component} from 'react'
import './main-page.css'
import Header from './header'

class App extends Component {

//  constructor(props) {
//    super(props)
//    this.state = {};
//  }

  state = {}

  componentDidMount() {
    this.fetchHouses()
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(res => res.json())
    .then(allHouses => {
      this.allHouses = allHouses
      this.determineFeaturedHouse()
    })
  }

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length)
      const featuredHouse =  this.allHouses[randomIndex]
      this.setState({ featuredHouse })
    }
  }  

  render() {
    return (
      <div className='container'>
        <Header subtitle='Providing houses all over world'/>
      </div>
    );
  }
}

export default App;
