const axios = require('axios');

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
  // getRace: (req, res, next) => {

  // },
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
  // getClass: (req, res, next) => {

  // },
  // listProficiencies: (req, res, next) => {

  // },
  // listSkills: (req, res, next) => {

  // },
  // listSpells: (req, res, next) => {

  // },
  // listClassLevels: (req, res, next) => {

  // },
  // listFeatures: (req, res, next) => {

  // },
}