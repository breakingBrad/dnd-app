import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CharacterView extends Component {
  state = {
    character: null,
    loading: true,
    message: '',
  };

  componentWillMount() {
    axios
      .get(`/character/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          item: response.data,
        });
      })
      .catch(err => {
        console.warn(err.response.data.message);
        this.setState({
          message: err.response.data.message,
        });
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { character, loading, message } = this.state;

    let content;

    if (loading) {
      content = <p className="loading">Loading</p>;
    } else if (message) {
      content = <p className="error-message">{message}</p>;
    } else {
      content = (
        <div className="character">
          <h2>{character.name}</h2>
          <p className="content">{character.name}</p>
          <p><b>Race:</b> {character.race.name}</p>
          <p><b>Class:</b> {character.class.name}</p>
        </div>
      );
    }

    return (
      <div className="item-details-component">
        <Link to="/">&lt;-- Back to Dashboard</Link>
        {content}
      </div>
    );
  }
}

export default CharacterView;
