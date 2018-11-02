import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button/Button'


class CharacterView extends Component {
  state = {
    character: null,
    loading: true,
    id: this.props.match.params.id,
  };

  componentWillMount() {
    axios.get(`/api/character/${this.state.id}`)
      .then(res => {
        let character = res.data[0];
        this.setState({ character: character, loading: false })
      })
      .catch(err => {
        console.warn(err);
      })
  }

  render() {
    const { character, loading } = this.state;
    let content;
    if (loading) {
      content = <p className="loading">Loading</p>;
    } else {
      content = (
        <div className="character-view">
        <div className="character-content-header">
          <span className="content-names">
          <h1 className="char-name">{ character.name }</h1>
          <h2 className="char-class-race">{ character.race.name } { character.dndClass.name }</h2>
          <div className="content title-content">
            <h3 className="char-level">Level { character.level }</h3>
          </div>
          </span>
          <span className="content-images">
          <img className="display-img" src={require(`../../images/race-images/${character.raceId}.jpeg`)} alt="race img" />
          <img className="display-img" src={require(`../../images/class-images/${character.classId}.jpeg`)} alt="class img" />
          </span>
        </div>
        <hr/>
        <div className="content-details">
          <span className="content-abilities"> 
            <div className="attr"><b>STR</b><br/>{character.str}</div>
            <div className="attr"><b>DEX</b><br/>{character.dex}</div>
            <div className="attr"><b>CON</b><br/>{character.con}</div>
            <div className="attr"><b>INT</b><br/>{character.int}</div>
            <div className="attr"><b>WIS</b><br/>{character.wis}</div>
            <div className="attr"><b>CHA</b><br/>{character.cha}</div>
          </span>
          <hr/>
          </div>
        </div>
      )
    }

    return (
      <div className="dashboard-container">
        <div className="character-view">
          <span className="character-view-header">
            <Link className="dash-link" to="/dashboard">
              <Button className="new-char-button" color="primary" variant="contained">&larr; Back to Dashboard</Button></Link>
          </span>
            <div className="character-content">
              { content }
            </div>
        </div>
      </div>
    );
  }
}

export default CharacterView;
