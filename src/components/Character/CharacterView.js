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
        <div>
          {/* <h2>Character View Coming Soon!!</h2> */}
          <img className="construction" src={require(`../../images/under-construction.gif`)} alt="coming soon!" />
        </div>
      )
    }

    return (
      <div className="dashboard-container">
        <div className="character-view">
          <span className="character-view-header">
            <Link className="dash-link" to="/dashboard">
              <Button className="new-char-button" color="primary" variant="contained">&larr; Back to Dashboard</Button></Link>
              <h2>Character View Coming Soon!!</h2>
          </span>
            {content}
        </div>
      </div>
    );
  }
}

export default CharacterView;
