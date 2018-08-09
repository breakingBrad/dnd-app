const axios = require('axios');
const _ = require('lodash');

module.exports = {
  listRaces: (req, res, next) => {
    console.log('Retrieving Races')
    axios.get('http://www.dnd5eapi.co/api/races/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  getRace: (req, res, next) => {
    const { raceId } = req.params;
    console.log(`Retrieving Race Id: ${raceId}`)
    axios.get(`http://www.dnd5eapi.co/api/races/${raceId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  listClasses: (req, res, next) => {
    console.log('Retrieving Classes')
    axios.get('http://www.dnd5eapi.co/api/classes/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  getClass: (req, res, next) => {
    const { classId } = req.params;
    console.log(`Retrieving Class Id: ${classId}`)
    axios.get(`http://www.dnd5eapi.co/api/classes/${classId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  listProficiencies: (req, res, next) => {
    console.log('Retrieving Proficiencies')
    axios.get('http://www.dnd5eapi.co/api/proficiencies/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  listSkills: (req, res, next) => {
    console.log('Retrieving Skills')
    axios.get('http://www.dnd5eapi.co/api/skills/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  listSpells: (req, res, next) => {
    console.log('Retrieving Spells')
    axios.get('http://www.dnd5eapi.co/api/spells/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  listClassLevels: (req, res, next) => {
    const { class } = req.params;
    console.log(`Retrieving Levels for Class: ${class}`)
    axios.get(`http://www.dnd5eapi.co/api/classes/${_.toLower(class)}/levels`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
  listFeatures: (req, res, next) => {
    console.log('Retrieving Features')
    axios.get('http://www.dnd5eapi.co/api/features/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send({ error: 'Oops! Something went wrong' });
        console.log(err);
      })
  },
}