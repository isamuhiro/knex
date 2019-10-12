require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.use(express.json())

app.get('/accounts', (req, res) => {
  knex('accounts').orderBy("id").then(account => res.json(account));
});

app.get('/account/:id', (req, res) => {
  let id = req.params.id;
  knex('accounts').where({ id }).then(account => res.json(account));
});

app.post('/account', (req, res) => {
  let data = req.body;
  knex('accounts').insert(data).returning('*').then(id => res.json(id));
});

app.delete('/account/:id', (req, res) => {
  let id = req.params.id;
  knex('accounts').where({ id }).del().returning('*').then(id => res.json(id));
});

app.put('/account/:id', (req, res) => {
  let id = req.params.id;
  let data = req.body;
  knex('accounts').where({ id }).update(data).returning('*').then(account => res.json(account));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});