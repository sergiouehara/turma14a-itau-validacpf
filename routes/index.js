var express = require('express');
var Cliente = require('../modelos/cliente');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cpf = req.query.cpf
  var cliente = new Cliente()
  cliente.cpf = cpf
  let cpfValidado = cliente.validarCpf()
  res.render('index', { cpfValidado:cpfValidado, cpf:cpf });
});
module.exports = router;
