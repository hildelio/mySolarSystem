import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets && planets.map((plutao) => (<PlanetCard
            key={ plutao.name }
            planetName={ plutao.name }
            planetImage={ plutao.image }
          />))
        }
      </div>
    );
  }
}

export default SolarSystem;
