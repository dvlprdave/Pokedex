import React, { Component } from 'react';
import './Pokedex.css'
import PokeCard from './Pokecard';

class Pokedex extends Component {
  render() {
    return (
      <div className='Pokedex'>
        <h1>Pokedex!</h1>
        <p>Total Experience{this.props.exp}</p>
        <p>{this.props.isWinner ? 'WINNER' : 'LOSER'}</p>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex