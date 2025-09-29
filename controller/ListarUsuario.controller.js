import listar from '../service/ListarUsuario.service.js';

export default async function listarUsuarioController(req, res) {
    try {
      const usuarios = await listar();

      return res.status(200).json({
        total: usuarios.length,
        usuarios
      });
    } catch (error) {
      return res.status(500).json({
        erro: 'Erro ao listar usuários',
        detalhes: error.message
      });
    }
  }


