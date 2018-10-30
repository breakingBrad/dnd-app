import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const WizardStart = () => {
  return (
    <div className="step-container">
      <div className="wizard-start-container">
        <div className="wizard-nav-container">
          <span className="wizard-nav-prev" />
          <span className="wizard-nav-next">
            <Button
              variant="contained"
              raised
              component={Link}
              to="/character-wizard/1"
            >
              {' '}
              &rarr;
            </Button>
          </span>
        </div>
        <h1>Creating your Character</h1>
        <p>
          Welcome! Your first step in playing an adventure in the Dungeons &
          Dragons game is to imagine and create a character of your own. Your
          character is a combination of game statistics, roleplaying hooks, and
          your imagination.
        </p>
        <p>
          When you continue on from here, you will choose a race (such as human
          or halfling) and a class (such as fighter or wizard). You also roll to
          determine your character's ability scores, select spells, and choose
          equipment, before inventing the personality, appearance, and backstory
          of your character.
        </p>
      </div>
    </div>
  );
};

export default WizardStart;
