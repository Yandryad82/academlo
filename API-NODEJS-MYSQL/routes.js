const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
	req.getConnection((err, conn) => {
    if(err) return res.send(err)
    conn.query('SELECT * FROM hotels', (err, rows) => {
      if(err) return res.send(err)
      res.json(rows)
    })
  })
})

routes.post('/', (req, res) => {
	req.getConnection((err, conn) => {
    if(err) return res.send(err)
    conn.query('INSERT INTO hotels set ?', [req.body], (err, rows) => {
      if(err) return res.send(err)
      res.json(rows)
    })
  })
})

routes.delete('/:id', (req, res) => {
	req.getConnection((err, conn) => {
    if(err) return res.send(err)
    conn.query('DELETE FROM hotels WHERE id = ?', [req.params.id], (err, rows) => {
      if(err) return res.send(err)
      res.json(rows)
    })
  })
})

routes.put('/:id', (req, res) => {
	req.getConnection((err, conn) => {
    if(err) return res.send(err)
    conn.query('UPDATE hotels set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
      if(err) return res.send(err)
      res.json(rows)
    })
  })
})

module.exports = routes