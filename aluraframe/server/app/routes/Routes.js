/* Código simplório, apenas para fornecer o serviço para a aplicação */


const express = require("express");
const api = require("../api/CustomController");
const routes = express.Router();

routes.get('/negociacoes/semana', api.listaSemana);
routes.get('/negociacoes/anterior', api.listaAnterior);
routes.get('/negociacoes/retrasada', api.listaRetrasada);  
routes.post('/negociacoes', api.cadastraNegociacao);          

module.exports = routes;
