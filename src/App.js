//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';




class App extends Component{

  constructor(){
    super();
    this.state = {
      countries : [],
      searchCountry : ' ',
    }
  }

  componentDidMount(){
    fetch('https://restcountries.com/v2/all')
    .then((data) => data.json())
    .then((data1) =>{
      this.setState(() => { return {countries : data1} },
       () => {console.log(data1)})
    })
  }




  onsearchChange = (event) => {
    console.log(event.target.value)
    const searchCountry = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchCountry}
    })
  }


  render(){


    const filterName = this.state.countries.filter((elememt) => {
       return elememt.name.toLocaleLowerCase().includes(this.state.searchCountry)
    })

  return (
    <div className="App">
      <input className = 'search-box'
      type = 'search'
      placeholder = 'search any country'
      onChange={this.onsearchChange}
      />

      {filterName.map((element) => {
        return <div key = {element.id}><h1>{element.name} <img src={element.flags.png} alt="Girl in a jacket" width="100" height="60"></img></h1></div>
      })}
    </div>
  );
}
}

export default App;
