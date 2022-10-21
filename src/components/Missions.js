import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title />
        {
          missions && missions.map((allMissions) => (<MissionCard
            key={ allMissions.name }
            name={ allMissions.name }
            year={ allMissions.year }
            country={ allMissions.country }
            destination={ allMissions.destination }
          />))
        }
      </div>
    );
  }
}

export default Missions;
