import './app.css';
import React from 'react';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      searchfield: ""
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  async componentDidMount() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=60")
    const entries = await data.json()
    return this.setState({ pokemon: entries.results })
  }
  render() {
    const { pokemon, searchfield } = this.state
    const filteredPokemon = pokemon.filter(singlePokemon => {
      return singlePokemon.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className='tc' >
        <h1 className='f1'>Pokemons</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList pokemon={filteredPokemon} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;