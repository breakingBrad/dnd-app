import React from 'react';
import Button from '../Button/Button';

const CharacterCard= (props) => {
    const {
      name,
      dndClass,
      race,
      level,
      classId,
      viewCharacter,
      removeCharacter
    } = props;
    
    return (
      <li className="character-card">
        <div>
        <img className="display-img" src={require(`../../images/class-images/${classId ? classId : 'placeholder'}.jpeg`)} alt="class img" />
        </div>
        <h2>{ name }</h2> 
        <div className="content title-content">
          Level { level }
        </div>
        <div className="content">
          <b>Race:</b> { race.name } <br />
          <b>Class:</b> { dndClass.name }
        </div>
        <div className="character-controls">
          <Button className="character-control-button" color="primary" variant="contained" onClick={viewCharacter}>View</Button>
          <Button className="character-control-button" color="secondary" variant="contained" onClick={removeCharacter}>Remove</Button>
          {/* <Button className="raised" onClick={editItem}>Edit</Button>
          <Button className="warn raised" onClick={removeItem}>Remove</Button> */}
        </div>
      </li>
    );
};

export default CharacterCard;