import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
handleChange = e => {
  this.setState({ searchField: e.target.value })
}

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
//console.log(filteredMonster)
    return (
      <div className="App">
        <h1> Monster Rolodex</h1>
        <input type='search' placeholder='Search Monster' 
      onChange={e => this.setState({searchField: e.target.value})}></input>

<SearchBox placeholder='Search Monster'
        handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonster}> 

        </CardList>
       
      </div>
    );
  }
}


export default App;

