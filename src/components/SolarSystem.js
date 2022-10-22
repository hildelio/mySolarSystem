import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="planet-card-content">
          {
            planets && planets.map((plutao) => (<PlanetCard
              key={ plutao.name }
              planetName={ plutao.name }
              planetImage={ plutao.image }
            />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
