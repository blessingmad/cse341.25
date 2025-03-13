const routes = require('express').Router();

routes.get('/', (req, res) =>  {
    res.send('Blessing');
})

module.exports = routes;