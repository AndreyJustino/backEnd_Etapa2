import express from 'express';
const router = express.Router();

import CadastroUsuarioController from './controller/CadastroUsuario.controller.js';
import ListarUsuarioController from './controller/ListarUsuario.controller.js';
import BuscarUsuarioController from './controller/BuscarUsuario.controller.js';

// Rotas
router.post('/usuarios', (req, res) => CadastroUsuarioController(req, res));
router.get('/usuarios', (req, res) => ListarUsuarioController(req, res));
router.get('/usuarios/:id', (req, res) => BuscarUsuarioController(req, res));

export default router;